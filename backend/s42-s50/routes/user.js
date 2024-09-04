const express = require("express");
const passport = require("passport");
const userController = require("../controllers/user");

const { verify, isLoggedIn, verifyAdmin } = require("../auth");

const router = express.Router();

router.post("/check-email", userController.checkEmailExists);

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

router.get("/details",verify, userController.getProfile);

router.post("/enroll", verify, userController.enroll);

router.get('/get-enrollments', verify, userController.getEnrollments);



//Google Login
router.get('/google',
		passport.authenticate('google', {
			scope: ['email', 'profile'],
			prompt: "select_account"
		}	
	));


//Callback for Google OAuth authentication
router.get('/google/callback',
		passport.authenticate('google', {
			failureRedirect: '/users/failed',
		}),
		function (req, res) {
			res.redirect('/users/success')
		}
	);


//Route for failed Google Oauth 
router.get('/failed', (req, res) => {
	console.log('User is not authenticated');
	res.send("Failed")
})

//Route for success
router.get('/success', isLoggedIn, (req, res) => {
	console.log('You are logged in')
	console.log(req.user)
	res.send(`Welcome ${req.user.displayName}`)
})


//Google Logout
router.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			console.log("Error while destroying session:", err);
		} else {
			req.logout(() => {
				console.log('You are logged out');
				res.redirect('/')
			})
		}
	})
})

router.put('/reset-password', verify, userController.resetPassword);

router.put('/profile', verify, userController.updateProfile);

router.put('/admin', verify, verifyAdmin, async (req, res) => {
	const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required.' });
  }

  try {
    // Find user by ID and update `isAdmin` status
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { isAdmin: true }, // Set `isAdmin` to `true`
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ message: 'User updated successfully.', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating the user.' });
  }
});


module.exports = router;
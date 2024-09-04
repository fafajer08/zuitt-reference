const express = require("express");

const userController = require("../controllers/user");

const { verify, isLoggedIn, verifyAdmin } = require("../auth");

const router = express.Router();

// User Registration
router.post("/register", userController.registerUser);

// Route User Authentication
router.post("/login", userController.userAuthentication);

// Retrieve user details
router.get("/details",verify, userController.getProfile);

// Update user as admin
router.patch("/:id/set-as-admin", verify, verifyAdmin, async (req, res) => {
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

// Update Password
router.patch('/update-password', verify, userController.resetPassword);



module.exports = router;
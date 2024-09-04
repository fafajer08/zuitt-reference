const bcrypt = require('bcrypt');

const User = require("../models/User");

const auth = require("../auth");
const { errorHandler } = auth;


// User Registration
module.exports.registerUser = (req, res) => {

	// Checks if the email is in the right format
	if (!req.body.email.includes("@")){
			return res.status(400).send({
					success : false,
					message: "Invalid email format"
			});
	}
	// Checks if the mobile number has the correct number of characters
	else if (req.body.mobileNo.length !== 11){
			return res.status(400).send({
					success : false,
					message: "Mobile number is invalid"
			});
	}
	// Checks if the password has atleast 8 characters
	else if (req.body.password.length < 8) {
			return res.status(400).send({
					success : false,
					message: "Password must be atleast 8 characters long" //try (at least) if there message error
			});
	// If all needed requirements are achieved
	} else {
			let newUser = new User({
					firstName : req.body.firstName,
					lastName : req.body.lastName,
					email : req.body.email,
					mobileNo : req.body.mobileNo,
					password : bcrypt.hashSync(req.body.password, 10)
			})

			return newUser.save()
			.then((result) => res.status(201).send({
					success : true,
					message: "User registered successfully",
					user : result
			}))
			.catch(error => errorHandler(error, req, res));
	}
};

// User Authentication 
module.exports.loginUser = (req, res) => {

	if (req.body.email == "") {
		return res.status(400).send({message: "No email found"});
	}

	if (req.body.email.includes("@")) {

		return User.findOne({email: req.body.email})
		.then(result => {
			if (result == null) {
				return res.status(404).send({message: "Incorrect email or password"});
			} else {
				const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);

				if (isPasswordCorrect) {
					return res.status(201).send({
						message: "User logged in successfully",
						access: auth.createAccessToken(result)
					});
				} else {
					return res.status(404).send({message: "Incorrect email or password"});
				}
			}
		})
		.catch(error => errorHandler(error, req, res))
	} else {

		res.status(400).send({message: "Invalid email"});
	}
}


// Retrieve user details
module.exports.getProfile = (req, res) => {
	return User.findById(req.user.id)
	.then(user => {
		if (user !== null) {
			user.password = "";
			return res.status(200).send(user);
		} else {
			return res.status(404).send({message: "User not found"})
		}
		
	})
	.catch(error => errorHandler(error, req, res))
}


// Update Password 
module.exports.resetPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const { id } = req.user; // Extracting user ID from the authorization header

    // Hashing the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Updating the user's password in the database
    await User.findByIdAndUpdate(id, { password: hashedPassword });

    // Sending a success response
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


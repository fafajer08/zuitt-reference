const Course = require("../models/Course");
const User = require("../models/User");
const Enrollment= require("../models/Enrollment");
const { errorHandler } = require("../auth");

// Create course
module.exports.addCourse = (req, res) => {

	let newCourse = new Course({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price
	});

	Course.findOne({name: req.body.name})
	.then(existingCourse => {
		if (existingCourse) {
			return res.status(409).send({message: 'Course already exist'});
		} else {
			return newCourse.save()
			.then(result => res.status(201).send({
				success: true,
				message: 'Course added successfully',
				result: result
			}))
			.catch(error => errorHandler(error, req, res))
		}
	})
	.catch(error => errorHandler(error, req, res))

}

// Get all Courses
module.exports.getAllCourses = (req, res) => {
	return Course.find({})
	.then(result => {

		if (result.length > 0) {
			return res.status(200).send(result)
		} else {
			return res.status(404).send({message: 'No Courses found'});
		}
	})
	.catch(error => errorHandler(error, req, res))
}

// Get all Active Courses
module.exports.getAllActive = (req, res) => {
	return Course.find({isActive: true})
	.then(result => {

		if (result.length > 0) {
			return res.status(200).send(result)
		} else { // Validation for Empty Course List
			return res.status(404).send(false); // No active course found
		}
	})
	.catch(error => errorHandler(error, req, res))
}

// Get specific course by ID
module.exports.getCourse = (req, res) => {
	return Course.findById(req.params.id)
	.then(course => {
		if (course !== null) {
			return res.status(200).send(course)
		} else {
			return res.status(404).send({message: 'Course not found'});
		}
	})
	.catch(error => errorHandler(error, req, res))
}

// Update Course by ID
module.exports.updateCourse = (req, res) => {
  let updatedCourse = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };

  return Course.findByIdAndUpdate(req.params.courseId, updatedCourse)
    .then((course) => {
      if (course) {
        res
          .status(200)
          .send({ success: true, message: "Course updated successfully" });
      } else {
        res.status(404).send({ message: "Course not found" });
      }
    })
    .catch((error) => errorHandler(error, req, res));
};
// Archive a Course
module.exports.archiveCourse = (req, res) => {
  let updateActiveField = {
    isActive: false,
  };

  Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
    .then((course) => {
      // Check if a course was found
      if (course) {
        // If course found, check if it was already archived
        if (!course.isActive) {
          // If course already archived, return a 200 status with a message indicating "Course already archived".
          return res.status(200).send({
            message: "Course already archived",
            course: course,
          });
        }
        // If course not archived, return a 200 status with a boolean true.
        return res.status(200).send({
          success: true,
          message: "Course archived successfully",
        });
      } else {
        // If course not found, return a 404 status with a boolean false.
        return res.status(404).send({ message: "Course not found" });
      }
    })
    .catch((error) => errorHandler(error, req, res));
};

// Activate a Course
module.exports.activateCourse = (req, res) => {
  
	let updateActiveField = {
			isActive: true
	}

	Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
			.then(course => {
				// Check if a course was found
				if (course) {
						// If course found, check if it was already activated
						if (course.isActive) {
								// If course already activated, return a 200 status with a message indicating "Course already activated".
								return res.status(200).send({
										success: true, //
										message: 'Course already activated',
										course: course
								});
						}
						// If course not yet activated, return a 200 status with a boolean true.
						return res.status(200).send({
								success: true,
								message: 'Course activated successfully',
								course: course //
						});
				} else {
						// If course not found, return a 404 status with a boolean false.
						return res.status(404).send({
								success: false, //
								message: 'Course not found'
						}
						);
				}
			})
			.catch(error => errorHandler(error, req, res));
};


module.exports.searchCoursesByName = async (req, res) => {
  try {
    const { name } = req.body;

    // Use a regular expression to perform a case-insensitive search
    const courses = await Course.find({
      name: { $regex: name, $options: 'i' }
    });

    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.getEmailsOfEnrolledUsers = async (req, res) => {
	const courseId = req.params.courseId;

	try {
					// Find enrollments by courseId
					const enrollments = await Enrollment.find({ 'enrolledCourses.courseId': courseId });
	if (!enrollments.length) {
							return res.status(404).json({ message: 'Enrollment not found' });
					}
	// Get the userIds of enrolled users from the enrollments
					const userIds = enrollments.map(enrollment => enrollment.userId);
	// Find the users with matching userIds
					const enrolledUsers = await User.find({ _id: { $in: userIds } });
	// Extract the emails from the enrolled users
					const emails = enrolledUsers.map(user => user.email);
	res.status(200).json({ userEmails: emails });
			} catch (error) {
					res.status(500).json({ message: 'An error occurred while retrieving enrolled users' });
			}
};

module.exports.searchCoursesByPrice = async (req, res) => {
  try {
    const { minPrice, maxPrice } = req.body;

    // Validate minPrice and maxPrice
    if (!minPrice || !maxPrice) {
      return res.status(400).json({ message: 'minPrice and maxPrice are required.' });
    }

    if (isNaN(minPrice) || isNaN(maxPrice)) {
      return res.status(400).json({ message: 'minPrice and maxPrice must be numbers.' });
    }

    // Use the price range to filter courses
    const courses = await Course.find({
      price: { $gte: Number(minPrice), $lte: Number(maxPrice) }
    });

    if (courses.length > 0) {
      return res.status(200).json(courses);
    } else {
      return res.status(404).json({ message: 'No courses found within this price range.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred while searching for courses.' });
  }
};


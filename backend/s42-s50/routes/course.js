const express = require("express");
const courseController = require("../controllers/course");
const auth = require("../auth");

const { verify, verifyAdmin } = auth;

const router = express.Router();

// Route for creating a course
router.post("/", verify, verifyAdmin, courseController.addCourse);

// Route to show all courses
// router.get("/", (req, res) => {
// 	courseController.getAllCourses().then(resultFromController => res.send(resultFromController));
// });
//member 3 - s44

router.get("/all", verify, verifyAdmin, courseController.getAllCourses);

router.get("/", courseController.getAllActive);

router.get("/specific/:id", courseController.getCourse);

router.patch("/:courseId", verify, verifyAdmin, courseController.updateCourse);

router.post('/search', courseController.searchCoursesByName);

router.post('/:courseId/enrolled-users', courseController.getEmailsOfEnrolledUsers);

// Route to search courses by price range
router.post('/search-price', courseController.searchCoursesByPrice);

module.exports = router;
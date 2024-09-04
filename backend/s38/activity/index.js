const http = require("http");

const port = 4000;


const app = http.createServer(function(request, response) {
    if (request.url == '/' && request.method === 'GET') {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Welcome to Booking System");

    } else if (request.url == '/profile' && request.method === 'GET') {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Welcome to your profile");
    } else if (request.url == '/courses' && request.method === 'GET') {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Here's our courses available");
    } else if (request.url == '/addCourse' && request.method === 'POST') {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Add a course to our resources");
    } else if (request.url == '/updateCourse' && request.method === 'PUT') {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Update a course to our resources");
    } else if (request.url == '/deleteCourse' && request.method === 'DELETE') {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Delete courses to our resources");
    } else if (request.url == '/updateProfile' && request.method === 'PATCH') {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Update your profile to our resources");
    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("Page not found");
    }

});




// app.listen(port, () => {
//     console.log(`Server listening on port: ${port}`);
// });

if(require.main === module){
    app.listen(4000, () => console.log(`Server running at port 4000`));
}

module.exports = app;
# Todo Application
This repository contains a Todo Application built with React and Node.js. Follow the instructions below to set up and run the application on your local machine.

# Installation
Open Git Bash (or any terminal of your choice). 

Clone the repository using the following command:

git clone https://github.com/abuzar7266/todo-application.git

Navigate to the todo-application/todo-app/ directory using the cd command:

cd todo-application/todo-app/

# Usage

Make sure you have Docker installed on your device and ensure that ports 3000 and 3001 are free.

Run the following command to start the application using Docker Compose:

docker-compose up

This will build and start the Docker containers for the backend and frontend of the Todo Application.

After a few minutes, the application will be running. You can access it using the following URLs:

Backend: http://localhost:3001/

Frontend: http://localhost:3000/

Open a web browser and enter the URL for the frontend.

The application is now running, and you can start using it to manage your todos.

# Unit Testing

To start the unit test execution, go
open git and run following commands

1. cd ./todo-application/todo-app/backend/
2. npm test


Note: There are slight chances that server during testing might fail to connect with database. In that case, run Ctrl+C to terminate the test suit execution and again run "npm test" command
# Troubleshooting

If you encounter any issues or errors during the installation or usage of the application, please make sure you have followed the instructions correctly and have all the necessary dependencies installed on your device.

If the problem persists, feel free to create an issue in the repository, providing details about the error and steps to reproduce it. We will be happy to assist you.

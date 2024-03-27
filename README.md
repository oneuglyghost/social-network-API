# social-network-API
This is a RESTful API for a social network web application. It allows users to perform various actions such as creating, updating, and deleting users and thoughts, as well as adding reactions to thoughts.

##Technologies Used
1.Node.js
2.Express.js
3.MongoDB
4.Mongoose

##Getting Started
1.Clone the repository
2.Install dependencies:
  cd social-network-api
  npm install
3.Set up environment variables:
  Create a .env file in the root directory and add the following:
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/social-network
4.Start the server:
  npm start


##API Endpoints

##Users
GET /api/users: Get all users
GET /api/users/:id: Get a single user by ID
POST /api/users: Create a new user
PUT /api/users/:id: Update a user by ID
DELETE /api/users/:id: Delete a user by ID

##Thoughts
GET /api/thoughts: Get all thoughts
GET /api/thoughts/:id: Get a single thought by ID
POST /api/thoughts: Create a new thought
PUT /api/thoughts/:id: Update a thought by ID
DELETE /api/thoughts/:id: Delete a thought by ID

##Reactions
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Delete a reaction from a thought

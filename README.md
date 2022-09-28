# CopysmithChallenge

You can run this API by using the command `npm start` to initialize the server

To run the Docker container, simply run `docker run -p 5000:3000 copysmithchallenge` to route the port from the Docker container to your localhost:5000

Then, in Postman or curl, hit the endpoint `localhost:5000/joke` to generate a joke

your JSON request body should look something like this:
`{
   "topic": "<INSERT_TOPIC>",
   "ageGroup": "<INSERT_AGE_GROUP"
}`

import "dotenv/config";
import express from "express";
import UsersRouter from "./src/routes/UsersRoutes.js";
import JokesRouter from "./src/routes/JokesRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// example of middleware
// app.use((req, res, next) => {

//   if (!req.body.name) {
//     res.send({ error: "No name was provided" })
//   }

//   console.log("request coming through");
//   next();
// });

// app.use((req, res, next) => {
//   if (!req.body.email) {
//     res.send({ error: "No email"})
//   }

//   next();
// });

// defining the homepage endpoint | localhost:3000/
app.get("/", (req, res) => {
  res.send({ msg: "Health Check" });
});

// defining our routes for each grouped endpoints, get, post, put, patch, delete
app.use('/users', UsersRouter);
app.use('/jokes', JokesRouter);

// start the server/app here
app.listen(PORT, () => {
  console.log("Running Server: " + PORT);
});

/**
 * HTTP methods: get, post, put, update, delete
 * const options = {
 *  method: "GET",
 * headers: {
 *  'Content-Type': 'application/json',
 *  'Authorization': 'Bearer my-secret-token',
 * },
 * body: {
 *
 * }
 * }
 *
 * const data = await axios.get('https://randomuser.api/user/4?users="mothers"&ages=20&', options)
 */
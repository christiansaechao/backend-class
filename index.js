import express from "express";

const app = express();
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

app.use(express.json());

app.use((req, res, next) => {
  console.log("request coming through");
  next();
});

// loclahost:3000/
app.get("/", (req, res) => {
  const { id } = req.params;
  res.send({ msg: "Health Check" });
});

// localhost:3000/finn
app.get("/finn", (req, res) => {
  res.json({
    success: true,
  });
});

//database
const users = [
  {
    name: "finn",
    age: "28",
    email: "finn@gmail.com",
  },
  {
    name: "Bob",
    age: "11",
    email: "bob@gmail.com",
  },
];

// send back a user: name, age, email
/**
 * const data = await axios.post('localhost:3000/user, { headers: {}, body: { name: 'charles', age: 24, email: 'charles@gmail.com' }})
 */

app.post("/user", (req, res) => {
  const { name, age, email } = req.body;
  const newUser = { name, age, email };
  users.push(newUser);
  res.send({ success: true, data: users });
});

// put request - change user finn's age to 22  const data = await axios.post('localhost:3000/user, { headers: {}, body: { name: 'bob', age: 22 }})
/**
 *
 */
app.put("/users", (req, res) => {
  const name  = req.body.name;
  const age = req.body.age;

  // returns the index of the object in the users array [1]
  const userIndex = users.findIndex((user) => user.name === name);

  if (userIndex === -1) {
    res.send({ success: false, error: "No user was found with that name" });
  }

  const userToUpdate = [...users[userIndex], age];

  users[userIndex] = userToUpdate;

  res.send({ success: true, data: users });
});

// delete request - delete the user bob
app.delete("/users", (req, res) => {
  const index = users.findIndex((user) => user.name === req.body.name);

  if (index === -1) {
    res.send({ success: false, error: "No user was found with that name" });
  }

  // if valid element found
  users.splice(index, 1);
  res.send({ success: true, data: users });
});

app.get("/damien", (req, res) => {
  res.status(418).send({ msg: 23000 });
});

app.listen(3000, () => {
  console.log("Running Server");
});
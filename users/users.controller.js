// const express = require("express");
// const router = express.Router();
// const userService = require("./users.service");

// // routes
// router.post("/authenticate", authenticate);
// router.post("/register", register);
// router.get("/", getAll);
// router.get("/current", getCurrent);
// router.get("/:id", getById);
// router.put("/:id", update);
// router.delete("/:id", _delete);

// module.exports = router;

// function authenticate(req, res, next) {
//   userService
//     .authenticate(req.body)
//     .then(user =>
//       user
//         ? res.json(user)
//         : res.status(400).json({ message: "Username or password is incorrect" })
//     )
//     .catch(err => next(err));
// }

// function register(req, res, next) {
//   userService
//     .create(req.body)
//     .then(() => res.json({}))
//     .catch(err => next(err));
// }

// function getAll(req, res, next) {
//   userService
//     .getAll()
//     .then(users => res.json(users))
//     .catch(err => next(err));
// }

// function getCurrent(req, res, next) {
//   userService
//     .getById(req.user.sub)
//     .then(user => (user ? res.json(user) : res.sendStatus(404)))
//     .catch(err => next(err));
// }

// function getById(req, res, next) {
//   userService
//     .getById(req.params.id)
//     .then(user => (user ? res.json(user) : res.sendStatus(404)))
//     .catch(err => next(err));
// }

// function update(req, res, next) {
//   userService
//     .update(req.params.id, req.body)
//     .then(() => res.json({}))
//     .catch(err => next(err));
// }

// function _delete(req, res, next) {
//   userService
//     .delete(req.params.id)
//     .then(() => res.json({}))
//     .catch(err => next(err));
// }

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/api/contacts", function(req, res) {
});

app.post("/api/contacts", function(req, res) {
});

/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get("/api/contacts/:id", function(req, res) {
});

app.put("/api/contacts/:id", function(req, res) {
});

app.delete("/api/contacts/:id", function(req, res) {
});
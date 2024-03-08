const express = require("express");
const app = express();

// Set up the view engine to use Pug
app.set("view engine", "pug");

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Set up a route to handle req uests
app.get("/", (req, res) => {
  res.render("home", {
    posts: [
      {
        profilepic: "/images/profile1.jpg",
        name: "John Doe",
        date: "2023-03-22",
        reply: "5",
        message: "This is a sample post",
      },
      {
        profilepic: "/images/profile2.jpg",
        name: "Jane Doe",
        date: "2023-03-21",
        reply: "3",
        message: "Another sample post",
      },
    ],
  });
});

// Set up a route to handle 404 errors
app.use((req, res) => {
  res.status(404).render("404");
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("Server is connected running on http://localhost:3000");
});

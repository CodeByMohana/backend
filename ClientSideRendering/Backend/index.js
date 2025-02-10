const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
let datas = ["coding", "music", "gaming", "reading"];

app.get("/todos", (req, res) => {
  res.json({datas});
});
let univ = [
  {
    name: "University of Dhaka",
    location: "Dhaka",
    established: 1921,
  },
  {
    name: "Bangladesh University of Engineering and Technology",
    location: "Dhaka",
    established: 1912,
  },
  {
    name: "Jahangirnagar University",
    location: "Savar",
    established: 1970,
  },
  {
    name: "North South University",
    location: "Dhaka",
    established: 1992,
  },
];
app.get("/universities", (req, res) => {
    res.json({datas:univ});
    });
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

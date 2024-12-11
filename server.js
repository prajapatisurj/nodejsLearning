const express = require("express");
const app = express();
const PORT = 5788;

const users = [
  {
    id: 1,
    name: "suraj",
    mobile: 8962290486,
  },
];

app.get("/api/user", (req,res) => {
  res.status(200).json(users);
});

app.listen(PORT, () => {
  console.log("server is listioning", `${PORT}`);
});

const app = require("./index.js");
require("dotenv").config();

const connect = require("./configs/db.js");

app.listen(process.env.PORT, async () => {
  await connect();
  console.log("Server is Live now.");
});

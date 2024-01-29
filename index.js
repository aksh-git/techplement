import express from "express";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import connectToDatabase from "./lib/db.js";
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true })); // getting URL encodings
app.use(express.json());
app.use(cors());
// connecting database
connectToDatabase();
//API Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use(express.static("./static"));
// 404 handler
app.use("*", (req, res, next) => {
  res.send("Hello HOomun, Nice to meet you.");
});
app.listen(PORT, () => {
  console.log("backend service listening on port :", PORT);
});

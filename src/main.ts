require("dotenv").config();

import express from "express";

import cors from "cors";
import userRoutes from "./routes/user.route";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = 3000;

app.get("/healthcheck", (req, res) => {
 res.status(200).send("Ok");
});

app.listen(PORT, async () => {
 console.log(`Server is running on port ${PORT}`);
});

import * as dotenv from "dotenv";

dotenv.config();

import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import cors from "cors";
import userRoutes from "./routes/user.route";
import path from "path";

const options = {
 definition: {
  openapi: "3.0.0",
  info: {
   title: "User Management API",
   version: "1.0.0",
  },
 },
 apis: ["./src/routes/*.ts"], // Path to the API docs
};

const specs = swaggerJsDoc(options);

console.log(specs);

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api/users", userRoutes);

const PORT = 3000;

app.get("/healthcheck", (req, res) => {
 res.status(200).send("Ok");
});

app.listen(PORT, async () => {
 console.log(`Server is running on port ${PORT}`);
});

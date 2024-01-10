import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 3000;

app.get("/healthcheck", (req, res) => {
 res.status(200).send("Ok");
});

app.listen(PORT, async () => {
 console.log(`Server is running on port ${PORT}`);
});

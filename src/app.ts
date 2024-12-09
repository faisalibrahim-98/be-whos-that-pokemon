import pokemonRouter from "../routes/pokemonRoutes";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(pokemonRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`));

export default app;

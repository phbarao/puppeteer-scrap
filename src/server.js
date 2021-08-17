import express from "express";
import cors from "cors";

import routes from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3456;

app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`>>> Server running on port: ${port}`);
});

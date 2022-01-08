import express, { Request, Response } from "express";
import { Pool } from "pg";
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
const app = express();
const PORT: string | number = process.env.PORT || 5000;

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

app.get("/test", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

app.get("/db", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM test_table");
    const results = { results: result ? result.rows : null };
    res.render("pages/db", results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

app.listen(PORT, () => console.log(`hosting @${PORT}`));

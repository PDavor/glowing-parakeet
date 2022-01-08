import express, { Request, Response } from "express";
const app = express();
const PORT: string | number = process.env.PORT || 5000;

app.use("*", (req, res) => {
  res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});
app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

app.listen(PORT, () => console.log(`hosting @${PORT}`));

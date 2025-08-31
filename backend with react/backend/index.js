import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/api/hello", (req, res) => {
  res.send("You are in hello route");
});
app.get("/api/youtube", (req, res) => {
  res.send("You are in youtube route");
});
app.get("/api/hanan", (req, res) => {
  res.send("You are in hanan route");
});
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 2,
      title: "Why did the math book look sad?",
      content: "Because it had too many problems.",
    },
    {
      id: 3,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field.",
    },
    {
      id: 4,
      title: "Why don't programmers like nature?",
      content: "It has too many bugs.",
    },
    {
      id: 5,
      title: "Why did the bicycle fall over?",
      content: "Because it was two-tired.",
    },
  ];
  res.send(jokes);
});

app.listen(process.env.PORT, () => {
  console.log(
    `Your app app is running on https://localhost:${process.env.PORT}`,
  );
});

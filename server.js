import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors({
  origin: "https://frontend-ai-code-review.vercel.app/", // ✅ replace with your frontend URL
  methods: ["GET", "POST"],
}));

app.get("/", (req, res) => {
  res.send("Hello World from backend!");
});

app.post("/api/review", (req, res) => {
  res.json({ message: "Review route working!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));

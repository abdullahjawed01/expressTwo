import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(cors());

// VERY IMPORTANT ORDER:
app.use(express.urlencoded({ extended: true }));  
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: "public" });
});

app.post("/contact", (req, res) => {
  console.log("Form Data Received:");
  console.log(req.body);

  res.status(200).json({
    msg: "Form submitted successfully!",
    data: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

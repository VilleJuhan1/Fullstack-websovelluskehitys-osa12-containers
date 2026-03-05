import express from "express";
import countriesRouter from "./routes/countries.js";
import healthRouter from "./routes/health.js";

// Create the Express app instance.
const app = express();
const port = process.env.PORT || 3001;

// Attach API routes under /api.
app.use("/api", healthRouter);
app.use("/api", countriesRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Start the HTTP server.
app.listen(port, () => {
  console.log(`Backend listening on ${port}`);
});

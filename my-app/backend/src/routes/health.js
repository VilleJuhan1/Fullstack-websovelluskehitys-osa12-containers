import { Router } from "express";

const router = Router();

// Lightweight health probe for uptime checks.
router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Test comment for watch

export default router;

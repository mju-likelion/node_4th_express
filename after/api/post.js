import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  const text = req.body;

  return res.status(200).json({
    data: {
      message: "POST" + text,
    },
  });
});

export default router;

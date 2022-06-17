import { Router } from "express";

const router = Router();

router.get("/1", (req, res) => {
  return res.status(200).json({
    data: {
      res: "get-1",
    },
  });
});

router.get("/2", (req, res) => {
  return res.status(200).json({
    data: {
      res: "get-2",
    },
  });
});

export default router;

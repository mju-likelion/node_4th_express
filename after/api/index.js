import { Router } from "express";
import get from "./get";
import post from "./post";

const router = Router();

router.use("/get", get);
router.use("/post", post);

export default router;

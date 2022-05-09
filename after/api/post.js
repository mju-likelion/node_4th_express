import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  //request의 body 안 text를 text라는 변수에 할당
  const text = req.body.text;

  // response code 200번과 함께 json 형태(아래의 data)를 응답
  return res.status(200).json({
    data: {
      message: "POST",
      text,
    },
  });
});

export default router;

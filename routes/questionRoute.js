import express from "express";

const router = express.Router();

router.get("/get-questions", getQuestions);
router.post("/submit-answer", submitAnswer);
router.post("/post-question", postQuestion);

export default router;
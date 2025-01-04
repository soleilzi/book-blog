import express from "express"
import { createBook, getBook, getBooks, updateBook, deleteBook } from "../controllers/bookControllers.js";

const router = express.Router();

router.post("/", createBook);

router.get("/", getBooks);

router.get("/:id", getBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook,);

export default router;
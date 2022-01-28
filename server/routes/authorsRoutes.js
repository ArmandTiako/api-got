import express from "express";
import { createAuthor } from "../controllers/authors/create-author.controller.js";
const router = express.Router()


router.post("/author/create", createAuthor)



export { router }
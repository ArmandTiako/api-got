import express from "express";
import {createAuthor, findOneAuthor} from "../controllers/authors/authorscontrollers.js";
const router = express.Router()


router.post("/author/create", createAuthor)
router.get('/author/:id', findOneAuthor )


export {

}
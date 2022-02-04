"use strict";
import express from "express";
import { createAuthor } from "../controllers/authors/create-author.controller.js";
import { deleteAuthor } from "../controllers/authors/deleteOne-author.controller.js";
import { findAuthor } from "../controllers/authors/find-author.controller.js";
import { findAllAuthors } from "../controllers/authors/findAll-authors.controller.js";

const router = express.Router();

router.post("/author/create", createAuthor);
router.get("/author/:id", findAuthor);
router.get("/authors/", findAllAuthors);
router.delete("/author/:id", deleteAuthor);

export { router };

"use strict";
import express from "express";
import { createAuthor } from "../controllers/authors/create-author.controller.js";
import { deleteAuthor } from "../controllers/authors/deleteOne-author.controller.js";
import { findAuthor } from "../controllers/authors/find-author.controller.js";
import { findAllAuthors } from "../controllers/authors/findAll-authors.controller.js";
import { updateAuthor } from "../controllers/authors/update-author.controller.js";

const authorRouter = express.Router();

// CRUD Author's routes
authorRouter.post("/create", createAuthor);
authorRouter.get("/allauthors", findAllAuthors);
authorRouter.get("/:id", findAuthor);
authorRouter.delete("/:id", deleteAuthor);
authorRouter.put("/:id", updateAuthor);

export { authorRouter };

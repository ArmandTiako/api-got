import express from "express";
import { Author } from "../../models/author.model.js";

// Creating a new author into a controller
export const createAuthor = async (req, res) => {
  const { name, books } = req.body;
  try {
    let newAuthor = await Author.create({ name, books });
    res.status(201).json({
      error: null,
      message: "author successfully created"
    });
    return newAuthor;
  } catch (error) {
    res.status(400).json({
      error,
      message: "Something went wrong"
    });
  }
};

import express from "express";
import { Author } from "../../models/author.model.js";


export const findAuthor = async ( req, res ) => {
  try {
    const { id } = req.params;
    const result = await Author.findById(id);
    return res.json({
        data: result
    })
  } catch (error) {
      res.status(404).json({
          error,
          message: "Author not found"
      })  
  }
};



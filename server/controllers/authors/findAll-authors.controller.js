import { Author } from "../../models/author.model.js";


export const findAllAuthors = async ( req, res ) => {
  try {
    const allAuthors = await Author.find();
    return res.json({
        data: allAuthors
    })
  } catch (error) {
      res.status(404).json({
          error,
          message: "No data provided"
      })  
  }
};
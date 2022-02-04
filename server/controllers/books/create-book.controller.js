"use strict";
import { Books } from "../../models/books.model";

// Creating a new author into a controller
export const createBook = async (req, res) => {
    try {
        const { title, category, number_of_pages, authors } = req.body;
        let newBook = await Books.create({ title, category, number_of_pages, authors });
        return res.status(201).json({
            message: "author successfully created",
            data: newBook,
        });
    } catch (error) {
        res.status(400).json({
            error,
            message: "Something went wrong",
        });
    }
};

import { Author } from "../../models/author.model.js";


export const deleteAuthor = async (req,res) => {
    try {
        const {id} = req.params; 
        await Author.findByIdAndDelete(id);
        res.status(200).json({
        error: null,
        message: `Author ${id} successfully deleted`
        })       
    } catch (error) {
        res.status(404).json({
            error,
            message: "Author to delete not found"
        })
    } 
}
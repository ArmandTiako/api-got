export const addBook = (book) => ({
    type: "ADD_BOOK",
    payload: book,
});
export const deleteBook = (id) => ({
    type: "DELETE_BOOK",
    payload: id,
});
export const getAllBooks = () => ({
    type: "GET_BOOKS",
    payload: [],
});
export const updateBook = (id) => ({
    type: "UPDATE_BOOK",
    payload: id,
});

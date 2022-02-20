const initialState = {
    books: [],
};

export const BookReducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case "ADD_BOOK":
            return {
                ...state.books,
                books: [...state.books, payload],
            };
    }
};

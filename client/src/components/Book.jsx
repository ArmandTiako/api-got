import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Book = () => {

    const [books, setBooks] = useState([
        
    ])

    useEffect(() => {
        fetchBooks()
    }, [])
    console.log(books)

    const fetchBooks = () => {
        axios.get("https://anapioficeandfire.com/api/books").
        then((result => {
            setBooks(result.data)
        } ))
    }
    

    return (
        <div>
            <p>Mes livres !</p>
            {
                books.map((book, id) => (
                    <ul key={id}>
                        <li>{book.name}</li>
                        <li>{book.country}</li>
                    </ul>
                    
                ))
            }
        </div>
    )
}
    

export default Book

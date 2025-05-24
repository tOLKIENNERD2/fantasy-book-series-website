import React from 'react';

const Books = () => {
    const bookList = [
        {
            title: "Book One",
            cover: "/assets/book1.jpg",
            description: "This is the first book in the series, introducing the main characters and setting."
        },
        {
            title: "Book Two",
            cover: "/assets/book2.jpg",
            description: "The second installment continues the adventure with new challenges and allies."
        },
        {
            title: "Book Three",
            cover: "/assets/book3.jpg",
            description: "In the third book, the stakes are higher as the characters face their greatest fears."
        }
    ];

    return (
        <div>
            <h1>Books in the Series</h1>
            <ul>
                {bookList.map((book, index) => (
                    <li key={index}>
                        <h2>{book.title}</h2>
                        <img src={book.cover} alt={`${book.title} cover`} />
                        <p>{book.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Books;
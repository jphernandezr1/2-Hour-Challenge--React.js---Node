import Container from "react-bootstrap/Container";
import '../index.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import PostBooks from "./Post-Books";
import { FormattedMessage } from "react-intl";

function BookPage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getbooks = async () => {
      const url = "http://localhost:2000/books";
      await axios
        .get(url)
        .then((res) => {
          setBooks(res.data);
        });
    };

    getbooks();
  }, []);
    return (
        <div className="flex flex-col">
          <h1 className="text-black text-2xl font-semibold mb-4">
            <FormattedMessage id="booksHead"/>
            </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <Container className="mt-3 flex flex-wrap gap-4 overflow-auto">
                {books.map((book) => (
                    <PostBooks imagen= {book.image} link={`/home/${book.id}`} name={book.name} isbn={book.isbn} />
                ))}
            </Container>
          </div>
        </div>
      
    );
  }
  
  export default BookPage;
  
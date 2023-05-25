import Container from "react-bootstrap/Container";
import '../index.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PostBooksInfo from "./Post-Booksinfo";

function BookPageInfo() {
  const { bookId } = useParams();
  const [book, setBooks] = useState([]);
  useEffect(() => {
    const getbook = async () => {
        const url = `http://localhost:2000/books/${bookId}`;
        await axios
          .get(url)
          .then((res) => {
            setBooks(res.data);
          })
      };
      getbook();
    }, [bookId]);
    return (
      <div className="p-4 sm:p-8">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl font-semibold mb-4">
            Info
            </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <Container className="mt-3 flex flex-wrap gap-4">
                    <PostBooksInfo  name={book.name} isbn={book.isbn} author= {book.isbn} publisher= {book.isbn} genre= {book.isbn} year= {book.isbn} available_online= {book.isbn} price = {book.isbn} summary = {book.summary}/>
            </Container>
          </div>
        </div>
      </div>
    );
  }
  
  export default BookPageInfo;
  
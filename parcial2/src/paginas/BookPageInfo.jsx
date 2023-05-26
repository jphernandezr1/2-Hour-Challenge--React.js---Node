import Container from "react-bootstrap/Container";
import '../index.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import PostBooksInfo from "./Post-Booksinfo";
import { FormattedMessage } from "react-intl";

function BookPageInfo(props) {
  const [book, setBooks] = useState([]);
  useEffect(() => {
    const getbook = async () => {
        const url = `http://localhost:2000/books/${props.bookid}`;
        await axios
          .get(url)
          .then((res) => {
            setBooks(res.data);
          })
      };
      getbook();
    }, [props.bookid]);
    
      return (
        <div className="p-4 sm:p-8">
          <div className="flex flex-col">
            <h1 className="text-black text-2xl font-semibold mb-4">
              <FormattedMessage id="infoHead"/>
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
  
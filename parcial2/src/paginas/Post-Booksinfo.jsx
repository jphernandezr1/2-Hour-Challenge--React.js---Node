import "./Card.css"; // Archivo CSS con las clases de estilo personalizadas.
import { Link } from "react-router-dom";

function PostBooksInfo(props) {
  return (
      <div className="card-size">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center">
          <h1 class="text-lg font-semibold">{props.name}</h1>
          </div>
          <div class="mt-4">
            <div className="row">
              <h3>ISBN: {props.isbn}</h3>
              <h3>Author: {props.author}</h3>
              <h3>Publisher: {props.publisher}</h3>
              <h3>Genre: {props.genre}</h3>
              <h3>Year: {props.year}</h3>
              <h3>Availability Online: {props.available_online}</h3>
              <h3>Price: {props.price}</h3>
              <h3>Summary: {props.summary}</h3>
            </div>      
          </div> 
        </div>
      </div>
  );
 }
 
 export default PostBooksInfo;
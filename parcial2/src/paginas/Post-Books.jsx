import "./Card.css"; // Archivo CSS con las clases de estilo personalizadas.
import { Link } from "react-router-dom";

function PostBooks(props) {
  return (
    <Link to={props.link} className="h-fit">
      <div className="card-size">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center">
            <img class="h-10 w-10 rounded-full" src={props.imagen} alt="User Avatar" />
          </div>
          <div class="mt-4">
            <div class="ml-4">
              <h1 class="text-lg font-semibold">{props.name}</h1>
            </div>
            <div className="row">
              <h3>ISBN: {props.isbn}</h3>
            </div>      
          </div> 
        </div>
      </div>
    </Link>
  );
 }
 
 export default PostBooks;
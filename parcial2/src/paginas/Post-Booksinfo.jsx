import "./Card.css"; // Archivo CSS con las clases de estilo personalizadas.
import { FormattedMessage } from "react-intl";

function PostBooksInfo(props) {
  const rol = sessionStorage.getItem("rol");
  if (rol === "Administrador") {
    return (
      <div className="card-size-1">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center">
            <h1 class="text-lg font-semibold">{props.name}</h1>
          </div>
          <div class="mt-4">
            <div className="row">
              <h3>
                ISBN: <input value={props.isbn} />
              </h3>
              <h3>
                <FormattedMessage id="authorId" />:{" "}
                <input value={props.author} />
              </h3>
              <h3>
                <FormattedMessage id="Publisher" />:{" "}
                <input value={props.publisher} />
              </h3>
              <h3>
                <FormattedMessage id="Genre" />: <input value={props.genre} />
              </h3>
              <h3>
                <FormattedMessage id="Year" />: <input value={props.year} />
              </h3>
              <h3>
                <FormattedMessage id="Availability" />:{" "}
                <input value={props.available_online} />
              </h3>
              <h3>
                <FormattedMessage id="Price" />: <input value={props.price} />
              </h3>
              <h3>
                <FormattedMessage id="Summary" />:{" "}
                <textarea value={props.summary} />
              </h3>
              <h5>
                <FormattedMessage id="rol" />:{rol}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-size-1">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center">
            <h1 class="text-lg font-semibold">{props.name}</h1>
          </div>
          <div class="mt-4">
            <div className="row">
              <h3>ISBN: {props.isbn}</h3>
              <h3>
                <FormattedMessage id="authorId" />: {props.author}
              </h3>
              <h3>
                <FormattedMessage id="Publisher" />: {props.publisher}
              </h3>
              <h3>
                <FormattedMessage id="Genre" />: {props.genre}
              </h3>
              <h3>
                <FormattedMessage id="Year" />: {props.year}
              </h3>
              <h3>
                <FormattedMessage id="Availability" />: {props.available_online}
              </h3>
              <h3>
                <FormattedMessage id="Price" />: {props.price}
              </h3>
              <h3>
                <FormattedMessage id="Summary" />: {props.summary}
              </h3>
              <h5>
                <FormattedMessage id="rol" />:{rol}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostBooksInfo;

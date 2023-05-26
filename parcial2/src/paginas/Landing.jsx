import React from "react";
import BookPage from "./BookPage";
import BookPageInfo from "./BookPageInfo";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function LandingPage() {
  var { bookId } = useParams();
  if (bookId === undefined) {
    bookId = 1;
  }
  return (
    <div className="row">
      <div class="relative">
        <a href="/" class="absolute top-0 right-0 mt-4 mr-4 text-red-500">
          <FormattedMessage id="signout" />{" "}
        </a>
      </div>
      <div class="grid grid-cols-3 gap-3">
        <div className="flex mb-6 bg-center col-span-2">
          <BookPage />
        </div>
        <div class="flex mb-6 bg-center col-span-1">
          <BookPageInfo bookid={bookId} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

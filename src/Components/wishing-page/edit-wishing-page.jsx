import React from "react";
import { useParams } from "react-router-dom";
import getMyWishingPages from "../../modules/localStore/get-my-wishing-pages";

function EditWishingPage() {
  let parameters = useParams();
  console.log(parameters);

  let wishing_pages = getMyWishingPages();

  let pageData = wishing_pages.filter((item) => item.pageId == parameters.id);
  console.log(pageData);

  return (
    <div>
      <h1 className="">Manage Wishing Page</h1>
      <p className="">
        This is the wishing page created to wish {pageData.name} on some event.
      </p>
    </div>
  );
}

export default EditWishingPage;

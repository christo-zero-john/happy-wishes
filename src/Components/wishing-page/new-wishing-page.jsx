import React, { useState, useEffect } from "react";
import addNewWishingPage from "../../modules/localStore/new-wishing-page.js";
import addNewpageId from "../../modules/localStore/index/add-new-page-id.js";
import getPageIdIndex from "../../modules/localStore/index/get-page-id-index.js";
import { useNavigate } from "react-router-dom";

function NewWishingPage() {
  const [data, setData] = useState({
    name: "",
    pageId: "",
    owner: "me",
    integrations: [],
    published: false,
  });

  useEffect(() => {
    console.log("Data updated: ", data);
  }, [data]);

  const [isPageIdUnique, setIsPageIdUnique] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  function setName(event) {
    let inputName = event.target.value;
    console.log("Setting Name of wished person with: ", inputName);
    setData((prevData) => ({
      ...prevData,
      name: inputName,
    }));
  }

  function setPageId(inputId) {
    console.log("Setting Unique Page Id with: ", inputId);
    setData((prevData) => ({
      ...prevData,
      pageId: inputId,
    }));

    // Check if the page ID is unique
    const usedPageIds = getPageIdIndex();
    setIsPageIdUnique(!usedPageIds.includes(inputId));
  }

  function createNewpage() {
    console.log("Creating new wishing page with: ", data);
    addNewWishingPage(data);
    console.log("wishing page created successfully");

    addNewpageId(data.pageId);

    window.location.href = "/wishing/my-pages";
  }

  // Check if the form can be submitted
  useEffect(() => {
    setCanSubmit(data.name !== "" && data.pageId !== "" && isPageIdUnique);
  }, [data.name, data.pageId, isPageIdUnique]);

  return (
    <div className="">
      <form action="" className="">
        <label className="d-block m-3" htmlFor="name">
          Name of person you are wishing
          <input
            type="text"
            className=""
            id="name"
            onChange={(e) => {
              setName(e);
            }}
          />
        </label>

        <label className="d-block m-3" htmlFor="PageId">
          Unique ID for your wishing page
          <input
            type="text"
            className=""
            id="PageId"
            onChange={(e) => {
              setPageId(e.target.value);
            }}
          />
          {(!data.pageId && <p className=""></p>) ||
            (isPageIdUnique && (
              <p className="text-success small">Page ID is available</p>
            )) || <p className="text-danger small">Page ID is already taken</p>}
        </label>

        <button
          className="btn btn-success px-5"
          type="button"
          onClick={createNewpage}
          disabled={!canSubmit}
        >
          Create New page
        </button>
      </form>
    </div>
  );
}

export default NewWishingPage;

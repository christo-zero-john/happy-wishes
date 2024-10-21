import React from "react";
import getMyWishingPages from "../../modules/localStore/get-my-wishing-pages";

function MyWishingPages() {
  function renderWishingPageItems() {
    let wishing_pages = getMyWishingPages();
    console.log(wishing_pages);
    return wishing_pages.map((item, index) => {
      return (
        <div
          className="card border border-1 border-info col-5 p-3 m-2"
          key={index}
          onClick={() => {
            window.location.href = "/wishing/my-pages/edit/" + item.pageId;
          }}
        >
          <p className="">
            Wish page for <span className="text-primary">{item.name}</span>
          </p>

          <p className="">
            Page ID <span className="text-orange">{item.pageId}</span>
          </p>

          {(item.published && (
            <p className="text-success">
              Page URL: https://happy-wishes.vercel.app/{item.pageId}
            </p>
          )) || <p className="text-danger">Page Not Published Yet</p>}

          <div className="">
            Integrations :{" "}
            {(item.integrations.length > 0 && (
              <p className="text-success"> {item.integrations.join(", ")}</p>
            )) || <p className="text-danger"> No Integrations Added Yet</p>}
          </div>
        </div>
      );
    });
  }

  return <div>{renderWishingPageItems()}</div>;
}

export default MyWishingPages;

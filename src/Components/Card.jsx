import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { id, book, author } = data;
  const { img: bookImg, title, about } = book;
  const { img: authorImg, name, pub } = author;

  const defaultBookImgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV0WxURh4QRU50JJMkKrbIC2Enn77UUqOwKbRb8R-wopOA7Tm2M1jFuVthM3TDyvsWY&usqp=CAU";
  const defaultAuthorImgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV0WxURh4QRU50JJMkKrbIC2Enn77UUqOwKbRb8R-wopOA7Tm2M1jFuVthM3TDyvsWY&usqp=CAU";

  return (
    <div className="col-6 col-md-4 col-lg-2 col-xl-2 m-1 w-96 mb-4 ">
      <div className="card h-100 border-0 main-card">
        <Link to={`/dashboard/details/${id}`} state={{ data }} className="text-decoration-none text-dark">
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <img
                src={bookImg || defaultBookImgUrl}
                className="card-img-top mb-3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultBookImgUrl;
                }}
                style={{ height: "500px", objectFit: "cover" }} 
                alt={title || "Book Image"}
              />
              <h1 className="card-title mb-2 italic font-bold underline">{title || "Title Not Available"}</h1>
              <p className="card-text mb-3">{about}</p>
            </div>
            <div className="d-flex align-items-center">
              <div className="circular-image mr-2">
                <img
                  src={authorImg || defaultAuthorImgUrl}
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultAuthorImgUrl;
                  }}
                  alt={name || "Author Image"}
                />
              </div>
              <div>
                <p className="mb-0">{name || "Author Name"}</p>
                <small className="text-muted">{pub}</small>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { axiosService } from "../Utilities/Apiservices";

const Details = () => {
  const navigate = useNavigate();
  const { state} = useLocation();
  const { data } = state;
  const { book, author } = data;
  const { img: bookImg, title, pub, about, ISBN } = book;
  const { name, birth, bio } = author;

  const defaultBookImgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV0WxURh4QRU50JJMkKrbIC2Enn77UUqOwKbRb8R-wopOA7Tm2M1jFuVthM3TDyvsWY&usqp=CAU";
  const defaultAuthorImgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV0WxURh4QRU50JJMkKrbIC2Enn77UUqOwKbRb8R-wopOA7Tm2M1jFuVthM3TDyvsWY&usqp=CAU";
  const handleDelete = async (id) => {
    var result = confirm("Are you sure you want to delete?");
    if (result) {
      let res = await axiosService.delete(`/users/${id}`);
      if (res.status == 200) {
        navigate("/dashboard");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
      <img
        src={bookImg || defaultBookImgUrl}
        className="img-fluid w-64 rounded-start"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultBookImgUrl;
        }}
      ></img>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">About Book</h2>
            <p className="text-gray-700">{about}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">ISBN</h2>
            <p className="text-gray-700">{ISBN}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Published</h2>
            <p className="text-gray-700">{pub}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Author</h2>
            <p className="text-gray-700">{name}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Author Bio</h2>
            <p className="text-gray-700">{bio}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Author Birth
            </h2>
            <p className="text-gray-700">{birth}</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Link
          to={`/dashboard/${data.id}/edit`}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-4 inline-block"
        >
          Edit
        </Link>
        <button
        to="/dashboard"
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mr-4 inline-block"
          onClick={() => {
            
            handleDelete(data.id);
            console.log("Delete button clicked");
          }}
        >
          Delete
        </button>
        <Link
          to="/dashboard"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-6inline-block"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Details;
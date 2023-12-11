/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const {
    _id,
    bookTitle,
    imageURL,
    authorName,
    category,
    bookDescription,
    bookPDFURL,
  } = useLoaderData();
  
  return (
    <div className="mt-28 px-4 lg:px-24">
        <img src={imageURL} alt="img" className="h-96" />
      <h2>{bookTitle}</h2>
    </div>
  );
};

export default SingleBook;

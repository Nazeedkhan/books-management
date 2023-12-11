import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const FavouriteBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.slice(0, 8));
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <BookCard books={books} headline="Best Sellers Books" />
    </div>
  );
};

export default FavouriteBooks;

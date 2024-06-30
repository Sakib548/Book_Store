import { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = () => {
      fetch("http://localhost:3000/all-books")
        .then((res) => res.json())
        .then((data) => setBooks(data.slice(0, 8)));
    };
    fetchBooks();
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Books" />;
    </div>
  );
};

export default OtherBooks;

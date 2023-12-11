import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Deleted Succesfully", data);
        // setAllBooks(data);
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Book Here</h2>
      <div className="overflow-x-auto">
        <Table className="lg:w-[1180px]">
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Manage</Table.HeadCell>
          </Table.Head>

          {allBooks.map((book, index) => (
            <Table.Body className="divide-y" key={book._id}>
              <Table.Row>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{book.bookTitle}</Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>$10.00</Table.Cell>
                <Table.Cell className="mr-3 flex gap-2">
                  <Link to={`/admin/dashboard/edit-book/${book._id}`}>
                    <Button
                      className="bg-green-400 hover:bg-green-700 text-black hover:text-white font-semibold py-1 px-2 
                  rounded-md"
                    >
                      Manage
                    </Button>
                  </Link>
                  <Button
                    className="bg-red-400  hover:bg-red-700 text-black hover:text-white font-semibold py-1 px-2 
                  rounded-md"
                    onClick={() => {
                      handleDelete(book._id);
                    }}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageBooks;

import { useLoaderData, useParams } from "react-router-dom";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

const EditBooks = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = useLoaderData();

  const bookCategory = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Psychology",
    "Science",
    "Horror",
    "Fantasy",
    "Bibiliography",
    "History",
    "Self-Help",
    "Memoir",
    "Business",
    "Children Books",
    "Autobiography",
    "Travel",
    "Education",
    "Research",
    "Religion",
    "Art & Design",
    "Programming",
    "Science Fiction",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategory[0]
  );

  const handleChangeSelectedBookCategory = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    // console.log(bookObj);

    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bookObj),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        alert("Book updated successfully", data);
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit Your Book Here</h2>
      <form
        onSubmit={handleEdit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Write Book Name"
              required
              type="text"
              defaultValue={bookTitle}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Write Author's Name"
              required
              type="text"
              defaultValue={authorName}
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              placeholder="Enter the book url"
              required
              type="text"
              defaultValue={imageURL}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedBookCategory}
              defaultValue={category}
            >
              {bookCategory.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            i="bookDescription"
            name="bookDescription"
            placeholder="Write the book's description here..."
            required
            className="w-full"
            rows={5}
            defaultValue={bookDescription}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            type="text"
            placeholder="Enter the book pdf url..."
            required
            name="bookPDFURL"
            defaultValue={bookPDFURL}
          />
        </div>

        <Button className="mt-5" type="submit">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;

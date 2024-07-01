import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliograpghy",
    "Autobiograohy",
    "History",
    "Self-help",
    "Memoirs",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (e) => {
    console.log(e.target.value);
    setSelectedBookCategory(e.target.value);
  };

  // handle book submission

  const handleBookSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.authorName.imageURL;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      bookDescription,
      bookPDFURL,
    };
    console.log(bookObj);

    // better version
    // const form = e.target;
    // const formData = new FormData(form);

    // const bookObj = Object.fromEntries(formData);

    // console.log(bookObj);
    fetch("http://localhost:3000/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book uploaded successfully");
        form.reset();
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a book</h2>

      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* firstRow */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              required
            />
          </div>
          {/* authorName */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author  Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name "
              required
            />
          </div>
        </div>
        {/* 2nd Row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book image Url" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
            />
          </div>
          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category"></Label>
            </div>

            <Select
              id="inputState"
              name="category"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* bookDescription */}
        <div>
          {/* category */}

          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description"></Label>
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Write your Book Description"
            className="w-full"
            required
            rows={4}
          />
        </div>
        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL"></Label>
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            placeholder="Book pdf url"
            required
            type="text"
          />
        </div>

        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;

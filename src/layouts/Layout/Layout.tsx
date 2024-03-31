import { Typography } from "@mui/material";
import { CustomButton } from "../../components/Button/CustomButton";
import { Headling } from "../../components/Headling/Headling";
import { CustomInput } from "../../components/Input/CustomInput";
import {
  Books,
  LayoutBody,
  MainBody,
  MainBottom,
  MainLayout,
  MainTop,
  Navbar,
  Side,
} from "./styles";
import { BookCard } from "../../components/BookCard/BookCard";
import { useEffect, useState } from "react";
import axios from "../../helpers/axiosInterceptor";
import { BookResponse } from "../../components/BookCard/BookCard.props";
import { CreatePopup } from "../../components/CreatePopup/CreatePopup";
import { PopupProvider } from "../../components/CreatePopup/styles";

const data = {
  book: {
    id: 21,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover: "http://url.to.book.cover",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  status: 2,
};

export interface AllBooksResponse {
    data: BookResponse[];
    isOk: boolean;
    message: string;
}

export const Layout = () => {
  const [books, setBooks] = useState<BookResponse[] | null>([]);
  const [showCreatePopup, setShowCreatePopup] = useState(false);

  const toggleCreatePopup = () => {
    setShowCreatePopup(!showCreatePopup);
  };

  const closeCreatePopup = () => {
    setShowCreatePopup(false);
  };

  const getBooks = async () => {
    try {
      const key = localStorage.getItem("key");
      const res = await axios.get<AllBooksResponse>("/books", {
        headers: {
          key: key,
        },
      });
      setBooks(res.data?.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
    <PopupProvider isOpen={showCreatePopup} onClick={closeCreatePopup}></PopupProvider>
    <MainLayout>
      <Navbar>
        <Side>
          <img src="/logo.svg" alt="logo of bookshelf" />
          <div>
            <img src="/search_icon.svg" alt="icon of search input" />
            <CustomInput placeholder="Search for any training you want " />
          </div>
        </Side>
        <Side>
          <img src="/notify_icon.svg" alt="Icon of notification" />
          <img
            style={{ width: "32px", height: "32px" }}
            src="/user_image.png"
            alt="Icon of notification"
          />
        </Side>
      </Navbar>
      <LayoutBody>
        <MainBody>
          <MainTop>
            <Headling>
              You've got <span>7 book</span>
            </Headling>
            <CustomButton onClick={toggleCreatePopup}>
              <img src="/plus_icon.svg" alt="icon of create book button" />
              Create a book
            </CustomButton>
          </MainTop>
          <MainBottom>
            <p>Your books today</p>
          </MainBottom>
        </MainBody>
        <Books>
            {books?.map((book) => (
            <BookCard data={book}/>
            ))}
        </Books>
      </LayoutBody>
      {showCreatePopup && (
        <CreatePopup
          onClose={closeCreatePopup}
        />
      )}
    </MainLayout>
    </>
  );
};

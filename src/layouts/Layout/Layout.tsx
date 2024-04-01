import { CustomButton } from "../../components/Button/CustomButton";
import { Headling } from "../../components/Headling/Headling";
import { CustomInput } from "../../components/Input/CustomInput";
import {
  Books,
  LayoutBody,
  Loader,
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

export interface AllBooksResponse {
  data: BookResponse[];
  isOk: boolean;
  message: string;
}

export const Layout = () => {
  const [books, setBooks] = useState<BookResponse[] | null>([]);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  const toggleCreatePopup = () => {
    setShowCreatePopup(!showCreatePopup);
  };

  const closeCreatePopup = () => {
    setShowCreatePopup(false);
  };

  const getBooks = async () => {
    console.log("1 ============= ",loading);
    try {
      console.log("2 ============= ",loading);
      setLoading(true);
      const res = await axios.get<AllBooksResponse>("/books");
      setBooks(res.data?.data);
    } catch (e) {
      console.log(e);
    } finally {
      console.log("3 ============= ",loading);
      setLoading(false);
    }
  };

  const deleteBook = async (bookId: number) => {
    try {
      await axios.delete(`/books/${bookId}`);
      setBooks(
        (prevBooks) =>
          prevBooks?.filter((book) => book.book.id !== bookId) || null
      );
    } catch (e) {
      console.log(e);
    }
  };

  const createBook = (newBook: BookResponse) => {
    getBooks();
    setBooks((prevBooks) => {
      if (!prevBooks) return [newBook];
      return [...prevBooks, newBook];
    });
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <PopupProvider
        isOpen={showCreatePopup}
        onClick={closeCreatePopup}
      ></PopupProvider>
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
                You've got <span>{books?.length} {books && books?.length > 1 ? 'books' : 'book' }</span>
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
            {loading ? (
              <Loader />
            ) : (
              books?.map((book) => (
                <BookCard
                  key={book?.book?.id}
                  onDelete={() => deleteBook(book.book?.id)}
                  data={book}
                />
              ))
            )}
          </Books>
        </LayoutBody>
        {showCreatePopup && (
          <CreatePopup onCreate={createBook} onClose={closeCreatePopup} />
        )}
      </MainLayout>
    </>
  );
};

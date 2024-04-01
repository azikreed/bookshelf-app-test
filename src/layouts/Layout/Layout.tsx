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
import { useEffect, useRef, useState } from "react";
import axios from "../../helpers/axiosInterceptor";
import { CreatePopup } from "../../components/CreatePopup/CreatePopup";
import { PopupProvider } from "../../components/CreatePopup/styles";
import { BookResponse } from "../../components/BookCard/BookCard.props";
import { AllBooksResponse, AllSearchedBooks, SearchedBooks } from "./interfaces";
import { ErrorMessage } from "../../pages/Login/styles";

export const Layout = () => {
  const [books, setBooks] = useState<BookResponse[] | null>([]);
  const [searchedBooks, setSearchedBooks] = useState<SearchedBooks[] | null>([]);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleEnterKeyPress = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      try {
        setLoading(true);
        if (inputText.trim() === '') {
          getBooks();
        } else {
          const res = await axios.get<AllSearchedBooks>(`/books/${inputText}`);
          setSearchedBooks(res.data?.data || []);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
        throw new Error();
      } finally {
        setLoading(false);
        e.currentTarget.blur();
      }
    }
  };

  const toggleCreatePopup = () => {
    setShowCreatePopup(!showCreatePopup);
  };

  const closeCreatePopup = () => {
    setShowCreatePopup(false);
  };

  const getBooks = async () => {
    try {
      setLoading(true);
      const res = await axios.get<AllBooksResponse>("/books");
      setBooks(res.data?.data || []);
    } catch (e) {
      console.log(e);
      throw new Error();
    } finally {
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
      setErrorMessage(true);
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  };

  const createBook = (newBook: BookResponse) => {
    getBooks();
    setBooks((prevBooks) => {
      if (!prevBooks) return [newBook];
      return [...prevBooks, newBook];
    });
    setErrorMessage(true);
  };

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    if(inputText.trim() === '') {
      setSearchedBooks([]);
      getBooks();
    }
  },[inputText]);

  useEffect(() => {
    if (errorMessage === true) {
      let timerId = setTimeout(() => {
        setErrorMessage(false);
      }, 3000);

      return () => clearTimeout(timerId);
    }
  }, [errorMessage]);

  const clearInput = () => {
    setInputText('');
    setSearchedBooks([]);
    getBooks();
  }

  return (
    <>
      {errorMessage ? <ErrorMessage color="#52C41A">
        <img src="/check_icon.svg" alt="" />
        Success
      </ErrorMessage> : ''}
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
              <CustomInput
                ref={inputRef}
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleEnterKeyPress}
                placeholder="Search for any training you want "
              />
              <img src="/close_icon.svg" alt="close icon" className="close" onClick={clearInput} />
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
              {searchedBooks?.length ? 'Founded' : 'You\'ve got'}{" "}
                <span>
                  {searchedBooks?.length ? searchedBooks?.length : books?.length}{" "}
                  {(searchedBooks && searchedBooks?.length > 1) || (books && books?.length > 1)  ? "books" : "book"}
                </span>
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
              searchedBooks?.length ? searchedBooks.map((book: SearchedBooks) => (
                <BookCard
                  key={book.isbn}
                  searched={book}
                />
              )) :
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

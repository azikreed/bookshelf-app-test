import { BookResponse } from "../../components/BookCard/BookCard.props";

export interface AllBooksResponse {
  data: BookResponse[];
  isOk: boolean;
  message: string;
}

export interface SearchedBooks {
  author: string;
  cover: string;
  isbn: string;
  published: number;
  title: string;
}

export interface AllSearchedBooks {
  data: SearchedBooks[];
  isOk: boolean;
  message: string;
}

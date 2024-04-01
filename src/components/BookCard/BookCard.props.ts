import { HTMLAttributes, ReactNode} from 'react';
import { SearchedBooks } from '../../layouts/Layout/Layout';

export interface BookResponse {
    book: {
      id: number,
      isbn: string,
      title: string,
      cover: string,
      author: string,
      published: number,
      pages: number
    },
    status: number
}

export interface BookCardProps extends HTMLAttributes<HTMLDivElement> {
    data?: BookResponse;
    searched?: SearchedBooks
    onDelete?: () => void;
}
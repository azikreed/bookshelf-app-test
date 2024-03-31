import { HTMLAttributes, ReactNode} from 'react';

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
    // children: ReactNode;
    data: BookResponse;
    
}
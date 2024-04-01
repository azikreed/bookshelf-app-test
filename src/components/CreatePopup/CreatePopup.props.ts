import { HTMLAttributes } from 'react';
import { BookResponse } from '../BookCard/BookCard.props';

export interface CreatePopupProps extends HTMLAttributes<HTMLElement> {
    onClose: () => void;
    onCreate: (data: BookResponse) => void;
}
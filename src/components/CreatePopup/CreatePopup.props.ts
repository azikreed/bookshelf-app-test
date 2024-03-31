import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export interface CreatePopupProps extends HTMLAttributes<HTMLElement> {
    onClose: () => void;
}
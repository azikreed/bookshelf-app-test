import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}
import { ButtonHTMLAttributes, ReactNode, RefObject } from 'react';

export interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    appearance?: 'transparent' | 'default';
    innerRef?: RefObject<HTMLButtonElement>;
}
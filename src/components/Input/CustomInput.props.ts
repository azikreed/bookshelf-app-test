import { InputHTMLAttributes, ReactNode } from 'react';

export interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    appearance?: 'default' | 'search'
}
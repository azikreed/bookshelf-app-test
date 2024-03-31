import { HTMLAttributes } from 'react';
import { CreateResponse } from './CreatePopup';

export interface CreatePopupProps extends HTMLAttributes<HTMLElement> {
    onClose: () => void;
    onCreate: (data: CreateResponse) => void;
}
import { CreatePopupProps } from "./CreatePopup.props";
import { CustomButton } from "../Button/CustomButton";
import { PopupBody, PopupFooter, PopupProvider, PopupTitle, StyledPopup } from "./styles";
import { FormEvent } from "react";
import axios from "../../helpers/axiosInterceptor";
import { BookResponse } from "../BookCard/BookCard.props";

export interface CreateForm {
  isbn: {
    value: string;
  };
}

export interface CreateResponse {
  data: BookResponse;
  isOk: boolean;
  message: string;
}

export function CreatePopup({ onClose, ...props }: CreatePopupProps) {
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & CreateForm;
    const { isbn } = target;
    console.log(isbn);
    await sendCreate(isbn.value);
  };

  const sendCreate = async (isbn: string) => {
    const book = JSON.stringify({ isbn });

    try {
      const { data } = await axios.post<CreateResponse>("/books", book);
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  };

  return (
      <StyledPopup {...props}>
        <PopupTitle>
          <p>Create a book</p>
          <button>
            <img src="/close_icon.svg" alt="close icon" onClick={onClose} />
          </button>
        </PopupTitle>
        <PopupBody>
          <p>ISBN</p>
          <form onSubmit={submit}>
            <input id="isbn" name="isbn" type="text" />
            <PopupFooter>
              <CustomButton appearance="transparent" onClick={onClose}>
                Close
              </CustomButton>
              <CustomButton>Submit</CustomButton>
            </PopupFooter>
          </form>
        </PopupBody>
      </StyledPopup>
  );
}

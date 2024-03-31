import { CreatePopupProps } from "./CreatePopup.props";
import { CustomButton } from "../Button/CustomButton";
import {
  PopupBody,
  PopupFooter,
  PopupForm,
  PopupProvider,
  PopupTitle,
  StyledPopup,
} from "./styles";
import { FormEvent } from "react";
import axios from "../../helpers/axiosInterceptor";
import { BookResponse } from "../BookCard/BookCard.props";
import { CustomInput } from "../Input/CustomInput";

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

export function CreatePopup({ onClose, onCreate, ...props }: CreatePopupProps) {
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & CreateForm;
    const { isbn } = target;
    await sendCreate(isbn.value);
    // onCreate();
  };

  const sendCreate = async (isbn: string) => {
    const bookData = JSON.stringify({ isbn });

    try {
      const {data} = await axios.post<CreateResponse>("/books", bookData);
      onCreate(data);
      onClose();
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
        <PopupForm onSubmit={submit}>
          <div className="input_div">
            <img src="/link_icon.svg" alt="" />
            <CustomInput
              id="isbn"
              name="isbn"
              type="text"
              placeholder="_____________"
            />
          </div>
          <PopupFooter>
            <CustomButton appearance="transparent" onClick={onClose}>
              Close
            </CustomButton>
            <CustomButton>Submit</CustomButton>
          </PopupFooter>
        </PopupForm>
      </PopupBody>
    </StyledPopup>
  );
}

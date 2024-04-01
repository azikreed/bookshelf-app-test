import { Theme, styled } from "@mui/material/styles";
import { Headling } from "../Headling/Headling";
import { BookCardProps } from "./BookCard.props";
import { CustomButton } from "../Button/CustomButton";
import { Card, CardActions, CardBody, CardFooter, SelectDrop, StatusBar } from "./styles";
import axios from "../../helpers/axiosInterceptor";
import { useCallback, useEffect, useRef, useState } from "react";

export const statuses = {
  0: "New",
  1: "Reading",
  2: "Finished"
};

export const BookCard = ({ data, onDelete }: BookCardProps) => {
  if(!data) {
    return null;
  }
  
  const { status, book } = data;
  const [selectedStatus, setSelectedStatus] = useState<number>(status);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLSelectElement>(null);
  const editButtonRef = useRef<HTMLButtonElement>(null);

  const handleStatusChange = async (newStatus: number) => {
    try {
      console.log({ status: newStatus });
      const data = JSON.stringify({status: newStatus});
      await axios.patch(`/books/${book.id}`, data);
      setSelectedStatus(newStatus);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleStatusOptionClick = useCallback((newStatus: number) => {
    handleStatusChange(newStatus);
    if (dropdownRef.current !== null) {
      dropdownRef.current.blur();
    }
  }, [handleStatusChange]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        editButtonRef.current &&
        !editButtonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Card>
      <Headling
        appearance="small"
        style={{ fontFamily: '"Montserrat", sans-serif' }}
      >
        {data?.book?.title}
      </Headling>
      <CardBody>
        <p>Cover: {book?.cover}</p>
        <p>Pages: {book?.pages}</p>
        <p>Published: {book?.published}</p>
        <p>Isbn: {book?.isbn}</p>
      </CardBody>
      <CardFooter>
        {book?.author}
        <StatusBar selectedStatus={selectedStatus}>
          {selectedStatus === 0 ? statuses[0] : selectedStatus === 1 ? statuses[1] : statuses[2]}
        </StatusBar>
      </CardFooter>
      <CardActions className="card-actions">
        <CustomButton style={{background: '#FF4D4F', borderBottomLeftRadius: '0px'}} onClick={onDelete}>
          <img src="/trash_icon.svg" alt="" />
        </CustomButton>
        <CustomButton innerRef={editButtonRef} style={{borderTopLeftRadius: '0px'}} onClick={() => setIsDropdownOpen((prevState) => !prevState)}>
          <img src="/edit_icon.svg" alt="" />
        </CustomButton>
        {isDropdownOpen && (
          <div>
            <SelectDrop ref={dropdownRef} value={selectedStatus} onChange={(e) => handleStatusOptionClick(parseInt(e.target.value))}>
              <option style={{background: '#FF0000'}} value={0}>{statuses[0]}</option>
              <option style={{background: '#FFEC43'}} value={1}>{statuses[1]}</option>
              <option style={{background: '#00FF29'}} value={2}>{statuses[2]}</option>
            </SelectDrop>
          </div>
        )}
      </CardActions>
    </Card>
  );
};

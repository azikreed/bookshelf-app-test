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

export const BookCard = ({ data, searched, onDelete }: BookCardProps) => {  
  const {status} = data || {};
  const initialStatus = status !== undefined ? status : 0;

  const [selectedStatus, setSelectedStatus] = useState<number>(initialStatus);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLSelectElement>(null);
  const editButtonRef = useRef<HTMLButtonElement>(null);

  const handleStatusChange = async (newStatus: number) => {
    try {
      console.log({ status: newStatus });
      const sendingData = JSON.stringify({status: newStatus});
      const res = await axios.patch(`/books/${data?.book?.id}`, sendingData);
      setSelectedStatus(newStatus);
      console.log(res.data);
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
        {searched ? searched.title : data?.book?.title}
      </Headling>
      <CardBody>
        <p>Cover: {searched ? searched.cover : data?.book?.cover}</p>
        {searched ? <></> : <p>Pages: {data?.book?.pages}</p>}
        <p>Published: {searched ? searched.published : data?.book?.published}</p>
        <p>Isbn: {searched ? searched.isbn : data?.book?.isbn}</p>
      </CardBody>
      <CardFooter>
        {searched ? searched.author : data?.book?.author}
        <StatusBar selectedStatus={selectedStatus} style={{display: searched ? 'none' : 'flex'}}>
          {selectedStatus === 0 ? statuses[0] : selectedStatus === 1 ? statuses[1] : statuses[2]}
        </StatusBar>
      </CardFooter>
      <CardActions searched={ searched ? true : false } className="card-actions">
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

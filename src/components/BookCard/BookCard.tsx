import { Theme, styled } from "@mui/material/styles";
import { Headling } from "../Headling/Headling";
import { BookCardProps } from "./BookCard.props";
import { CustomButton } from "../Button/CustomButton";
import { Card, CardActions, CardBody, CardFooter } from "./styles";
import axios from "../../helpers/axiosInterceptor";

export const BookCard = ({ data, onDelete }: BookCardProps) => {
  if(!data) {
    return null;
  }
  
  const { status, book } = data;

  const StatusBar = styled("div")(({ theme }: { theme: Theme }) => ({
    padding: "2px 12px",
    background: status === 0 ? "#FF0000" : status === 1 ? "#FFEC43" : "#00FF29",
    color: theme.palette.primary.light,
    borderRadius: "8.5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

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
        <StatusBar>
          {status === 0 ? "New" : status === 1 ? "Reading" : "Finished"}
        </StatusBar>
      </CardFooter>
      <CardActions className="card-actions">
        <CustomButton style={{background: '#FF4D4F', borderBottomLeftRadius: '0px'}} onClick={onDelete}>
          <img src="/trash_icon.svg" alt="" />
        </CustomButton>
        <CustomButton style={{borderTopLeftRadius: '0px'}}>
          <img src="/edit_icon.svg" alt="" />
        </CustomButton>
      </CardActions>
    </Card>
  );
};

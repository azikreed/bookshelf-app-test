import { Theme, styled } from "@mui/material/styles";
import { Headling } from "../Headling/Headling";
import { BookCardProps } from "./BookCard.props";

const Card = styled("div")(({ theme }: { theme: Theme }) => ({
  width: "calc((100% - 48px) / 3)",
  padding: "32px",
  background: theme.palette.primary.light,
  borderRadius: "12px",
  boxShadow: '0 4px 24px 0 rgba(51, 51, 51, 0.08)'
}));

const CardBody = styled("div")(({ theme }: { theme: Theme }) => ({
  p: {
    margin: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',  
  },
  marginTop: "6px",
  marginBottom: "20.5px",
}));

const CardFooter = styled("div")(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    justifyContent: 'space-between'
}));

export const BookCard = ({ data }: BookCardProps) => {
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
      <Headling appearance="small" style={{fontFamily: '"Montserrat", sans-serif'}}>{data.book.title}</Headling>
      <CardBody>
        <p>Cover: {book.cover}</p>
        <p>Pages: {book.pages}</p>
        <p>Published: {book.published}</p>
        <p>Isbn: {book.isbn}</p>
      </CardBody>
      <CardFooter>
        {book.author}
        <StatusBar>
          {status === 0 ? "New" : status === 1 ? "Reading" : "Finished"}
        </StatusBar>
      </CardFooter>
    </Card>
  );
};

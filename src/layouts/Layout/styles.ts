import { CircularProgress } from "@mui/material";
import { Theme, styled  } from "@mui/material/styles";

export const MainLayout = styled('div')(({theme}: {theme: Theme}) => ({
    padding: '0 100px',
    display: 'flex',
    flexDirection: 'column'
}));

export const Navbar = styled('nav')(({theme}: {theme: Theme}) => ({
    padding: '12px 0',
    display: 'flex',
    justifyContent: 'space-between'
}))

export const Side = styled('div')(({theme}: {theme: Theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    div: {
        position: 'relative',
        img: {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)'
        },
        input: {
            border: 'none',
            paddingLeft: '36px',
            width: '300px',
        }
    }
}))

export const LayoutBody = styled('main')(({theme}: {theme: Theme}) => ({
    padding: '36px 0',
}))

export const MainBody = styled('div')(({theme}: {theme: Theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',

}))

export const MainTop = styled('div')(({theme}: {theme: Theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    "h1": {
        color: theme.palette.primary.light,
        span: {
            color: theme.palette.primary.main
        }
    }
}))

export const MainBottom = styled('div')(({theme}: {theme: Theme}) => ({
    p: {
        fontSize: '20px',
        fontWeight: 400,
        margin: 0,
        color: theme.palette.primary.light,
    }
}))

export const Books = styled('div')(({theme}: {theme: Theme}) => ({
    padding: '36px 0',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    gap: '24px'
}))

export const Loader = styled(CircularProgress)(({theme}: {theme: Theme}) => ({
    position: "absolute",
    right: '80px',
    bottom: '20px',
    color: theme.palette.primary.main
}))
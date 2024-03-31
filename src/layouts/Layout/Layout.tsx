import { Theme, styled  } from "@mui/material/styles";
import { CustomInput } from "../../components/Input/CustomInput";

export const Layout = () => {
    const Layout = styled('div')(({theme}: {theme: Theme}) => ({
        padding: '0 100px',
        display: 'flex',
        flexDirection: 'column'
    }));

    const Navbar = styled('nav')(({theme}: {theme: Theme}) => ({
        padding: '12px 0',
        display: 'flex',
        justifyContent: 'space-between'
    }))

    const Side = styled('div')(({theme}: {theme: Theme}) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        div: {
            position: 'relative',
            input: {
                position: 'absolute',
                width: '300px',
            }
        }
    }))

    const LayoutBody = styled('main')(({theme}: {theme: Theme}) => ({
        padding: '36px 0',
    }))

    return (
        <Layout>
            <Navbar>
                <Side>
                    <img src="/logo.svg" alt="logo of bookshelf" />
                    <div>
                        <img src="/search_icon.svg" alt="icon of search input" />
                        <CustomInput placeholder="Search for any training you want "/>
                    </div>
                </Side>
                <Side>
                    <img src="/notify_icon.svg" alt="Icon of notification" />
                    <img style={{width: '32px', height:'32px'}} src="/user_image.png" alt="Icon of notification" />
                </Side>
            </Navbar>
            <LayoutBody>
                
            </LayoutBody>
        </Layout>
    )
}
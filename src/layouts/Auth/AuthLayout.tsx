import { Theme, styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  const Layout = styled("div")(() => ({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const Content = styled("div")(({ theme }: { theme: Theme }) => ({
    padding: "48px 28px",
    background: theme?.palette?.primary?.light,
    borderRadius: "12px",
    width: "430px",
    boxShadow: '0 4px 32px 0 rgba(51, 51, 51, 0.08)',
  }));

  return (
    <Layout>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

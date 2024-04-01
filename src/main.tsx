import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import mainBack from "/main_back.png";
import theme from "./theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./layouts/Auth/AuthLayout";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { ErrorPage } from "./pages/Error/Error";
import { Layout } from "./layouts/Layout/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/*',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#fefefe",
            backgroundImage: `url(${mainBack})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "unset",
            backgroundAttachment: "",
            fontFamily: "Mulish, sans-serif",
            margin: 0,
            padding: 0
          },
        }}
      />
    </ThemeProvider>
  </React.StrictMode>
);

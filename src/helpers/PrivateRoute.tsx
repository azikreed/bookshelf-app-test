import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  // Проверяем, существуют ли ключи в локальном хранилище
  const isAuthenticated = localStorage.getItem('key') && localStorage.getItem('secret');

  // Если ключи существуют, рендерим переданный элемент, иначе выполняем перенаправление на страницу входа
  return isAuthenticated ? (
    <>
      {element}
    </>
  ) : (
    <Navigate to="/auth/login" replace />
  );
};

export default PrivateRoute;

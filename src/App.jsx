import { Outlet, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useState } from 'react';
import { AppRoutes } from './lib/appRoutes';
import { GlobalStyle } from './Global/Global.styled.js';
import { GlobalStyleALL } from './components/GlobalALL/GlobalALL.styled.js';

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from './pages/NotFoundPage';
import ExitPage from './pages/ExitPage';
import CardBrowsePage from './pages/CardPage';
import AddCardPage from './pages/AddCardPage.jsx';



function App() {

  const [userData] = useState(null);


  return (
    <>
      <GlobalStyle />
      <GlobalStyleALL />

      <Routes>

        <Route path={AppRoutes.MAIN} element={<PrivateRoute> <Outlet />  </PrivateRoute>}>
          <Route index element={<MainPage />} />
          <Route path={`${AppRoutes.CARD}/:id`} element={<CardBrowsePage userData={userData} />} />
          <Route path={AppRoutes.EXIT} element={<ExitPage />} />
          <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
          <Route path={AppRoutes.ADD_CARD} element={<AddCardPage />} />
        </Route>

        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
        {/* setUserData={setUserData} */}
      </Routes>

    </>
  )
}

export default App
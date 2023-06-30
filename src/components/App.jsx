import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { selectIsRefreshing, selectIsLoggedIn } from '../store/useSelector';
import { refreshUser } from '../store/auth/authOperation';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const { isRefreshing } = useSelector(selectIsRefreshing);
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  };

  const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

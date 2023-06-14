import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../Redux/Selectors";
import { logout } from "../Redux/Operations";
const Layout = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/myrecipes"}>My Recipes</Link>
              </li>
            )}
          </ul>
        </nav>
        {isAuthenticated && <button onClick={handleOnClick}>Logout</button>}
      </header>
      <Outlet />
    </>
  );
};

export default Layout;

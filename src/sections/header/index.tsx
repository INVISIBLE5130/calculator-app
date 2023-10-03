import { useNavigate, NavLink } from "react-router-dom";
import { type FC } from "react";
import { useAuth } from "../../store/AuthContext";

const Header: FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const onLogout = () => {
    logout();
    navigate("/login");
  };

  const linkStatus = {
    active: "bg-blue-500 text-white",
    default: "bg-gray-200 text-gray-700",
  };

  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-md">
      <div className="flex space-x-4">
        <NavLink
          to={"/calculator"}
          className={({ isActive }) =>
            `${
              isActive ? linkStatus.active : linkStatus.default
            } px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none`
          }
        >
          Calculator
        </NavLink>
        <NavLink
          to={"/history"}
          className={({ isActive }) =>
            `${
              isActive ? linkStatus.active : linkStatus.default
            } px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none`
          }
        >
          History
        </NavLink>
      </div>
      <div className="flex space-x-4 items-center">
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Logout
        </button>
        <span className="text-gray-600">{user?.username}</span>
      </div>
    </div>
  );
};

export default Header;

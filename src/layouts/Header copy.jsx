import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const teacherNav = [
  { to: "/", text: "Home(T)" },
  { to: "/new", text: "New Homework" },
];
const studentNav = [
  { to: "/", text: "Home(S)" },
  { to: "/profile", text: "Profile" },
];
const guestNav = [
  { to: "/", text: "Login" },
  { to: "/register", text: "Register" },
];

const finalNav = (user) => {
  if (!user) return guestNav;
  if (user.t_code) return teacherNav;
  return studentNav;
};

function Header() {
  const { user, logout } = useAuth();

  const hdlLogout = () => {
    alert("bye");
    logout();
  };
  return (
    <div className="flex justify-between p-4">
      <div className="flex gap-x-4 list-none">
        <p className="font-bold">Hi,{user?.firstname}</p>
        <li>
          <input
            type="checkbox"
            value="light"
            className="toggle theme-controller"
          />
        </li>
      </div>

      <ul className="menu menu-horizontal bg-base-200 rounded-box">
        {finalNav(user).map((el) => (
          <li key={el.to}>
            <Link to={el.to}>{el.text}</Link>
          </li>
        ))}

        {user && (
          <li>
            <Link to="/" onClick={hdlLogout}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;

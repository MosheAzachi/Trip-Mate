import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function NotFoundPage() {
  return (
    <div className="home">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <h1 className="text-primary">Not Found</h1>
      <span className="font-bold text-xl text-blue">
        This page doesn’t exist.
      </span>
    </div>
  );
}
export default NotFoundPage;

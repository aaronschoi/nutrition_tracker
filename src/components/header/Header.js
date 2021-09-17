import { Link } from "react-router-dom";
import Admin from "../dashboard/admin/Admin";
import Logout from "../logout/Logout";

export default function Header() {
  return (
    <header className="header-container">
      <h1 className="header-title"><Link className="header-title-link" to="/dashboard">Food Logger</Link></h1>
      <div>
        <Link className="header-link" to="/profile">Edit Profile</Link>
        <Link className="header-link" to="/foodlog">Add to the Food Log</Link>
        <Admin />
        <Logout />
      </div>
    </header>
  );
}

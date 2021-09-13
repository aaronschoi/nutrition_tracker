import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Admin() {
    const { admin } = useSelector(state => state.user);

    return (
        <>
        {admin ? <Link to="/admin">Admin Panel</Link> : null}
        </>
    )
}
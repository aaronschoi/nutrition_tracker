import { useLogout } from "../../hooks/useLogout";

export default function Logout() {

    const logout = useLogout();

    return <button onClick={logout}>Logout</button>
}
import { useLogout } from "../../hooks/useLogout";

export default function Logout() {
    return <button onClick={useLogout}>Logout</button>
}
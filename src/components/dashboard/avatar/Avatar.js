import { useSelector } from "react-redux"

export default function Avatar() {

    const { avatar } = useSelector(state => state.user);

    return (
        <img className="dashboard-avatar"  src={avatar} alt="This is your avatar!"/>
    )
}
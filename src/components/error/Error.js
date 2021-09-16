import { useDispatch, useSelector } from "react-redux";

export default function Error() {

    const dispatch = useDispatch();
    const { errors } = useSelector(state => state)

    const removeError = event => {
        dispatch({type: "unload-error", payload: ""})
    }
    
    return (
        <>
        {errors && <div className="error-container"><div className="error"><p>{errors}</p><button onClick={removeError} className="error-button">Understood</button></div></div>}
        </>
    )
}
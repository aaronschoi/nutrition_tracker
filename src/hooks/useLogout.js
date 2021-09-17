import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export const useLogout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return () => {
    dispatch({ type: "deauthenticated" });
    dispatch({ type: "logged-out" });
    dispatch({ type: "remove-foodlog" });
    dispatch({ type: "no-target" });
    dispatch({ type: "unload-all" });
    localStorage.clear();
    history.push("/");
  };
};

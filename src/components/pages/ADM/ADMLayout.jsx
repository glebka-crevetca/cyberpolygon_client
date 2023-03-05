import { Outlet } from "react-router-dom";
import { useUser } from "../../../store/store";

export const ADMLayout = () => {
  const userRole = useUser((state) => state.role);

  return userRole === 'admin' ?
  <Outlet></Outlet>
  :
  <>NotFoundErrorPage</>
};

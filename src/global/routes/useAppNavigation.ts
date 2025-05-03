import { useNavigate } from "react-router-dom";

const useAppNavigation = () => {
  const navigate = useNavigate();

  return {
    navigateToAuthPage: () => navigate("/auth", { replace: true }),
    navigateToHomePage: () => navigate("/", { replace: true }),
  };
};

export default useAppNavigation;

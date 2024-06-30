import { useNavigate as useRouterNavigate } from "react-router-dom";

const useCustomNavigate  = () => {
    const navigate = useRouterNavigate();

    const handleNavigate = (path, id) => {
        navigate(`${path}/${id}`)
    };

    return handleNavigate;
}

export default useCustomNavigate ;
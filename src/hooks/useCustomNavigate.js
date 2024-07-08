import { useNavigate as useRouterNavigate } from "react-router-dom";

const useCustomNavigate  = () => {
    const navigate = useRouterNavigate();

    const handleNavigate = (path, id) => {
        if (id) {
            navigate(`/${path}/${id}`);
        } else {
            navigate(`/${path}`);
        }
    };

    return handleNavigate;
}

export default useCustomNavigate ;
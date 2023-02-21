import { Navigate } from "react-router-dom";


interface IProps {
    user: string;
    children: JSX.Element | JSX.Element[];
}

const ProtectedRoute = ({ user, children }: IProps) => {
    if (!user) {
        return <Navigate to="/landing" replace />;
    }

    return children;
};
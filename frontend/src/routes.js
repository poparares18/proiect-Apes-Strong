import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import Materii from "./components/pages/Materii";

const routes = [
    {
        path: "/",
        exact: true,
        component: Materii
    },
    {
        path: "/login",
        exact: true,
        component: LogIn
    },
    {
        path: "/signup",
        exact: true,
        component: SignUp
    },
    {
        path: "/materii",
        exact: true,
        component: Materii
    }
];

export default routes;

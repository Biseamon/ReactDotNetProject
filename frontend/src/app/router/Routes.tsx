import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import ActivityDashboard from "../../feature/activities/Dashboard/ActivityDashboard";
import ActivityDetailPage from "../../feature/activities/details/ActivityDetailPage";
import ActivityForm from "../../feature/activities/form/ActivityForm";
import Counter from "../../feature/counter/Counter";
import TestErrors from "../../feature/errors/TestErrors";
import NotFound from "../../feature/errors/NotFound";
import ServerError from "../../feature/errors/ServerError";
import RequireAuth from "./RequireAuth";
import LoginForm from "../../feature/account/LoginForm";
import RegisterForm from "../../feature/account/RegisterForm";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {element: <RequireAuth />, children: [
                {path: 'activities', element: <ActivityDashboard />},
                {path: 'activities/:id', element: <ActivityDetailPage />},
                {path: 'createActivity', element: <ActivityForm />},
                {path: 'manage/:id', element: <ActivityForm />}
            ]},
            { path: 'counter', element: <Counter /> },
            { path: 'errors', element: <TestErrors /> },
            { path: 'not-found', element: <NotFound /> },
            { path: 'server-error', element: <ServerError /> },
            { path: 'login', element: <LoginForm /> },
            { path: 'register', element: <RegisterForm /> },
            { path: '*', element: <Navigate replace to='/not-found' /> },
        ]
    }
])
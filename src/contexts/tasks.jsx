import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";

export const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {

    const [userTasks, setUserTasks] = useState();

    let navigate = useNavigate();

    const returnUserTasks = () => {
        console.log('task managed successfully');
        navigate(AppRoutes.MAIN)
    }

    return (
        <TasksContext.Provider value={{ userTasks, setUserTasks, returnUserTasks }}>
            {children}
        </TasksContext.Provider>
    );
};
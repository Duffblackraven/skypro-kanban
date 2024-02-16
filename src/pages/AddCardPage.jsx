import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Calendar } from "../components/Calendar/Calendar";
import { addTask } from "../api";
import { AppRoutes } from "../lib/appRoutes";

import { TasksContext } from "../contexts/tasks.jsx";
import { useUser } from '../hooks/useUser.jsx';
import { useTasks } from "../hooks/useTasks.jsx";



export default function AddCardPage() {

    const { userData } = useUser();
    const [selected, setSelected] = useState();

    const { returnUserTasks } = useTasks();
    const { setUserTasks } = useContext(TasksContext);
    

    const [error, setError] = useState(null);

    const [newTask, setNewTask] = useState({
        title: "",
        topic: "",
        description: "",
        date: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setNewTask({
            ...newTask,
            [name]: value,
        });
    };

    const addCard = async () => {

        let newCard = {
            ...newTask, date: selected
        }
        console.log(newCard);

        addTask({ token: userData.token, taskData: newTask })

        .then((tasks) => {
            setUserTasks(tasks.tasks);
            returnUserTasks()
        })
        .catch((error) => {
            setError(error.message);
        })

    };

    useEffect(() => {
        setNewTask({
            ...newTask, date: selected
        })
    }, [selected])

    return (
        <div className="pop-browse" id="popBrowse">
            
            <div className="pop-new-card__container">
                <div className="pop-new-card__block">
                    <div className="pop-new-card__content">
                        <div className="pop-browse__top-block">
                            <h3 className="pop-new-card__ttl">Создание задачи</h3>
                        </div>
                        <Link to={AppRoutes.MAIN} className="pop-new-card__close"> ✖ </Link>

                        <div className="pop-new-card__wrap">

                            <form
                                className="pop-new-card__form form-browse"
                                id="formBrowseCard"
                                action="#"
                            >
                                <div className="form-new__block">

                                    <label htmlFor="textArea01" className="subttl">
                                        Название задачи
                                    </label>
                                    <textarea value={newTask.title}
                                        className="form-new__input"
                                        name="title"
                                        id="textArea01"
                                        readOnly=""
                                        onChange={handleInputChange}
                                        placeholder="Введите название задачи..."
                                    />

                                    <label htmlFor="textArea01" className="subttl">
                                        Описание задачи
                                    </label>
                                    <textarea value={newTask.description}
                                        className="form-new__area"
                                        name="description"
                                        id="textArea01"
                                        readOnly=""
                                        onChange={handleInputChange}
                                        placeholder="Введите описание задачи..."
                                    />

                                </div>

                                <div className="pop-browse__status status">
                                    {/* <div className="pop-new-card__categories categories">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__themes">
                                <div className="categories__theme _orange _active-category">
                                    <p className="_orange">Web Design</p>
                                </div>
                                <div className="categories__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <div className="categories__theme _purple">
                                    <p className="_purple">Copywriting</p>
                                </div>
                            </div>
                            </div> */}
                                    <p className="status__p subttl">Категория</p>
                                    <div className="status__themes">

                                        <div className="status__theme _orange">
                                            <input
                                                type="radio"
                                                id="radio1"
                                                name="topic"
                                                onChange={handleInputChange}
                                                value="Web Design"
                                            />
                                            <label htmlFor="radio1">Web Design</label>
                                        </div>

                                        <div className="status__theme _green">
                                            <input
                                                type="radio"
                                                id="radio2"
                                                name="topic"
                                                onChange={handleInputChange}
                                                value="Research"
                                            />
                                            <label htmlFor="radio2">Research</label>
                                        </div>

                                        <div className="status__theme _purple">
                                            <input
                                                type="radio"
                                                id="radio3"
                                                name="topic"
                                                onChange={handleInputChange}
                                                value="Copywriting"
                                            />
                                            <label htmlFor="radio3">Copywriting</label>
                                        </div>

                                    </div>
                                </div>


                            </form>

                            <Calendar selected={selected} setSelected={setSelected} />
                            {/* <div className="calendar__block">

                                <div className="pop-new-card__calendar calendar">
                                    <Calendar selected={selected} setSelected={setSelected} />
                                </div>

                            </div> */}

                        </div>

                        <div className="pop-browse__btn-browse ">

                            <Link to={AppRoutes.MAIN}>
                                <button className="btn-browse__close _btn-bg _hover01">
                                    Отменить
                                </button>
                            </Link>

                            {/* <Link to={AppRoutes.MAIN} onClick={addCard}> */}
                            <button onClick={addCard} className="btn-browse__close _btn-bg _hover01">
                                Создать задачу
                            </button>
                            {error && <p>{error}</p>}
                            {/* </Link> */}

                        </div>

                        <div className="pop-browse__btn-edit _hide">
                            <div className="btn-group">
                                <button className="btn-edit__edit _btn-bg _hover01">
                                    <a href="#">Сохранить</a>
                                </button>
                                <button className="btn-edit__edit _btn-bor _hover03">
                                    <a href="#">Отменить</a>
                                </button>
                                <button
                                    className="btn-edit__delete _btn-bor _hover03"
                                    id="btnDelete"
                                >
                                    <a href="#">Удалить задачу</a>
                                </button>
                            </div>

                            <Link to={AppRoutes.MAIN}>
                                <button className="btn-edit__close _btn-bg _hover01">
                                    Close
                                </button>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
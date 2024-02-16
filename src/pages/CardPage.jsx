import { Link, useParams } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";

import { deleteTask, editTask, getTasks } from "../api";
import { useUser } from "../hooks/useUser";
import { useContext, useState } from "react";
import { TasksContext } from "../contexts/tasks.jsx";
import { useTasks } from "../hooks/useTasks.jsx";
import { Calendar } from "../components/Calendar/Calendar.jsx";
import { FormBrowseBlock, PopBrowseBlock, PopBrowseContainer, PopBrowseContent, PopBrowseWrap, PopBrowseWrapper } from "./CardPage.styled.js";
import { statusList } from "../components/Main/Main.jsx";


function CardBrowsePage() {

    const { userData } = useUser();
    const [selected, setSelected] = useState();

    const { userTasks, returnUserTasks } = useTasks();
    const { setUserTasks } = useContext(TasksContext);


    let { id } = useParams();
    const currentCard = userTasks?.find((el) => el._id === id);

    // console.log(currentCard);
    // console.log(userTasks);

    const deleteCard = async () => {


        await deleteTask({ token: userData.token, id })

        getTasks({ token: userData.token })
            .then((data) => {
                setUserTasks(data.tasks);
                returnUserTasks();
            })
            .catch(() => {
                throw new Error('Что-то пошло не так');
            });
    };

    const [currentStatus, setCurrentStatus] = useState(currentCard?.status || '');
    const [isEditing, setIsEditing] = useState(false);

    const startEditing = () => {
        setIsEditing(true);
    };
    const cancelEditing = () => {
        setCurrentStatus(currentCard?.status || '')
        setIsEditing(false)
    };

    const [editedTask, setEditedTask] = useState({
        title: currentCard?.title || '',
        topic: currentCard?.topic || '',
        description: currentCard?.description || '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setEditedTask({
            ...editedTask,
            [name]: value,
        });
    };


    const editCard = async () => {

        let newCard = {
            ...editedTask, date: selected, status: currentStatus
        }
        console.log(newCard);

        await editTask({ token: userData.token, id, taskData: newCard })

        getTasks({ token: userData.token })
            .then((data) => {
                setUserTasks(data.tasks);

            })
            .then(() => {
                returnUserTasks();
            })
            .catch(() => {
                throw new Error('Что-то пошло не так');
            })
    }

    return (
        <PopBrowseWrapper id="popBrowse">
            <PopBrowseContainer>
                <PopBrowseBlock>
                    <PopBrowseContent>
                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">{currentCard?.title}</h3>
                            <div className="categories__theme theme-top _orange _active-category">
                                <p className="_orange">{currentCard?.topic}</p>
                            </div>
                        </div>
                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Статус</p>
                            <div className="status__themes">

                                {isEditing ? statusList.map((el) => <div key={el} onClick={() => setCurrentStatus(el)} className={currentStatus === el ? "status__theme _gray" : "status__theme"}><p className={currentStatus === el ? "_gray" : " "}>{el}</p></div>)
                                    : <div className="status__theme">
                                        <p>{currentStatus}</p>
                                    </div>}
                                {/* (
                                        <>
                                           <div className="status__theme">
                                                <p className="_gray">Без статуса</p>
                                            </div>
                                             <div className="status__theme _gray">
                                                <p className="_gray">Нужно сделать</p>
                                            </div>
                                            <div className="status__theme">
                                                <p>В работе</p>
                                            </div>
                                            <div className="status__theme">
                                                <p>Тестирование</p>
                                            </div>
                                            <div className="status__theme">
                                                <p>Готово</p>
                                            </div>
                                        </>
                                    ) */}
                            </div>
                        </div>
                        <PopBrowseWrap>

                            <form
                                className="pop-browse__form form-browse"
                                // className="form-browse__area"
                                id="formBrowseCard"
                                action="#"
                            >
                                {
                                    isEditing ? <FormBrowseBlock>
                                        <label htmlFor="textArea01" className="subttl">
                                            Описание задачи
                                        </label>
                                        <textarea
                                            className="form-browse__area"
                                            name="description"
                                            id="textArea01"
                                            readOnly=""
                                            // placeholder="Введите описание задачи..."
                                            disabled={!isEditing}
                                            value={editedTask.description}
                                            onChange={handleInputChange}
                                        />
                                    </FormBrowseBlock> : <div>{currentCard?.description}</div>
                                }
                                {/* <FormBrowseBlock className={`${isEditing ? '' : '_hide'}`}>
                                    <label htmlFor="textArea01" className="subttl">
                                        Описание задачи
                                    </label>
                                    <textarea
                                        className="form-browse__area"
                                        name="description"
                                        id="textArea01"
                                        readOnly=""
                                        placeholder="Введите описание задачи..."
                                        disabled={!isEditing}
                                        value={editedTask.description}
                                        onChange={handleInputChange}
                                    />
                                </FormBrowseBlock> */}
                            </form>
                            <div className={`${isEditing ? '_hide' : ''}`}>
                                <Calendar selected={selected} readOnly />
                            </div>
                            <div className={`${isEditing ? '' : '_hide'}`}>
                                <Calendar selected={selected} setSelected={setSelected} />
                            </div>
                        </PopBrowseWrap>
                        {/* <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div> */}
                        <div className={`pop-browse__btn-browse ${isEditing ? '_hide' : ''}`}>

                            <div className="btn-group">

                                <button onClick={startEditing} className="btn-browse__edit _btn-bor _hover03">
                                    Редактировать задачу
                                </button>

                                <button onClick={deleteCard} className="btn-browse__delete _btn-bor _hover03">
                                    Удалить задачу
                                </button>

                            </div>

                            <Link to={AppRoutes.MAIN}>
                                <button className="btn-browse__close _btn-bg _hover01">
                                    Закрыть
                                </button>
                            </Link>

                        </div>
                        <div className={`pop-browse__btn-edit ${isEditing ? '' : '_hide'}`}>

                            <div className="btn-group">
                                <button onClick={editCard} className="btn-edit__edit _btn-bg _hover01">
                                    <a href="#">Сохранить</a>
                                </button>
                                <button onClick={cancelEditing} className="btn-edit__edit _btn-bor _hover03">
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
                                    Закрыть
                                </button>
                            </Link>
                        </div>
                    </PopBrowseContent>
                </PopBrowseBlock>
            </PopBrowseContainer>
        </PopBrowseWrapper>
    )
}
export default CardBrowsePage;
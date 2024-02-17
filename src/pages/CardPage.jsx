import { Link, useParams } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";

import { deleteTask, editTask, getTasks } from "../api";
import { useUser } from "../hooks/useUser";
import { useContext, useState } from "react";
import { TasksContext } from "../contexts/tasks.jsx";
import { useTasks } from "../hooks/useTasks.jsx";
import { Calendar } from "../components/Calendar/Calendar.jsx";
import { BtnBrowseDel, BtnBrowseEdit, BtnGroup, CategoriesTheme, FormBrowseArea, FormBrowseBlock, PopBrowseBlock, PopBrowseContainer, PopBrowseContent, PopBrowseForm, PopBrowseTopBlock, PopBrowseTtl, PopBrowseWrap, PopBrowseWrapper, Status, StatusThemes, Subttl } from "./CardPage.styled.js";
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
                        <PopBrowseTopBlock>
                            <PopBrowseTtl>{currentCard?.title}</PopBrowseTtl>
                            <CategoriesTheme className="theme-top _orange _active-category">
                                {currentCard?.topic}
                            </CategoriesTheme>
                        </PopBrowseTopBlock>
                        <Status className="pop-browse__status">
                            <Subttl>Статус</Subttl>
                            <StatusThemes>

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
                            </StatusThemes>
                        </Status>
                        <Subttl htmlFor="textArea01">
                            Описание задачи
                        </Subttl>
                        <PopBrowseWrap>
                            <PopBrowseForm
                                className="form-browse"
                                id="formBrowseCard"
                                action="#">
                                {
                                    isEditing ? <FormBrowseBlock>
                                        <FormBrowseArea
                                            name="description"
                                            id="textArea01"
                                            readOnly=""
                                            // placeholder="Введите описание задачи..."
                                            disabled={!isEditing}
                                            value={editedTask.description}
                                            onChange={handleInputChange} />
                                        {/* <textarea
                                            className="form-browse__area"
                                            name="description"
                                            id="textArea01"
                                            readOnly=""
                                            // placeholder="Введите описание задачи..."
                                            disabled={!isEditing}
                                            value={editedTask.description}
                                            onChange={handleInputChange}
                                        /> */}
                                    </FormBrowseBlock> : <div>{currentCard?.description}</div>
                                }
                            </PopBrowseForm>
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

                            {/* <div className="btn-group">  */}
                            <BtnGroup>

                                {/* <button onClick={startEditing} className="btn-browse__edit _btn-bor _hover03">
                                    Редактировать задачу
                                </button>  */}
                                <BtnBrowseEdit onClick={startEditing}>
                                    Редактировать задачу
                                </BtnBrowseEdit>

                                {/* <button onClick={deleteCard} className="btn-browse__delete _btn-bor _hover03">
                                    Удалить задачу
                                </button> */}
                                <BtnBrowseEdit onClick={deleteCard}>
                                    Удалить задачу
                                </BtnBrowseEdit>

                                {/* </div> */}
                            </BtnGroup>

                            <Link to={AppRoutes.MAIN} >
                                <BtnBrowseDel>
                                    Закрыть
                                </BtnBrowseDel>
                            </Link>

                        </div>
                        <div className={`pop-browse__btn-edit ${isEditing ? '' : '_hide'}`}>
                            <BtnGroup>
                                <BtnBrowseEdit onClick={editCard}>
                                    Сохранить
                                </BtnBrowseEdit>
                                <BtnBrowseEdit onClick={cancelEditing}>
                                    Отменить
                                </BtnBrowseEdit>
                                <BtnBrowseEdit>
                                    Удалить задачу
                                </BtnBrowseEdit>
                            </BtnGroup>
                            <Link to={AppRoutes.MAIN}>
                                {/* <button className="btn-edit__close _btn-bg _hover01">
                                    Закрыть
                                </button> */}
                                <BtnBrowseDel>
                                    Закрыть
                                </BtnBrowseDel>
                            </Link>
                        </div>
                    </PopBrowseContent>
                </PopBrowseBlock>
            </PopBrowseContainer>
        </PopBrowseWrapper>
    )
}
export default CardBrowsePage;
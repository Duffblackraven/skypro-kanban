import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Calendar } from "../components/Calendar/Calendar";
import { addTask } from "../api";
import { AppRoutes } from "../lib/appRoutes";

import { TasksContext } from "../contexts/tasks.jsx";
import { useUser } from '../hooks/useUser.jsx';
import { useTasks } from "../hooks/useTasks.jsx";
import { BtnBrowseDel, FormNewBlock, FormNewInput, FormNewInputArea, PopBrowseBtn, PopBrowseContent, PopBrowseForm, PopBrowseTopBlock, PopBrowseTtl, PopBrowseWrap, PopNewCardBlock, PopNewCardContainer, PopNewCardWrap, Status, StatusTheme, StatusThemes, Subttl } from "./CardPage.styled.js";



export default function AddCardPage() {

    // const categories = [
    //     {
    //         id: 'Web Design',
    //         color: '_orange',
    //     },
    //     {
    //         id: 'Research',
    //         color: '_green',
    //     },
    //     {
    //         id: 'Copywriting',
    //         color: '_purple',
    //     }
    // ]

    const { userData } = useUser();
    const [selected, setSelected] = useState();

    const { returnUserTasks } = useTasks();
    const { setUserTasks } = useContext(TasksContext);

    // const [currentCategory, setCurrentCategory] = useState('');
    // const handleChecked = (id) => {
    //     setCurrentCategory(id);
    // }


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
            ...newTask, data: selected
        }
        console.log(newCard);

        addTask({ token: userData.token, taskData: newTask })

            .then((tasks) => {
                setUserTasks(tasks.tasks);
                returnUserTasks()
            })
            .catch((error) => {
                setError(error.message);
                // setError(``)
            })

    };

    useEffect(() => {
        setNewTask({
            ...newTask, date: selected
        })
    }, [selected])

    return (
        <PopBrowseWrap id="popBrowse">
            <PopNewCardContainer>
                <PopNewCardBlock>
                    <PopBrowseContent>
                        <PopBrowseTopBlock>
                            <PopBrowseTtl>Создание задачи</PopBrowseTtl>
                        </PopBrowseTopBlock>
                        <Link to={AppRoutes.MAIN} className="pop-new-card__close"> ✖ </Link>

                        <PopNewCardWrap>
                            <PopBrowseForm
                                className="form-browse"
                                id="formBrowseCard"
                                action="#">

                                {/* <form
                                className="pop-new-card__form form-browse"
                                id="formBrowseCard"
                                action="#"
                            > */}
                                <FormNewBlock>
                                    <Subttl>Название задачи</Subttl>
                                    <FormNewInput value={newTask.title}
                                        // className="form-new__input"
                                        name="title"
                                        id="textArea01"
                                        readOnly=""
                                        onChange={handleInputChange}
                                        placeholder="Введите название задачи..."
                                    />
                                    <Subttl>Описание задачи</Subttl>
                                    <FormNewInputArea
                                        value={newTask.description}
                                        // className="form-new__area"
                                        name="description"
                                        id="textArea01"
                                        readOnly=""
                                        onChange={handleInputChange}
                                        placeholder="Введите описание задачи..."
                                    />
                                </FormNewBlock>

                                <Status className="pop-browse__status">
                                    <Subttl>Категория</Subttl>
                                    <StatusThemes>
                                        {/* {categories.map((el) => (
                                            <CategoriesButton
                                                key={el.id}
                                                type='button'
                                                id={el.id}
                                                className={`${currentCategory === el.id ? '_selected-category' : ''} ${el.color}`}
                                                onClick={() => handleChecked(el.id)}
                                                >
                                                {el.id}
                                            </CategoriesButton>
                                        ))} */}

                                        <StatusTheme className="_orange">
                                            <input
                                                type="radio"
                                                id="radio1
                                                onChange={handleInputChange}"
                                                name="topic"
                                                value="Web Design"
                                            />
                                            <label htmlFor="radio1">Web Design</label>
                                        </StatusTheme>

                                        <StatusTheme className="_green">
                                            <input
                                                type="radio"
                                                id="radio2"
                                                name="topic"
                                                onChange={handleInputChange}
                                                value="Research"
                                            />
                                            <label htmlFor="radio1">Research</label>
                                        </StatusTheme>

                                        <StatusTheme className="_purple">
                                            <input
                                                type="radio"
                                                id="radio3"
                                                name="topic"
                                                onChange={handleInputChange}
                                                value="Copywriting"
                                            />
                                            <label htmlFor="radio1">Copywriting</label>
                                        </StatusTheme>
                                    </StatusThemes>
                                </Status>


                            </PopBrowseForm>

                            <Calendar selected={selected} setSelected={setSelected} />

                        </PopNewCardWrap>

                        <PopBrowseBtn>

                            <Link to={AppRoutes.MAIN}>
                                <BtnBrowseDel>Отменить</BtnBrowseDel>
                            </Link>
                            <BtnBrowseDel onClick={addCard}>Создать задачу</BtnBrowseDel>
                        </PopBrowseBtn>
                        <p style={{ color: 'darksalmon' }}>{error}</p>
                    </PopBrowseContent>
                </PopNewCardBlock>
            </PopNewCardContainer>
        </PopBrowseWrap>
    )
}
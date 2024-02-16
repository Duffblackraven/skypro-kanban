import { Link } from "react-router-dom";
import { AppRoutes } from '../lib/appRoutes';
import { Button, ErrorText, ModalBtnErr, ModalFormGroupLink, ModalFormGroupText, ModalTtl } from "../components/Common/Common.styled";
import { LogInRegisterDIV, LogInRegisterBox, Modal, ModalBlock, ModalForm, ModalFormGroup, ModalInput } from "../components/Common/Common.styled";
import { register } from "../api";
import { useState } from "react";
import { useUser } from "../hooks/useUser";

function RegisterPage() {

    const { loginUser } = useUser();

    const registerForm = {
        name: '',
        login: '',
        password: '',
    };
    const [registerData, setRegisterData] = useState(registerForm);
    const [registerDataLoading, setRegisterDataLoading] = useState(false);
    const [regError, setRegError] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setRegisterDataLoading(true);
        try {
            if (registerData.name === '' || registerData.login === '' || registerData.password === '') {

                setRegError(true);
                throw new Error(`Введенные вами данные не корректны.
            Чтобы завершить регистрацию, заполните все поля в форме`);
            }
            await register(registerData)
                .then((data) => {
                    console.log(data);
                    console.log(data.user);
                    loginUser(data.user)
                });

        } catch (error) {
            setRegError(error.message);
            setRegisterDataLoading(false);
            setTimeout(() => {
                setRegError(false);
            }, 4000);
        }
        // .catch((error) => {
        //     setRegisterFormError(error.message)
        // })
        // .finally(() => {
        //     setRegisterDataLoading(false);
        // })
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setRegisterData({
            ...registerData,
            [name]: value,
        });
    };

    return (
        <LogInRegisterDIV>
            <LogInRegisterBox>
                <Modal>
                    <ModalBlock>
                        <ModalTtl>Регистрация</ModalTtl>
                        <ModalForm id="formLogIn" action="#">
                            <ModalInput className="modal__input"
                                type="text"
                                id="formusername"
                                placeholder="Имя"
                                value={registerData.name}
                                onChange={handleInputChange}
                                name="name"
                                label="First name"
                            />
                            <ModalInput className="modal__input"
                                type="text"
                                id="formlogin"
                                placeholder="Эл. почта"
                                value={registerData.login}
                                onChange={handleInputChange}
                                name="login"
                                label="Login"
                            />
                            <ModalInput className="modal__input"
                                type="password"
                                id="formpassword"
                                placeholder="Пароль"
                                value={registerData.password}
                                onChange={handleInputChange}
                                name="password"
                                label="Password"
                            />
                            {regError ? (
                                <>
                                    <ErrorText>{regError}</ErrorText>
                                    <ModalBtnErr
                                        disabled
                                        id="btnEnter"
                                        onClick={handleRegister}
                                    >
                                        Зарегистрироваться
                                    </ModalBtnErr>
                                </>
                            ) : (
                                <Button id="btnEnter" onClick={handleRegister}>{registerDataLoading ? 'Регистрируем пользователя' : 'Зарегистрироваться'}
                            </Button>  
                            )}
                            {/* <div style={{ color: 'darksalmon', width: '305px', textAlign: 'center' }}>{registerFormError}</div> */}

                            {/* <ModalBtnEnterLink>
                                <Link to={AppRoutes.MAIN} disabled={registerDataLoading} onClick={handleRegister}>{registerDataLoading ? 'Регистрируем пользователя' : 'Зарегистрироваться'}</Link>
                            </ModalBtnEnterLink> */}
                            {/* <Button id="btnEnter"
                                disabled={registerDataLoading}
                                onClick={handleRegister}>{registerDataLoading ? 'Регистрируем пользователя' : 'Зарегистрироваться'}
                            </Button> */}

                            <ModalFormGroup>
                                <ModalFormGroupText> Уже есть аккаунт?
                                    <ModalFormGroupLink>
                                        <Link to={AppRoutes.LOGIN}>Войдите здесь</Link>
                                    </ModalFormGroupLink>
                                </ModalFormGroupText>
                            </ModalFormGroup>
                        </ModalForm>
                        {/* {registerFormError ? (<p style={{ color: 'darksalmon' }}>{registerFormError}</p>) : (
                            <>
                                <div className="modal__ttl">
                                    <h2>Регистрация</h2>
                                </div>
                                <ModalForm id="formLogIn" action="#">

                                    <ModalInput className="modal__input"
                                        type="text"
                                        id="formusername"
                                        placeholder="Username"
                                        value={registerData.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        label="First name"
                                    />
                                    <ModalInput className="modal__input"
                                        type="text"
                                        id="formlogin"
                                        placeholder="Login"
                                        value={registerData.login}
                                        onChange={handleInputChange}
                                        name="login"
                                        label="Login"
                                    />
                                    <ModalInput className="modal__input"
                                        type="password"
                                        id="formpassword"
                                        placeholder="Password"
                                        value={registerData.password}
                                        onChange={handleInputChange}
                                        name="password"
                                        label="Password"
                                    />

                                    <Button id="btnEnter" disabled={registerDataLoading} onClick={handleRegister}>{registerDataLoading ? 'Регистрируем пользователя' : 'Зарегистрироваться'}</Button>

                                    <ModalFormGroup>
                                        <ModalFormGroupText> Уже есть аккаунт?
                                            <ModalFormGroupLink>
                                            <Link to={AppRoutes.LOGIN}>Войдите здесь</Link>
                                            </ModalFormGroupLink>
                                        </ModalFormGroupText>
                                    </ModalFormGroup>
                                </ModalForm>
                            </>
                        )} */}
                    </ModalBlock>
                </Modal>
            </LogInRegisterBox>
        </LogInRegisterDIV >
    )
}

export default RegisterPage
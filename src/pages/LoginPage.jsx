import { Link } from "react-router-dom"
import { AppRoutes } from '../lib/appRoutes';
import { Button, ErrorText, ModalBtnErr, ModalFormGroupLink, ModalFormGroupText, ModalTtl } from "../components/Common/Common.styled"
import { LogInRegisterDIV, LogInRegisterBox, Modal, ModalBlock, ModalForm, ModalFormGroup, ModalInput } from "../components/Common/Common.styled"
import { useState } from "react";
import { login } from "../api";
import { useUser } from "../hooks/useUser";

function LoginPage() {

    const { loginUser } = useUser();

    const loginForm = {
        login: '',
        password: '',
    };
    const [loginData, setLoginData] = useState(loginForm);
    const [loginDataLoading, setLoginDataLoading] = useState(false);
    const [logError, setLogError] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginDataLoading(true);
        try {
            if (loginData.login === '' || loginData.password === '') {
                setLogError(true);
                throw new Error(`Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.`)
            }
            await login(loginData).then((data) => {
                //console.log(data);
                console.log(data.user);
                loginUser(data.user)
            });
        } catch (error) {
            setLogError(error.message);
            setLoginDataLoading(false);
            setTimeout(() => {
                setLogError(false);
            }, 4000);
        }
        // finally(() => {
        //     setLoginDataLoading(false);
        // })
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value,
        });
    };


    return (
        <LogInRegisterDIV>
            <LogInRegisterBox>
                <Modal>
                    <ModalBlock>
                        <ModalTtl className="modal__ttl">Вход</ModalTtl>
                        <ModalForm id="formLogIn" action="#">

                            <ModalInput className="modal__input"
                                type="text"
                                id="formlogin"
                                placeholder="Логин"
                                value={loginData.login}
                                onChange={handleInputChange}
                                name="login"
                                label="Login"
                            />
                            <ModalInput className="modal__input"
                                type="password"
                                id="formpassword"
                                placeholder="Пароль"
                                value={loginData.password}
                                onChange={handleInputChange}
                                name="password"
                                label="Password"
                            />
                            {logError ? (
                                <>
                                    <ErrorText>{logError}</ErrorText>
                                    <ModalBtnErr
                                        disabled
                                        id="btnEnter"
                                        onClick={handleLogin}
                                    >
                                        Войти
                                    </ModalBtnErr>
                                    </>
                                    ) : (
                                        <Button id="btnEnter" onClick={handleLogin}>{loginDataLoading ? 'Входим в приложение' : 'Войти'}
                            </Button>
                                    )}
                            {/* <div style={{ color: 'darksalmon', width: '305px', textAlign: 'center' }}>{loginError}</div>

                            <Button id="btnEnter" onClick={handleLogin}>{loginDataLoading ? 'Входим в приложение' : 'Войти'}
                            </Button> */}
                            <ModalFormGroup>
                                <ModalFormGroupText>Нужно зарегистрироваться?
                                    <ModalFormGroupLink>
                                        <Link to={AppRoutes.REGISTER}>Регистрируйтесь здесь</Link>
                                    </ModalFormGroupLink>
                                </ModalFormGroupText>
                            </ModalFormGroup>
                        </ModalForm>
                    </ModalBlock>
                </Modal>
            </LogInRegisterBox>
        </LogInRegisterDIV>
    )
}

export default LoginPage
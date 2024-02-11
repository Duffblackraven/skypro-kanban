import { Link } from "react-router-dom"
import { AppRoutes } from '../lib/appRoutes';
import Button, { ModalFormGroupLink, ModalFormGroupText, ModalTtl } from "../components/Common/Common.styled"
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

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginDataLoading(true);

        await login(loginData).then((data) => {
            //console.log(data);
            console.log(data.user);
            loginUser(data.user)
        })
            .catch((error) => {
                alert(error);
                console.warn(error)
            })
            .finally(() => {
                setLoginDataLoading(false);
            })
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
                                placeholder="Login"
                                value={loginData.login}
                                onChange={handleInputChange}
                                name="login"
                                label="Login"
                            />
                            <ModalInput className="modal__input"
                                type="password"
                                id="formpassword"
                                placeholder="Password"
                                value={loginData.password}
                                onChange={handleInputChange}
                                name="password"
                                label="Password"
                            />

                            <Button id="btnEnter" onClick={handleLogin}>{loginDataLoading ? 'Входим в приложение' : 'Войти'}</Button>

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
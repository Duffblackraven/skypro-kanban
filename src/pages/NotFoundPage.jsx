import { Link } from "react-router-dom"
import { AppRoutes } from '../lib/appRoutes';
import { LogInRegisterDIV, LogInRegisterBox } from "../components/Common/Common.styled"

export default function NotFoundPage() {

    return (
        <LogInRegisterDIV>
            <LogInRegisterBox>
                <p>Ошибка 404. Такая страница не найдена(</p>
                <Link to={AppRoutes.LOGIN}>Вернуться на страницу логина</Link>
            </LogInRegisterBox>
        </LogInRegisterDIV>
    )
}

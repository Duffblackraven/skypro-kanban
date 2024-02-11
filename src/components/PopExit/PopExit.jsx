import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import { PopExitBlock, PopExitContainer, PopExitFormGroup, PopExitNo, PopExitNoLink, PopExitTtl, PopExitYes, PopExitYesLink } from "./PopExit.styled";

function popExit() {
    return (
        <div className="pop-exit" id="popExit">
            <PopExitContainer>
                <PopExitBlock>
                    <PopExitTtl>
                        <PopExitTtl>Выйти из аккаунта?</PopExitTtl>
                    </PopExitTtl>
                    <form className="pop-exit__form" id="formExit" action="#">
                        <PopExitFormGroup>
                            <PopExitYes id="exitYes">
                                <PopExitYesLink>
                                    <Link to={AppRoutes.LOGIN}>Да, выйти</Link>
                                    </PopExitYesLink>{" "}
                            </PopExitYes>
                            <PopExitNo id="exitNo">
                                <PopExitNoLink>
                                    <Link to={AppRoutes.MAIN}>Нет, остаться</Link>
                                </PopExitNoLink>{" "}
                            </PopExitNo>
                        </PopExitFormGroup>
                    </form>
                </PopExitBlock>
            </PopExitContainer>
        </div>
    )
}
export default popExit;
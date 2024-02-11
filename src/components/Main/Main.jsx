import { Container } from '../Common/Common.styled';
import { MainBox, MainBlock, MainContent } from './Main.styled';
import Column from '../Column/Column';

const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

function Main({ cardList, isLoaded }) {

    return <MainBox className='main'>
        <Container>
            <MainBlock>
                <MainContent>
                    {
                        isLoaded ? "Loading..." : statusList.map((status) => (
                            <Column
                                key={status}
                                title={status}
                                cardList={cardList.filter((card) => card.status === status)} />
                        ))
                    }

                </MainContent>
            </MainBlock>
        </Container>
    </MainBox >
}
export default Main;
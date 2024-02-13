import Card from "../Card/Card"
import { MainColumn, ColumnTitle, ColumnTitleText, ColumnCards } from "./Column.styled";

function Column({ title, cardList }) {

    return <MainColumn>
        <ColumnTitle>
            <ColumnTitleText>{title}</ColumnTitleText>
        </ColumnTitle>
        <ColumnCards>

            {cardList?.map((card) => (
                <Card
                    id={card._id}
                    title={card.title}
                    theme={card.topic}
                    date={card.date}
                    status={card.status}
                    themeColor={card.themeColor}
                    key={card.date}
                />
            ))}

        </ColumnCards>
    </MainColumn>
}

export default Column;
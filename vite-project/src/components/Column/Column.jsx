import Card from "../Card/Card"

function Column({ title }) {
    return (
        <div className="main__column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                <Card theme={"theme"}
                    name={"name"}
                    date={"12. 12. 2012"} />

                <Card theme={"theme2"}
                    name={"name2"}
                    date={"13. 13. 2013"} />

                <Card theme={"theme3"}
                    name={"name3"}
                    date={"15. 15. 2015"} />

            </div>
        </div>
    )
}
export default Column
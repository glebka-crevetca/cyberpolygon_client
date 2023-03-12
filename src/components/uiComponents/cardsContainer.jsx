import { Card } from "./card"

export const CardsContainer = ({ data, fullInfoPath }) => {
    return (
        <div className="btl__cards">
            {data.map(item => (
                <Card id={item.id} description={item.description} points={item.points} fullInfoPath={fullInfoPath} key={item.id} />
            ))}
        </div>
    )
}
import { Link } from "react-router-dom"
import arrowBtnSvg from "../../assets/arrowBtn.svg"


export const CardsContainer = ({ data, fullInfoPath }) => {
    return (
        <div className="btl__cards">
            {data.map(item => (
                <div className="btl__card" key={item.id}>
                    <div className="btl__card_content">
                        <div className="btl__title">
                            {item.title}
                        </div>
                        <div className="btl__description">
                            {item.description}
                        </div>
                        <div className="btl__actions">
                            {item.points ?
                                <div className="btl__points">
                                    {item.points} очков
                                </div>
                                : null
                            }
                            <div className="btl__getcard">
                                <Link to={{ pathname: fullInfoPath, state: { id: item.id } }}><img src={arrowBtnSvg} alt="Подробнее" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
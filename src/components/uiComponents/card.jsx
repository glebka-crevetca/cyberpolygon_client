import { Link } from 'react-router-dom'
import arrowBtnSvg from "../../assets/arrowBtn.svg"

export const Card = ({ id, title, description, points, fullInfoPath }) => {
    return (<div className="btl__card" key={id}>
        <div className="btl__card_content">
            <div className="btl__title">
                {title}
            </div>
            <div className="btl__description">
                {description}
            </div>
            <div className="btl__actions">
                {points ?
                    <div className="btl__points">
                        {points} очков
                    </div>
                    : null
                }
                <div className="btl__getcard">
                    <Link to={{ pathname: fullInfoPath, state: { id: id } }}><img src={arrowBtnSvg} alt="Подробнее" /></Link>
                </div>
            </div>
        </div>
    </div>)

}
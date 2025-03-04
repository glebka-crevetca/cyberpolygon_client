import loopSvg from '../../../../../assets/loop.svg'
import { Unuser } from '../../uiComponents/Unuser';

export const Unusers = (props) => {
    let UnuserElements = props.data
        .map(d => <Unuser data = {d} /> );
    return (
        <div className="unusers">
            <div className="unusers_tittle">
                <div className="unusers_p">Неподтверждённые пользователи</div>
                <div className="users_search">
                    <div className="search_input"><input type="text" /></div>
                    <div className="img_search"><button><img src={loopSvg} alt="" /></button>
                    </div>
                </div>
            </div>
            {UnuserElements}
        </div>
    );
}
import { Link } from 'react-router-dom'
import { PATHS } from '../../../../utils/urls'

export const ADMSideBar = () => {
    return (
        <div className="menu_admin">
            <Link to={PATHS.admin + PATHS.users} className="users">
                <div className="menu_ad_item">Пользователи</div>
            </Link>
            <Link to={PATHS.admin + PATHS.tasks} className="quest">
                <div className="menu_ad_item">Задания</div>
            </Link>
            <Link to={PATHS.admin + PATHS.materials} className="materials">
                <div className="menu_ad_item">Материалы</div>
            </Link>
        </div>
    )
}
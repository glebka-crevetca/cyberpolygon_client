import rejectSvg from '../../../../assets/reject.svg'
import addSvg from '../../../../assets/add.svg'
import loopSvg from '../../../../assets/loop.svg'
import delSvg from '../../../../assets/delete.svg'
import './users.css'
import { Requests } from './Requests/Requests'
import { Users } from './Users/Users'
import { Unusers } from './Unusers/Unusers'

export const ADMUsers = () => {

    let RequestsData = [
        {name:"Стас Феоктистов" , category: "Web"},
        {name:"Стас Феоктистов" , category: "Web"},
    ];

    let UsersData = [
        {name: "Глеб"},
        {name: "Стас"},
        {name: "Другой Стас"}
    ];

    let UnusersData = [
        {name: "Стас Феоктистов", mail: "viln1337@mail.ru", category: "Web"},
    ];

    return (
        <>
            <div className="admin">
                <Requests data = {RequestsData} />
                <Users data = {UsersData} />
                <Unusers data = {UnusersData} />
            </div>
        </>
    )
}
import './tasks.css'

import { MyTasks } from './MyTasks/MyTasks'
import { AddTask } from './AddTask/AddTask'

export const ADMTasks = () => {

    let tasks = [
        {name: "Матрёшка", count: "50"},
        {name: "Балалайка", count: "30"},
        {name: "Неволяшка", count: "20"},
    ];


    return (
        <>
            <div id="central-container">
                <AddTask />
                <MyTasks data = {tasks} />
            </div>
        </>
    )
}
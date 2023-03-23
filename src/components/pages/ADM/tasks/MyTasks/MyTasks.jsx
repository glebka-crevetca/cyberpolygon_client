import loopSvg from '../../../../../assets/loop.svg'
import { Task } from '../../uiComponents/Task';

export const MyTasks = (props) => {

    let tasksData = props.data
        .map(t => <Task data = {t} /> );

    return (
        <div id="bottom-container">
            <div id="bottom-container-header">
            <p>Задания</p>
                <div id="bottom-container-header-search">
                    <input type="text" id="bottom-container-header-search-input" />
                    <img id="loop-logo" src={loopSvg} alt="поиск" />
                </div>
            </div>
            {tasksData}
        </div>
    );
}
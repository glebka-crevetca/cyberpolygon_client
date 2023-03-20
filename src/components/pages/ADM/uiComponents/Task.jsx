import editSvg from '../../../../assets/edit.svg'
import delSvg from '../../../../assets/delete.svg'

export const Task = (props) => {
    return (
        <div id="bottom-container-body">
            <p id="bottom-container-body-nazv">{props.data.name} </p>
            <p>{props.data.count} баллов</p>
            <div id="bottom-container-body-icons">
                <button>
                    <img id="edit-icon" src={editSvg} alt="изменить" />
                </button>
                <button>
                    <img id="delete-icon2" src={delSvg} alt="удалить" />
                </button>
            </div>
        </div>
    );
}
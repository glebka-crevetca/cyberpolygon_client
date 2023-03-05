import delSvg from '../../../../assets/delete.svg'
import addSvg from '../../../../assets/add.svg'
import loopSvg from '../../../../assets/loop.svg'
import editSvg from '../../../../assets/edit.svg'
import './tasks.css'

export const ADMTasks = () => {

    return (
        <>
            <div id="main-container">
                <form id="leftContainerForm">
                    <div id="left-container">
                        <button id="users">Пользователи</button>
                        <button id="tasks-left">Задания</button>
                        <button id="materials-left">Материалы</button>
                    </div>
                </form>
                <div id="central-container">
                    <form id="forma" action="" method="post" name="forma">
                        <div id="central-top-container">
                            <div id="central-top-container-header">Добавить задание</div>
                            <div id="central-top-container-body">
                                <div id="task-left-container">
                                    <div id="task-left-container-top">
                                        <div id="task-left-container-top-name">
                                            <p>Матрешка</p>
                                        </div>
                                        <div id="task-left-container-top-count">
                                            <p>50</p>
                                        </div>
                                    </div>
                                    <div id="task-left-container-text">
                                        <p>
                                            Сдув пыль с трёхдюймовой дискеты, вы решили оттянуться в Дум. Но вы вспомнили, что в былые времена где-то рядом с кишками и супер-шотганами вы спрятали флаг, а потом стёрли файл! Надеюсь, он ещё не перезаписался чем-нибудь другим.
                                        </p>
                                    </div>
                                    <textarea id="left-container-text-input" placeholder="Поле для ответа"></textarea>
                                    <select id="selectID">
                                        <option id="zero">Выбор сложности</option>
                                        <option id="one">1</option>
                                        <option id="two">2</option>
                                    </select>
                                    <select id="selectID2">
                                        <option id="zero">Выбор категории</option>
                                        <option id="one">1</option>
                                        <option id="two">2</option>
                                    </select>
                                </div>
                                <div id="task-right-container">
                                    <div id="task-right-container-header">
                                        <div id="task-right-container-header-cont">.256sha</div>
                                        <button id="task-right-container-header-icon">
                                            <img id="delete-icon" src={delSvg} />
                                        </button>
                                    </div>
                                    <div id="task-right-container-body">
                                        <textarea id="task-right-container-body-text" placeholder="Решение"></textarea>
                                        <div id="task-right-container-body-inputs">
                                            <div id="task-right-container-body-fileInput">
                                                <input id="file-input" type="file" name="file" accept="image/*" />
                                                <label className="form-label-file" htmlFor="file-input" id="reg-file-input">
                                                    <span>Файл</span>
                                                    <div id="stud-logo-container">
                                                        <img id="stud-bilet-logo" src={addSvg} />
                                                    </div>
                                                </label>
                                            </div>
                                            <div id="task-right-container-body-add">
                                                <button id="button" type="submit">Добавить</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div id="bottom-container">
                        <div id="bottom-container-header">
                            <p>Задания</p>
                            <div id="bottom-container-header-search">
                                <input type="text" id="bottom-container-header-search-input" />
                                <img id="loop-logo" src={loopSvg} />
                            </div>
                        </div>
                        <div id="bottom-container-body">
                            <p id="bottom-container-body-nazv">Матрёшка</p>
                            <p>50 баллов</p>
                            <div id="bottom-container-body-icons">
                                <button>
                                    <img id="edit-icon" src={editSvg} />
                                </button>
                                <button>
                                    <img id="delete-icon2" src={delSvg} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
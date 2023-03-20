import delSvg from '../../../../../assets/delete.svg'
import addSvg from '../../../../../assets/add.svg'

export const AddTask = () => {
    return (
        <div>
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
                                        <img id="delete-icon" src={delSvg} alt="удалить" />
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
                                                    <img id="stud-bilet-logo" src={addSvg} alt="добавить" />
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
    </div>
    );
}
export const ContentAction = () => {
    return (
        <div className="content__action">
                        <form action="" type="post" className="content__action-1">
                            <div className="content__action-horizontal">
                                <input type="name" className="content__name" placeholder="Название" />
                                <div className="content__select">
                                    Выбор категории
                                    <div className="content__select-input">
                                        <select name="category" id="##" className="content__select-input-choice">
                                            <option value="1"> 1 </option>
                                            <option value="2"> 2 </option>
                                            <option value="3"> 3 </option>
                                            <option value="4"> 4 </option>
                                            <option value="5"> 5 </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <textarea name="descript" id="" cols="30" rows="10" placeholder="Текст" className="content__file"></textarea>
                            <div className="btn">
                                <div className="content_download_el">
                                    <label className="content__file-download">
                                        <input type="file" name="file" />
                                        <span className="content__file-plus"> + </span>
                                    </label>
                                    <p className="content_download_tit">Фото/Файл</p>
                                </div>
                                <button type="submit" className="content__button"> Добавить </button>
                            </div>
                        </form>
                    </div>
        
    );
}
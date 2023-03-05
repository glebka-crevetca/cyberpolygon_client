import './materials.css'

export const ADMMaterials = () => {

    return (
        <>
            <div className="container">
        <div className="menu_admin">
            <div className="users"><div className="menu_ad_item"><a href="#">Пользователи</a></div></div>
            <div className="quest"><div className="menu_ad_item"><a href="#">Задания</a></div></div>
            <div className="materials"><div className="menu_ad_item"><a href="#">Материалы</a></div></div>
        </div>
        <div className="content">
            <div className="content__container">
                <div className="content__title-main">
                    Добавить материалы
                </div>
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
                    <div className="content__materials">
                        <div className="content__first-block">
                            <div className="content__title">
                                Материалы
                            </div>

                            <input type="text" className="content__search" />

                        </div>
                        <div className="content__second_block">
                            <div className="content__article">
                                <div className="content__article-row">
                                    <div className="content__article-title">
                                        Название статьи
                                    </div>
                                    <div className="content__article-descript">
                                        Короткое описание
                                    </div>
                                    <div className="content__article-elems">
                                        <div className="content__elem"></div>
                                        <div className="content__elem"></div>
                                        <div className="content__elem"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="content__article-2">
                                    <div className="content__article-row">
                                        <div className="content__article-title">
                                            Название статьи
                                        </div>
                                        <div className="content__article-descript">
                                            Короткое описание
                                        </div>
                                        <div className="content__article-elems">
                                            <div className="content__elem"></div>
                                            <div className="content__elem"></div>
                                            <div className="content__elem"></div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
        </>
    )
}
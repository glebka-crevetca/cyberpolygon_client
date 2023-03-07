import rejectSvg from '../../../../assets/reject.svg'
import addSvg from '../../../../assets/add.svg'
import loopSvg from '../../../../assets/loop.svg'
import delSvg from '../../../../assets/delete.svg'
import './users.css'

export const ADMUsers = () => {

    return (
        <>
            <div className="admin">
                <div className="request">
                    <div className="request_tittle">Заявки</div>
                    <div className="user_block">
                        <div className="user" id="user1">
                            <div className="user_items">
                                <div className="name">Илья Малютин</div>
                                <div className="category">Stegano</div>
                                <div className="request_button">
                                    <div className="button_plus"><button>
                                        <img src={addSvg} alt="" className="L_Plus" />
                                    </button></div>
                                    <div className="button_minus"><button>
                                        <img src={rejectSvg} alt="" className="L_Minus" />
                                    </button></div>
                                </div>
                            </div>
                        </div>
                        <div className="user" id="user2">
                            <div className="user_items">
                                <div className="name">Кирилл Коробкин</div>
                                <div className="category">Forensic</div>
                                <div className="request_button">
                                    <div className="button_plus"><button>
                                        <img src={addSvg} alt="" className="L_Plus" />
                                    </button></div>
                                    <div className="button_minus"><button>
                                        <img src={rejectSvg} alt="" className="L_Minus" />
                                    </button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="admin_users">
                    <div className="users_tittle">
                        <div className="tittle_p">Пользователи</div>
                        <div className="users_search">
                            <div className="search_input"><input type="text" /></div>
                            <div className="img_search"><button><img src={loopSvg} alt="" /></button>
                            </div>
                        </div>
                    </div>

                    <div className="users_users">
                        <div className="users_user">
                            <div className="user_name">Глеб Васильев</div>
                            <div className="user_delite"><button>
                                <img src={delSvg} alt="" className="L_Trash" />
                            </button></div>
                        </div>
                        <div className="users_user" id="users_user2">
                            <div className="user_name">Тимур Хасанов</div>
                            <div className="user_delite"><button>
                                <img src={delSvg} alt="" className="L_Trash" />
                            </button></div>
                        </div>
                    </div>
                </div>

                <div className="unusers">
                    <div className="unusers_tittle">
                        <div className="unusers_p">Неподтверждённые пользователи</div>
                        <div className="users_search">
                            <div className="search_input"><input type="text" /></div>
                            <div className="img_search"><button><img src={loopSvg} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="user_reg">
                        <div className="user_data">
                            <div className="stud_ticket">
                                <input type="file" />
                                <p>Студеньческий билет</p>
                            </div>
                            <div className="user_reg_data">
                                <div className="name_surname">
                                    <div className="name_surname_p">Имя Фамилия:</div>
                                    <div className="name_input">Илья Кутин</div>
                                </div>
                                <div className="email">
                                    <div className="email_p">Email:</div>
                                    <div className="email_input">ilakutin@mail.ru</div>
                                </div>
                                <div className="categoria">
                                    <div className="categoria_p">Категория:</div>
                                    <div className="categoria_input">Stegano</div>
                                </div>
                            </div>
                        </div>
                        <div className="reg_buttons">
                            <div className="reg_delite"><button>
                                <img src={delSvg} alt="" className="L_Trash" />
                            </button></div>
                            <div className="reg_aply"><button>Добавить</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
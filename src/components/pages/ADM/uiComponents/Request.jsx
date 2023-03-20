import rejectSvg from '../../../../assets/reject.svg'
import addSvg from '../../../../assets/add.svg'

export const Request = (props) => {
    return (
        <div className="user" id="user1">
            <div className="user_items">
                <div className="name"> {props.data.name} </div>
                <div className="category"> {props.data.category} </div>
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
    );
}
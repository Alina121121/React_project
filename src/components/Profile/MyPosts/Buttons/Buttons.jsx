import s from "./Buttons.module.css"

const Buttons = (props) => {
        return (
<div className={s.buttons}>
 <button>{props.like}{props.dislike}</button> 
 
        </div>
        )
}

export default Buttons
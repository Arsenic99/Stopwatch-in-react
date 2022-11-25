import style from './style.module.css';

function AppButton(props) {
        return (
                <div className={style.button} onClick={props.addClass}>
                        {props.title}
                </div>
        )
}

export default AppButton;




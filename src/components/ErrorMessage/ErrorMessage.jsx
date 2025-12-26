import style from './ErrorMessage.module.css'

export default function ErrorMessage(){
    return(
        <div className={style.error}>
            Something went wrong. Please try again.
        </div>
    )
}
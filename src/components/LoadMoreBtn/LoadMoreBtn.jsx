import style from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({onClick}){
    return(
        <button type="button" className={style.loadBtn} onClick={onClick}>Load more</button>
    )
}
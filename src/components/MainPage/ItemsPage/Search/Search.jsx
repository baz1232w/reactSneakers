import style from "../../MainPage.module.css";

const Search = ({handleInputText,inputText}) => {
    return (
        <div className={style.headOfItemsPage}>
            <h2>Все кроссовки</h2>
            <input type='search' placeholder={'Поиск...'} onChange={ e => {
                handleInputText(e)
            }
            } value={inputText || ''}/>
        </div>
    )
}

export default Search
import Item from './Item/Item';
import style from '../MainePage.module.css'
import {useState} from "react";

const Items = ({items, ...props}) => {
    const [inputText,setInputText] = useState()

    const handleInputText = (e) => {
        let lowerCase = e.currentTarget.value.toLowerCase()
        setInputText(lowerCase)
    }

    const filteredItems = items.filter(el =>{
        if(!inputText){
            return el
        }else{
            return el.tittle.toLowerCase().includes(inputText)
        }
    })

    return (
        <div className={style.itemsPage}>
            <div className={style.headOfItemsPage}>
                <h2>Все кроссовки</h2>
                <input type='search' placeholder={'Поиск...'} onChange={ e => {
                    handleInputText(e)
                }
                } value={inputText || ''}/>
            </div>
            <div className={style.gridItems}>
                {filteredItems.map(el => {
                    return (
                        <Item setTotalPrice={props.setTotalPrice}
                              setCart={props.setCart} setPrefer={props.setPrefer}
                              code={el.code} key={el.id} id={el.id} img={el.img} tittle={el.tittle}
                              price={el.price} isPrefer={el.isPrefer} isAdded={el.isAdded}/>
                    )
                })}
            </div>
        </div>

    )
}

export default Items
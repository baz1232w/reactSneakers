import Item from './Items/Item';
import style from '../MainPage.module.css'
import {useState} from "react";
import Search from "./Search/Search";

const ItemsPage = ({items,setTotalPrice,setCart,setPrefer}) => {
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
            <Search handleInputText={handleInputText} inputText={inputText}/>
            <div className={style.gridItems}>
                {filteredItems.map(el => {
                    return (
                        <Item setTotalPrice={setTotalPrice}
                              setCart={setCart} setPrefer={setPrefer}
                              code={el.code} key={el.id} id={el.id} img={el.img} tittle={el.tittle}
                              price={el.price} isPrefer={el.isPrefer} isAdded={el.isAdded}/>
                    )
                })}
            </div>
        </div>

    )
}

export default ItemsPage
import style from '../../MainePage.module.css'
import {IonIcon} from "@ionic/react";
import {addOutline, checkmarkOutline, heart, heartOutline} from "ionicons/icons";

const Item = (props) => {

    return (
        <div className={style.gridItem}>
            <div className={style.imageArea}>
                {props.isPrefer
                    ? <span className={style.prefer}><IonIcon onClick={() => {
                        props.setPrefer(props.code,false)
                    }} icon={heart}></IonIcon></span>
                    : <span className={style.preferBtn}><IonIcon onClick={() =>
                        props.setPrefer(props.code,true)
                    } icon={heartOutline}></IonIcon></span>
                }

                <img src={props.img} alt={`Photo of ${props.tittle}`}/>
            </div>
            <div className={style.gridItem_tittle}>
                <p>Мужские Кроссовки</p>
                <p>{props.tittle}</p>
            </div>
            <div className={style.priceArea}>
                <p><span className={style.pricePara}>ЦЕНА:</span><br/><span
                    className={style.price}>{props.price} грн.</span>
                </p>
                {props.isAdded
                    ? <span className={style.deleteFromCartBtn}><IonIcon onClick={() => {
                        props.setCart(props.code,false)
                        props.setTotalPrice()
                    }} icon={checkmarkOutline}>-</IonIcon></span>
                    : <span className={style.addToCardBtn}><IonIcon onClick={() => {
                        props.setCart(props.code,true)
                        props.setTotalPrice()
                    }} icon={addOutline}></IonIcon></span>
                }


            </div>

        </div>
    )
}

export default Item
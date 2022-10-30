import style from '../Cart.module.css'
import {IonIcon} from "@ionic/react";
import {closeOutline} from "ionicons/icons";

const ItemCart = ({price, tittle, img, id, ...props}) => {
    return (
        <div className={style.itemCart}>
            <div>
                <img src={img} alt={`Photo of ${tittle}`}/>
            </div>
            <div>
                <p>Мужские Кроссовки</p>
                <p>{tittle}</p>
                <p className={style.price}>{price} грн.</p>
            </div>
            <div>
                <span>
                    <IonIcon onClick={() =>{
                        props.setCart(props.code,false);
                        props.setTotalPrice()
                    }
                    } icon={closeOutline}></IonIcon>
                </span>
            </div>
        </div>
    )
}

export default ItemCart

import style from '../Cart.module.css'

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
                    <ion-icon onClick={() =>
                        props.deleteCartItem(id)
                    } name="close-outline"></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default ItemCart

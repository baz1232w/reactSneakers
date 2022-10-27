import style from '../../MainePage.module.css'

const Item = (props) => {

    return (
        <div className={style.gridItem}>
            <div className={style.imageArea}>
                {props.isPrefer
                    ? <span className={style.prefer}><ion-icon onClick={() => {
                        props.unPreferItem(props.id)
                    }} name="heart"></ion-icon></span>
                    : <span className={style.preferBtn}><ion-icon onClick={() => props.preferItem(props.id)}
                                                                  name="heart-outline"></ion-icon></span>
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
                    ?<span className={style.deleteFromCartBtn}><ion-icon onClick={() => {
                        props.deleteFromCart(props.id)
                        props.deleteCartItem(props.id)
                    }} name='checkmark-outline'></ion-icon></span>
                    :<span className={style.addToCardBtn}><ion-icon onClick={() => {
                        props.addedToCart(props.id)
                        props.addToCart(props.id)
                    }} name="add-outline"></ion-icon></span>
                }


            </div>

        </div>
    )
}

export default Item
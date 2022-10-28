import style from '../../MainePage.module.css'

const Item = (props) => {

    return (
        <div className={style.gridItem}>
            <div className={style.imageArea}>
                {props.isPrefer
                    ? <span className={style.prefer}><ion-icon onClick={() => {
                        props.unPrefer(props.code)
                    }} name="heart">-</ion-icon></span>
                    : <span className={style.preferBtn}><ion-icon onClick={() =>
                        props.setPrefer(props.code)
                    } name="heart-outline">+</ion-icon></span>
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
                    ? <span className={style.deleteFromCartBtn}><ion-icon onClick={() => {
                        props.deleteCart(props.code)
                    }} name='checkmark-outline'>-</ion-icon></span>
                    : <span className={style.addToCardBtn}><ion-icon onClick={() => {
                        props.addToCart(props.code)
                    }} name="add-outline">+</ion-icon></span>
                }


            </div>

        </div>
    )
}

export default Item
import sliderImage from '../../../assets/img/SliderImage/SliderImage_1.png'
import style from '../MainePage.module.css'

const Slider = (props) => {
    return(
        <div className={style.slider}>
            <img src={sliderImage} alt=""/>
        </div>
    )
}

export default Slider
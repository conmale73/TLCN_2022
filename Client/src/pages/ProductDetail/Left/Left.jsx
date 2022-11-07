import styles from './left.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from '../../../components/Slick/NextArrow';
import PrevArrow from '../../../components/Slick/PrevArrow';
const Left = () => {
    const settings = {
        customPaging: function(i) {
          return (
            <a className={styles.smallImg}>
              <img src="https://cache.mrporter.com/variants/images/1647597286496534/in/w358_q60.jpg" />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

      };
    return (
        <div className={styles.left}>
            <Slider {...settings}>
                <div className={styles.productImg}>
                    <img src="https://cache.mrporter.com/variants/images/1647597286496534/in/w358_q60.jpg"></img>
                </div>
                <div className={styles.productImg}>
                    <img src="https://cache.mrporter.com/variants/images/1647597286496534/ou/w2000_q60.jpg"></img>
                </div>
                <div className={styles.productImg}>
                    <img src="https://cache.mrporter.com/variants/images/1647597286496534/e1/w560_q60.jpg"></img>
                </div>
                <div className={styles.productImg}>
                    <img src="https://cache.mrporter.com/variants/images/1647597286496534/cu/w560_q60.jpg"></img>
                </div>
            </Slider>
        </div>
    )
}
export default Left;
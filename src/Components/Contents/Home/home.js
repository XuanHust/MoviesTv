import './home.scss'
import truonghanhca from '../../../Assets/Images/truonghanhca.jpg'
import ngocrong from '../../../Assets/Images/7vienngocrong.jpg'
import chienbinhmuadong from '../../../Assets/Images/chienbinhmuadong.jpg'
import chuatechiecnhan from '../../../Assets/Images/chuatechiecnhan.jpg'
import kingsman from '../../../Assets/Images/kingsman.jpg'
import loki1 from '../../../Assets/Images/loki1.jpg'
import minhlan from '../../../Assets/Images/minhlan.jpg'
import trutien2 from '../../../Assets/Images/trutien2.jpg'
import thieunien from '../../../Assets/Images/thieunientudaidanhbo.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import CardPhim from '../Card/cardphim'

const Home = (props) => {

    const [phimBo, setPhimBo] = useState()
    const [phimLe, setPhimLe] = useState()
    const [shows, setShows] = useState()
    const [hoatHinh, setHoatHinh] = useState()

    const loadPhim = () => {
        setPhimBo(props.dataRedux.phimbo)
        setPhimLe(props.dataRedux.phimle)
        setShows(props.dataRedux.shows)
        setHoatHinh(props.dataRedux.hoathinh)
    }

    useEffect(() => {
        window.addEventListener('load', loadPhim)
    }, [])

    const settings = {
        arrow: true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='container-home'>
                <div className='home-content'>
                    <div className='home-banner'>
                        <Slider {...settings}>
                            <div className='banner'>
                                <img src={truonghanhca} alt="Trường ca hành"></img>
                            </div>
                            <div className='banner'>
                                <img src={ngocrong} alt="7 Viên Ngọc Rồng"></img>
                            </div>
                            <div className='banner'>
                                <img src={chienbinhmuadong} alt="Chiến Binh Mùa Đông"></img>
                            </div>
                            <div className='banner'>
                                <img src={chuatechiecnhan} alt="Chúa tể của những chiếc nhẫn"></img>
                            </div>
                            <div className='banner'>
                                <img src={kingsman} alt="KingsMan"></img>
                            </div>
                            <div className='banner'>
                                <img src={loki1} alt="Loki 1"></img>
                            </div>
                            <div className='banner'>
                                <img src={minhlan} alt="Minh lan truyện"></img>
                            </div>
                            <div className='banner'>
                                <img src={trutien2} alt="Tru tiên 2 - Thanh Vân chí"></img>
                            </div>
                            <div className='banner'>
                                <img src={thieunien} alt="Thiếu niên tứ đại danh bổ"></img>
                            </div>
                        </Slider>
                    </div>

                    <div className='home-phim'>
                        <div className='title'>
                            <p className='title-left'>
                                <i class="fa-solid fa-video"></i>
                                <p>Phim Bộ Đặc Sắc</p>
                            </p>
                            <p className='title-right'>
                                <p>Xem tất cả</p>
                                <i class="fa-solid fa-angles-right"></i>
                            </p>
                        </div>
                        <div className='phimbo-content'>
                            {
                                phimBo && phimBo.length &&
                                phimBo.map((item, index) => {
                                    return (
                                        index < 8 &&
                                        <CardPhim itemPhim={item} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='home-phim'>
                        <div className='title'>
                            <p className='title-left'>
                                <i class="fa-solid fa-film"></i>
                                <p>Phim Lẻ Đặc Sắc</p>
                            </p>
                            <p className='title-right'>
                                <p>Xem tất cả</p>
                                <i class="fa-solid fa-angles-right"></i>
                            </p>
                        </div>
                        <div className='phimbo-content'>
                            {
                                phimLe && phimLe.length &&
                                phimLe.map((item, index) => {
                                    return (
                                        index < 8 &&
                                        <CardPhim itemPhim={item} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='home-phim'>
                        <div className='title'>
                            <p className='title-left'>
                                <i class="fa-solid fa-film"></i>
                                <p>Shows Tổng Hợp</p>
                            </p>
                            <p className='title-right'>
                                <p>Xem tất cả</p>
                                <i class="fa-solid fa-angles-right"></i>
                            </p>
                        </div>
                        <div className='phimbo-content'>
                            {
                                shows && shows.length &&
                                shows.map((item, index) => {
                                    return (
                                        index < 8 &&
                                        <CardPhim itemPhim={item} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='home-phim'>
                        <div className='title'>
                            <p className='title-left'>
                                <i class="fa-solid fa-baby"></i>
                                <p>Hoạt Hình Vui Nhộnc</p>
                            </p>
                            <p className='title-right'>
                                <p>Xem tất cả</p>
                                <i class="fa-solid fa-angles-right"></i>
                            </p>
                        </div>
                        <div className='phimbo-content'>
                            {
                                hoatHinh && hoatHinh.length &&
                                hoatHinh.map((item, index) => {
                                    return (
                                        index < 8 &&
                                        <CardPhim itemPhim={item} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return (
        {
            dataRedux: state
        }
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return({
//         addItemRedux: (itemAdd) => dispatch({type: 'ADD_ITEM', payload: itemAdd})
//     })
// }
export default connect(mapStateToProps)(Home);
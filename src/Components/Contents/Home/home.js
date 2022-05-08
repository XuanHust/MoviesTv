import './home.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'

import {
    Link
} from "react-router-dom";
import CardPhim from '../Card/cardphim'

const Home = (props) => {

    const [loadphim, setLoadphim] = useState()

    const loadPhim = () => {
        setLoadphim(1)
    }

    useEffect(() => {
        window.addEventListener('load', loadPhim)
    })

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
                            {
                                props.dataRedux.listBanner && props.dataRedux.listBanner.length &&
                                props.dataRedux.listBanner.map((item, index) => {
                                    return (
                                        <div className='banner'>
                                            <Link to={"/" + item.slug}>
                                                <img src={item.url} alt={item.id}></img>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>

                    <div className='home-phim'>
                        <div className='title'>
                            <p className='title-left'>
                                <i class="fa-solid fa-video"></i>
                                <p>Phim Bộ Đặc Sắc</p>
                            </p>
                            <p className='title-right'>
                                <Link to="/danhsach/phimbo">
                                    <p>Xem tất cả</p>
                                    <i class="fa-solid fa-angles-right"></i>
                                </Link>
                            </p>
                        </div>
                        <div className='phimbo-content'>
                            {
                                props.dataRedux.phimbo && props.dataRedux.phimbo.length &&
                                props.dataRedux.phimbo.map((item, index) => {
                                    return (
                                        index < 8 &&
                                        <Link to={"/" + item.movie.slug}>
                                            <CardPhim itemPhim={item} key={index} />
                                        </Link>
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
                                <Link to="/danhsach/phimle">
                                    <p>Xem tất cả</p>
                                    <i class="fa-solid fa-angles-right"></i>
                                </Link>
                            </p>
                        </div>
                        <div className='phimbo-content'>
                            {
                                props.dataRedux.phimle && props.dataRedux.phimle.length &&
                                props.dataRedux.phimle.map((item, index) => {
                                    return (
                                        index < 8 &&
                                        <Link to={"/" + item.movie.slug}>
                                            <CardPhim itemPhim={item} key={index} />
                                        </Link>
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
                                <Link to="/danhsach/shows">
                                    <p>Xem tất cả</p>
                                    <i class="fa-solid fa-angles-right"></i>
                                </Link>
                            </p>
                        </div>
                        <div className='phimbo-content'>
                            {
                                props.dataRedux.shows && props.dataRedux.shows.length &&
                                props.dataRedux.shows.map((item, index) => {
                                    return (
                                        index < 8 &&
                                        <Link to={"/" + item.movie.slug}>
                                            <CardPhim itemPhim={item} key={index} />
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='home-phim'>
                        <div className='title'>
                            <p className='title-left'>
                                <i class="fa-solid fa-baby"></i>
                                <p>Hoạt Hình Vui Nhộn</p>
                            </p>
                            <p className='title-right'>
                                <Link to="/danhsach/hoathinh">
                                    <p>Xem tất cả</p>
                                    <i class="fa-solid fa-angles-right"></i>
                                </Link>
                            </p>
                        </div>
                        <div className='phimbo-content'>
                            {
                                props.dataRedux.hoathinh && props.dataRedux.hoathinh.length &&
                                props.dataRedux.hoathinh.map((item, index) => {
                                    return (
                                        index < 8 &&
                                        <Link to={"/" + item.movie.slug}>
                                            <CardPhim itemPhim={item} key={index} />
                                        </Link>
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
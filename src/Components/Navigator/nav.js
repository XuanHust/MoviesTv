
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Phimbo from "../Contents/PhimBo/phimbo";
import Phimle from "../Contents/PhimLe/phimle";
import Hoathinh from "../Contents/HoatHinh/hoathinh";
import Show from "../Contents/Shows/show";
import Home from "../Contents/Home/home";
import "./nav.scss"
import PhimDetail from "../Contents/phimDetail/phimDetail";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import PhimBoDetail from "../Contents/phimDetail/phimBoDetail";
import PhimLeDetail from "../Contents/phimDetail/phimLeDetail";
import HoatHinhDetail from "../Contents/phimDetail/hoatHinhDetail";
import ShowsDetail from "../Contents/phimDetail/showsDetail";

const Nav = (props) => {

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

    return (
        <Router>
            <div id="container-nav">
                <div className="nav-content">
                    <li className="home">
                        <Link to="/MoviesTv">
                            <i class="fa-solid fa-house-chimney"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/danhsach/phimbo">
                            <i class="fa-solid fa-video"></i>
                            <p>Phim Bộ</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/danhsach/phimle">
                            <i class="fa-solid fa-film"></i>
                            <p>Phim Lẻ</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/danhsach/shows">
                            <i class="fa-solid fa-tv-retro"></i>
                            <p>Shows</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/danhsach/hoathinh">
                            <i class="fa-solid fa-baby"></i>
                            <p>Hoạt Hình</p>
                        </Link>
                    </li>
                    <li>
                        <i class="fa-solid fa-folder"></i>
                        <p>Thể Loại</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-earth-americas"></i>
                        <p>Quốc Gia</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </li>
                </div>
            </div>

            <Routes>
                <Route path="/danhsach/phimbo" element={<Phimbo />} />
                <Route path="danhsach/phimle" element={<Phimle />} />
                <Route path="/danhsach/shows" element={<Show />} />
                <Route path="/danhsach/hoathinh" element={<Hoathinh />} />
                <Route path="/MoviesTv" element={<Home />} />
                {
                    props.dataRedux.listBanner.map((item, index) => {
                        return(
                            <Route path={'/'+item.slug} element={<PhimDetail infor={item}/>} />
                        )
                    })
                }
                {
                    props.dataRedux.phimbo &&
                    props.dataRedux.phimbo.map((item, index) => {
                        return(
                            <Route path={"/" + item.movie.slug} element={<PhimBoDetail infor={item}/>} />
                        )
                    })
                }
                {
                    props.dataRedux.phimle &&
                    props.dataRedux.phimle.map((item, index) => {
                        return(
                            <Route path={"/" + item.movie.slug} element={<PhimLeDetail infor={item}/>} />
                        )
                    })
                }
                {
                    props.dataRedux.hoathinh &&
                    props.dataRedux.hoathinh.map((item, index) => {
                        return(
                            <Route path={"/" + item.movie.slug} element={<HoatHinhDetail infor={item}/>} />
                        )
                    })
                }
                {
                    props.dataRedux.shows &&
                    props.dataRedux.shows.map((item, index) => {
                        return(
                            <Route path={"/" + item.movie.slug} element={<ShowsDetail infor={item}/>} />
                        )
                    })
                }
            </Routes>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return (
        {
            dataRedux: state
        }
    )
}

export default connect(mapStateToProps)(Nav);
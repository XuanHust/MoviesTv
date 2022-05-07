
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

const Nav = () => {
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
            </Routes>
        </Router>
    )
}

export default Nav;
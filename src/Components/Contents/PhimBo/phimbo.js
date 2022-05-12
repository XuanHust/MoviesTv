import './phimbo.scss'
import { connect } from 'react-redux';
import CardPhim from '../Card/cardphim';
import { useState, useEffect } from 'react';

import {
    Link
} from "react-router-dom";

const Phimbo = (props) => {

    const [sapxep, setSapXep] = useState("--Sắp xếp--")
    const [theloai, setTheLoai] = useState("--Thể loại--")
    const [quocgia, setQuocGia] = useState("--Quốc gia--")
    const [nam, setNam] = useState("--Năm--")
    const [phim, setPhim] = useState(props.dataRedux.phimbo)

    const handleSapXep = (event) => {
        setSapXep(event.target.value)
    }
    const handleTheLoai = (event) => {
        setTheLoai(event.target.value)
    }
    const handleQuocGia = (event) => {
        setQuocGia(event.target.value)
    }
    const handleNam = (event) => {
        setNam(event.target.value)
    }
    const handle = () => {
        setPhim(props.dataRedux.phimbo.filter(
            item =>
                (quocgia === item.movie.country[0].name && nam === `${item.movie.year}` && theloai === item.movie.category[0].name)
        ))
    }

    const handleClick = () => {
        setPhim(props.dataRedux.phimbo)
        quocgia !== "--Quốc gia--" && nam !== "--Năm--" && theloai !== "--Thể loại--" ?
            handle()
            :
            setPhim(props.dataRedux.phimbo.filter(
                item => (quocgia === item.movie.country[0].name)
                    || (nam === `${item.movie.year}`)
                    || (theloai === item.movie.category[0].name)
            ))
    }


    return (
        <div className='phimbo_container'>
            <div className='phimbo-content'>
                <div className='title'>
                    <i class="fa-solid fa-folder-open"></i>
                    <p>Phim Bộ</p>
                </div>
                <div className='selector'>
                    <select onChange={(event) => handleSapXep(event)}>
                        <option>--Sắp xếp--</option>
                        <option>Mới cập nhật</option>
                        <option>Năm xuất bản</option>
                    </select>
                    <select onChange={(event) => handleTheLoai(event)}>
                        <option>--Thể loại--</option>
                        <option>Hành Động</option>
                        <option>Tình Cảm</option>
                        <option>Hài Hước</option>
                        <option>Cổ Trang</option>
                        <option>Kinh Dị</option>
                        <option>Tâm Lý</option>
                        <option>Hình Sự</option>
                        <option>Thần Thoại</option>
                        <option>Viễn Tưởng</option>
                        <option>Gia Đình</option>
                        <option>Khoa Học</option>
                        <option>Chính kịch</option>
                        <option>Tài Liệu</option>
                        <option>Phiêu Lưu</option>
                        <option>Chiến Tranh</option>
                        <option>...</option>
                    </select>
                    <select onChange={(event) => handleQuocGia(event)}>
                        <option>--Quốc gia--</option>
                        <option>Trung Quốc</option>
                        <option>Nhật Bản</option>
                        <option>Âu Mỹ</option>
                        <option>Anh</option>
                        <option>Pháp</option>
                    </select>
                    <select onChange={(event) => handleNam(event)}>
                        <option>--Năm--</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                    </select>
                    <button type='button'
                        onClick={() => handleClick()}
                    >Lọc phim</button>
                </div>
                <div className='phimboall'>
                    {
                        phim && phim.length &&
                        phim.map((item, index) => {
                            return (
                                <Link to={"/" + item.movie.slug}>
                                    <CardPhim itemPhim={item} key={index} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return (
        {
            dataRedux: state
        }
    )
}

export default connect(mapStateToProps)(Phimbo);
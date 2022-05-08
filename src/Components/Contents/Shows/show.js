import './show.scss'
import { connect } from 'react-redux';
import CardPhim from '../Card/cardphim';

import {
    Link
} from "react-router-dom";

const Show = (props) => {
    return (
        <div className='show_container'>
            <div className='show-content'>
                <div className='title'>
                    <i class="fa-solid fa-folder-open"></i>
                    <p>Phim Bộ</p>
                </div>
                <div className='selector'>
                    <select>
                        <option>--Sắp xếp--</option>
                        <option>Mới cập nhật</option>
                        <option>Năm xuất bản</option>
                    </select>
                    <select>
                        <option>--Thể loại--</option>
                        <option>Hành động</option>
                        <option>Tình cảm</option>
                        <option>Hài hước</option>
                        <option>Cổ trang</option>
                        <option>Kinh dị</option>
                        <option>Tâm lý</option>
                        <option>Hình sự</option>
                        <option>Thần thoại</option>
                        <option>...</option>
                    </select>
                    <select>
                        <option>--Quốc gia--</option>
                        <option>Trung Quốc</option>
                        <option>Nhật Bản</option>
                        <option>Âu mỹ</option>
                        <option>Anh</option>
                        <option>Pháp</option>
                    </select>
                    <select>
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
                    <button type='button'>Lọc phim</button>
                </div>
                <div className='showall'>
                    {
                        props.dataRedux.show && props.dataRedux.show.length &&
                        props.dataRedux.show.map((item, index) => {
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

export default connect(mapStateToProps)(Show);
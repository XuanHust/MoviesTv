import './phimdetail.scss'
import { connect } from 'react-redux'
import {
    Link
} from "react-router-dom";

const PhimBoDetail = (props) => {
    const phim = props.dataRedux.totalphim.filter(e => e.movie._id === props.infor.movie._id)
    return (
        <div className='phimdetail-container'>
            <div className='phimdetail-content'>
                <div className='main-content'>
                    <div className='main-left'>
                        <p className='img'>
                            <img src={phim[0].movie.thumb_url} alt={phim[0].movie._id}></img>
                        </p>
                        <button type='button'>
                            <Link to={"/" + phim[0].episodes[0].server_data[0].filename + "x@"}>
                                <i class="fa-solid fa-play"></i>
                                <p>Xem Phim</p>
                            </Link>
                        </button>
                    </div>
                    <div className='main-right'>
                        <p className='title-main'>
                            <h2 className='title'>{phim[0].movie.name}</h2>
                            <h2 className='subtitle'>{phim[0].movie.origin_name}</h2>
                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Trạng thái</p>
                            <p className='infor-right'>{phim[0].movie.episode_current}</p>
                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Số tập</p>
                            <p className='infor-right'>{phim[0].movie.episode_total}</p>
                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Thời lượng</p>
                            {
                                phim[0].movie.time ?
                                    <p className='infor-right'>{phim[0].movie.time}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Năm phát hành</p>
                            {
                                phim[0].movie.year ?
                                    <p className='infor-right'>{phim[0].movie.year}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }
                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Chất lượng</p>
                            {
                                phim[0].movie.quality ?
                                    <p className='infor-right'>{phim[0].movie.quality}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Ngôn ngữ</p>
                            {
                                phim[0].movie.lang ?
                                    <p className='infor-right'>{phim[0].movie.lang}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Đạo diễn</p>
                            {
                                phim[0].movie.director[0] ?
                                    <p className='infor-right'>{phim[0].movie.director[0]}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Diễn viên</p>
                            {
                                phim[0].movie.actor.toString() ?
                                    <p className='infor-right'>{phim[0].movie.actor.toString()}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Thể loại</p>
                            {
                                phim[0].movie.type.toString() ?
                                    <p className='infor-right'>{phim[0].movie.type.toString()}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Quốc gia</p>
                            {
                                phim[0].movie.country[0].name ?
                                    <p className='infor-right'>{phim[0].movie.country[0].name}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div className='noidung-content'>
                <div className='noidung-title'>
                    <i class="fa-solid fa-book"></i>
                    <p>Nội Dung Phim</p>
                </div>
            </div>
            <div className='noidung'>
                <p>
                    {phim[0].movie.content}
                </p>
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

export default connect(mapStateToProps)(PhimBoDetail);
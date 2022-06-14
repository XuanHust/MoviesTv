import './FimlDetail.scss'
import { connect } from 'react-redux'
import {
    Link
} from "react-router-dom";

const FimlDetail = (props) => {
    const fiml = props.dataRedux.totalphim.filter(e => e.movie._id === props.infor.movie._id)
    return (
        <div className='phimdetail-container'>
            <div className='phimdetail-content'>
                <div className='main-content'>
                    <div className='main-left'>
                        <p className='img'>
                            <img src={fiml[0].movie.thumb_url} alt={fiml[0].movie._id}></img>
                        </p>
                        <button type='button'>
                            <Link to={"/" + fiml[0].movie.slug + "/movietv@"}>
                                <i class="fa-solid fa-play"></i>
                                <p>Watch fiml</p>
                            </Link>
                        </button>
                    </div>
                    <div className='main-right'>
                        <p className='title-main'>
                            <h2 className='title'>{fiml[0].movie.name}</h2>
                            <h2 className='subtitle'>{fiml[0].movie.origin_name}</h2>
                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Trạng thái</p>
                            <p className='infor-right'>{fiml[0].movie.episode_current}</p>
                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Số tập</p>
                            <p className='infor-right'>{fiml[0].movie.episode_total}</p>
                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Thời lượng</p>
                            {
                                fiml[0].movie.time ?
                                    <p className='infor-right'>{fiml[0].movie.time}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Năm phát hành</p>
                            {
                                fiml[0].movie.year ?
                                    <p className='infor-right'>{fiml[0].movie.year}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }
                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Chất lượng</p>
                            {
                                fiml[0].movie.quality ?
                                    <p className='infor-right'>{fiml[0].movie.quality}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Ngôn ngữ</p>
                            {
                                fiml[0].movie.lang ?
                                    <p className='infor-right'>{fiml[0].movie.lang}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Đạo diễn</p>
                            {
                                fiml[0].movie.director[0] ?
                                    <p className='infor-right'>{fiml[0].movie.director[0]}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Diễn viên</p>
                            {
                                fiml[0].movie.actor.toString() ?
                                    <p className='infor-right'>{fiml[0].movie.actor.toString()}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Thể loại</p>
                            {
                                fiml[0].movie.category ?
                                // {fiml[0].movie.category.toString().name}
                                    <p className='infor-right'>
                                        {
                                            fiml[0].movie.category.map((item, index) => {
                                                return(
                                                    <span>{fiml[0].movie.category[index].name}, </span>
                                                )
                                            })
                                        }
                                    </p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Quốc gia</p>
                            {
                                fiml[0].movie.country[0].name ?
                                    <p className='infor-right'>{fiml[0].movie.country[0].name}</p>
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
                    <p>Nội Dung fiml</p>
                </div>
            </div>
            <div className='noidung'>
                <p>
                    {fiml[0].movie.content}
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

export default connect(mapStateToProps)(FimlDetail);
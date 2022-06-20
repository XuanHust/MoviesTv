import './FimlDetail.scss'
import { connect } from 'react-redux'
import {
    Link
} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios'


const FimlDetail = (props) => {
    console.log(props.infor.id)
    const [actor, setActor] = useState([]);
    const [director, setDirector] = useState([]);
    const [category, setCategory] = useState([]);
    const [espisodes, setEspisode] = useState([]);

    console.log("actor", actor)

    useEffect(() => {
        axios.post('http://localhost:8080/postData', { id: props.infor.id })
            .then(() => console.log("Send Data"))
            // .then(() => {
            //     fetch('http://localhost:8080/postData/actor')
            //         .then(response => response.json())
            //         .then(response => setActor(response))
            //         // .catch(error => console.error(error))
            // })
            .catch(err => {
                console.error(err);
            })

        // fetch('http://localhost:8080/postData/actor')
        //     .then(response => response.json())
        //     .then(response => setActor(response))
        //     .catch(error => console.error(error))

    }, [])
    return (
        <div className='phimdetail-container'>
            <div className='phimdetail-content'>
                <div className='main-content'>
                    <div className='main-left'>
                        <p className='img'>
                            <img src={props.infor.thumb_url} alt={props.infor.id}></img>
                        </p>
                        <button type='button'>
                            <Link to={"/" + props.infor.slug + "/movietv@"}>
                                <i class="fa-solid fa-play"></i>
                                <p>Watch fiml</p>
                            </Link>
                        </button>
                    </div>
                    <div className='main-right'>
                        <p className='title-main'>
                            <h2 className='title'>{props.infor.name}</h2>
                            <h2 className='subtitle'>{props.infor.origin_name}</h2>
                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Trạng thái</p>
                            <p className='infor-right'>{props.infor.episode_current}</p>
                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Số tập</p>
                            <p className='infor-right'>{props.infor.episode_total}</p>
                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Thời lượng</p>
                            {
                                props.infor.time ?
                                    <p className='infor-right'>{props.infor.time}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Năm phát hành</p>
                            {
                                props.infor.year ?
                                    <p className='infor-right'>{props.infor.year}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }
                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Chất lượng</p>
                            {
                                props.infor.quality ?
                                    <p className='infor-right'>{props.infor.quality}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        <p className='infor'>
                            <p className='infor-left'>Ngôn ngữ</p>
                            {
                                props.infor.lang ?
                                    <p className='infor-right'>{props.infor.lang}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p>
                        {/* <p className='infor'>
                            <p className='infor-left'>Đạo diễn</p>
                            {
                                props.infor.director[0] ?
                                    <p className='infor-right'>{props.infor.director[0]}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p> */}
                        {/* <p className='infor'>
                            <p className='infor-left'>Diễn viên</p>
                            {
                                props.infor.actor.toString() ?
                                    <p className='infor-right'>{props.infor.actor.toString()}</p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }

                        </p> */}
                        {/* <p className='infor'>
                            <p className='infor-left'>Thể loại</p>
                            {
                                props.infor.category ?
                                // {props.infor.category.toString().name}
                                    <p className='infor-right'>
                                        {
                                            props.infor.category.map((item, index) => {
                                                return(
                                                    <span>{props.infor.category[index].name}, </span>
                                                )
                                            })
                                        }
                                    </p>
                                    :
                                    <p className='infor-right'>N/A</p>
                            }
                        </p> */}
                        <p className='infor'>
                            <p className='infor-left'>Quốc gia</p>
                            {
                                props.infor.country ?
                                    <p className='infor-right'>{props.infor.country}</p>
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
                    {props.infor.content}
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
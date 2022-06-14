import './WatchFiml.scss'
import { connect } from 'react-redux'
import cartoon from '../../../assets/audio/cartoon.mp4'
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const WatchFiml = (props) => {
    const film = props.dataRedux.totalphim.filter(e => e.movie._id === props.phimz.movie._id)
    const [episode, setEspisode] = useState(0)

    const handleEpisode = (fiml, slug, item) => {
        const currentFiml = {
            fiml: fiml,
            slug: slug,
            item: item,
        }
        props.episodeCurrent(currentFiml)
        setEspisode(slug)
    }

    return (
        <div className='xemphim-conatiner'>
            <div className='xemphim-content'>
                <div className='main-phim'>
                    <iframe
                        src={film[0].episodes[0].server_data[episode].link_embed}
                        title="Fiml MoviesTv" frameborder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className='server'>
                    <p className='first'>
                        <i class="fa-solid fa-server"></i>
                        Server
                    </p>
                    <p className='second'>
                        {film[0].episodes[0].server_name}
                    </p>
                </div>
                <div className='name'>
                    <p className='nametv'>
                        {film[0].movie.name}
                    </p>
                    <p className='nameta'>
                        {film[0].movie.origin_name}
                    </p>
                </div>
                <div className='episodes'>
                    <p className='chontap'>
                        <i class="fa-solid fa-tv"></i>
                        <p>Chọn Tập</p>
                    </p>
                    <div className='tap'>
                        {
                            film[0].episodes[0].server_data.map((item, index) => {
                                return (
                                    <button type='button' onClick={() => handleEpisode(film[0], index, item.link_embed)}>
                                        <a href={`#tap${item.name}`}>
                                            {item.name}
                                        </a>
                                    </button>
                                )
                            })
                        }
                    </div>
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
const mapDispatchToProps = (dispatch) => {
    return ({
        episodeCurrent: (epiCurrent) => dispatch({ type: 'EPISODE_CURRENT', payload: epiCurrent })
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchFiml);
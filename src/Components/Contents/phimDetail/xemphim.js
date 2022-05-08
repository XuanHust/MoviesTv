import './xemphim.scss'
import { connect } from 'react-redux'

const Xemphim = (props) => {
    const film = props.dataRedux.totalphim.filter(e => e.movie._id === props.phimz.movie._id)
    return (
        <div className='xemphim-conatiner'>
            <div className='xemphim-content'>
                <div className='main-phim'>
                    <iframe
                        src="https://www.youtube.com/embed/sae_tdgyDsQ"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                    <p className='sory'>
                        Xin Lỗi Vì Sự Bất Tiện Này! Để Xem Phim Please Click To Button Bellow.
                    </p>
                    <button type='button'>
                        <a href={film[0].episodes[0].server_data[0].link_embed}>
                            Click Here!
                        </a>
                    </button>
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
                                    <button type='button'>
                                        <a href={film[0].episodes[0].server_data[index].link_embed}>
                                            {index + 1}
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

export default connect(mapStateToProps)(Xemphim);
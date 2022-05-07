import './cardphim.scss'

const CardPhim = (props) => {
    console.log("Check CardPhim:", props.itemPhim)
    return (
        <div className='cardPhim'>
            <div className='cardphim-conent'>
                <p className='img'>
                    <img src={props.itemPhim.movie.thumb_url} alt={props.itemPhim.movie.name}></img>
                </p>
                <p className='nametv'>
                    {props.itemPhim.movie.name}
                </p>
                <p className='nameta'>
                    {props.itemPhim.movie.origin_name}
                </p>
            </div>
        </div>
    )
}

export default CardPhim;
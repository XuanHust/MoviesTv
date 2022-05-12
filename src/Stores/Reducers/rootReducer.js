import { useState, useEffect } from "react";
import phimbo from '../../Data/PhimBo/phimbo.json'
import phimle from '../../Data/PhimLe/phimle.json'
import shows from '../../Data/Shows/shows.json'
import hoathinh from '../../Data/HoatHinh/hoathinh.json'
import banner from '../../Data/Banner/banner.json'

import truonghanhca from '../../Assets/Images/truonghanhca.jpg'
import ngocrong from '../../Assets/Images/7vienngocrong.jpg'
import chienbinhmuadong from '../../Assets/Images/chienbinhmuadong.jpg'
import chuatechiecnhan from '../../Assets/Images/chuatechiecnhan.jpg'
import kingsman from '../../Assets/Images/kingsman.jpg'
import loki1 from '../../Assets/Images/loki1.jpg'
import minhlan from '../../Assets/Images/minhlan.jpg'
import trutien2 from '../../Assets/Images/trutien2.jpg'
import thieunien from '../../Assets/Images/thieunientudaidanhbo.jpg'

const initState = {
    phimbo: [

    ],
    phimle: [

    ],
    shows: [

    ],
    hoathinh: [

    ],
    banner: [

    ],
    listBanner : [
        { id: "627212013a2c0c6289bb9cd7", url: truonghanhca, slug: "truong-ca-hanh" },
        { id: "627355803a2c0c6289bc6e7c", url: ngocrong, slug: "bay-vien-ngoc-rong-z" },
        { id: "62695c78fa02df5563cbeccb", url: chienbinhmuadong, slug: "falcon-va-chien-binh-mua-dong" },
        { id: "6262eaf9db43524328b0fc26", url: chuatechiecnhan, slug: "chua-te-cua-chiec-nhan-su-tro-ve-cua-nha-vua" },
        { id: "6266d1ad489068f643a21e09", url: kingsman, slug: "mat-vu-kingsman-kingsman-the-secret-service" },
        { id: "62700f343a2c0c6289b9e435", url: loki1, slug: "loki" },
        { id: "6269e1b7fa02df5563cc2fa6", url: minhlan, slug: "minh-lan-truyen" },
        { id: "626ab730fa02df5563cc9b2a", url: trutien2, slug: "tru-tien-thanh-van-chi-2" },
        { id: "626fc4263a2c0c6289b9bb8e", url: thieunien, slug: "thieu-nien-tu-dai-danh-bo" },
    ],
    totalphim: [

    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CALL_API':
            phimbo.map((item, index) => {
                state.phimbo.push(item)
                state.totalphim.push(item)
            })

            phimle.map((item, index) => {
                state.totalphim.push(item)
                state.phimle.push(item)

            })

            shows.map((item, index) => {
                state.shows.push(item)
                state.totalphim.push(item)
            })

            hoathinh.map((item, index) => {
                state.hoathinh.push(item)
                state.totalphim.push(item)
            })

            banner.map((item, index) => {
                state.banner.push(item)
                state.totalphim.push(item)
            })
            console.log("Check phim bo:", state.phimbo)
            // console.log("Check phim le:", state.phimle)
            // console.log("Check phim shows:", state.shows)
            // console.log("Check phim hoathinh:", state.hoathinh)
            // console.log("Check phim Banner:", state.banner)
            return state
        default:
            return state;
    }
}

export default rootReducer;
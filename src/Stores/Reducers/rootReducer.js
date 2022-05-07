import { useState, useEffect } from "react";
import phimbo from '../../Data/PhimBo/phimbo.json'
import phimle from '../../Data/PhimLe/phimle.json'
import shows from '../../Data/Shows/shows.json'
import hoathinh from '../../Data/HoatHinh/hoathinh.json'
import banner from '../../Data/Banner/banner.json'

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

    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CALL_API':
            phimbo.map((item, index) => {
                state.phimbo.push(item)
            })

            phimle.map((item, index) => {
                state.phimle.push(item)
            })

            shows.map((item, index) => {
                state.shows.push(item)
            })

            hoathinh.map((item, index) => {
                state.hoathinh.push(item)
            })

            banner.map((item, index) => {
                state.banner.push(item)
            })

            console.log("Check phim bo:", state.phimbo)
            console.log("Check phim le:", state.phimle)
            console.log("Check phim shows:", state.shows)
            console.log("Check phim hoathinh:", state.hoathinh)
            console.log("Check phim Banner:", state.banner)

            return state
        // case 'Test2':
        //     break;
        default:
            return state;
    }
}

export default rootReducer;
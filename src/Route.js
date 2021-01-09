import React from 'react'

import Home from "./views/Home";
import CountryList from "./views/CountryList";
import Country from "./views/Country";
import NotFound from "./views/404"

export default function getView() {
    if (window.location.pathname.split('/')[1] === 'country' ){
        const code = window.location.pathname.split('/')[2]
        if (!code) return <NotFound/>
        return <Country code={code}/>
    }
    switch (window.location.pathname) {
        case '/':
            return <Home/>
        case '/country-list':
            return <CountryList/>
        default:
            return <NotFound/>
    }
}
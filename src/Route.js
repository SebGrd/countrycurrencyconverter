import React from 'react'

import Home from "./views/Home";
import Map from "./views/Map";
import CountryList from "./views/CountryList";
import NotFound from "./views/404"

export default function getView() {
    switch (window.location.pathname) {
        case '/':
            return <Home/>
        case '/map':
            return <Map/>
        case '/country-list':
            return <CountryList/>
        default:
            return <NotFound/>
    }
}
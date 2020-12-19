import React, { useEffect, useState } from 'react';

import CountryCard from "../components/CountryCard";

export default function CountryList() {
    let [countryData, setCountryData] = useState([])

    useEffect(() => {
        const fetchData = () => {
            fetch('https://restcountries.eu/rest/v2/all')
                .then(res => res.json())
                .then(data => setCountryData(data))
        }
        fetchData()
    }, [])

    return (
        <>
            <div className="container">
                <h1>Country list</h1>
                <div className="row">
                    { countryData?.map( ({name, alpha2Code, region, currencies, flag}) =>
                        <CountryCard
                            key={`country-${name}`}
                            countryData={{name, alpha2Code, region, currencies, flag}}
                        />
                    )
                    }
                </div>
            </div>
        </>
    )
}
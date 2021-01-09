import React, {useEffect, useState} from 'react';
import Converter from "../components/Converter";

export default function Country({code}) {
    let [countryData, setCountryData] = useState({})
    useEffect(() => {
        const fetchData = () => {
            fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
                .then(res => res.json())
                .then(data => setCountryData(data))
        }
        fetchData();
    }, [code])

    return (
        <div className="container">
            <div className="country__header">
                <h1 className="country__header__title">
                   <span className="country__header__title__name">{countryData.name}</span>
                    <span className="country__header__title__info">
                        <b>🚩 {countryData.capital ? countryData.capital : '-'}</b>
                        <b>🌍 {countryData.region}</b>
                    </span>
                </h1>
                <div className="country__header__flag-wrapper">
                    <img src={countryData.flag} alt="flag"/>
                </div>
            </div>
            <Converter currencies={countryData.currencies}/>
        </div>
    );
}
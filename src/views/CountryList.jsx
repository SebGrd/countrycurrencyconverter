import React, {useEffect, useState} from 'react';

import CountryCard from "../components/CountryCard";

function SearchInput({setFilteredCountryData, countryData}) {
    let [search, setSearch] = useState('')

    useEffect(() => {
        if (!search) {
            setFilteredCountryData(countryData)
            return null
        }
        setFilteredCountryData(countryData?.filter(({name}) =>
            name.toLowerCase().includes(search.toLocaleLowerCase()))
        )
    }, [search, countryData, setFilteredCountryData])

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <input className="country-list__header__input" type="text" onChange={handleChange}/>
    )
}

export default function CountryList() {
    let [countryData, setCountryData] = useState([])
    let [filteredCountryData, setFilteredCountryData] = useState([])

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
                <div className="country-list__header">
                    <h1 className="country-list__header__title">Country list</h1>
                    <SearchInput
                        setFilteredCountryData={setFilteredCountryData}
                        countryData={countryData}
                    />
                </div>
                <div className="row">
                    {filteredCountryData?.map(({name, alpha2Code, region, currencies, flag}) =>
                        <CountryCard
                            key={`country-${alpha2Code}`}
                            countryData={{name, alpha2Code, region, currencies, flag}}
                        />
                    )}
                </div>
            </div>
        </>
    )
}
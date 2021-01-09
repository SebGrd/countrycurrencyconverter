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
        <input className="country-list__header__input" type="text" onChange={handleChange} placeholder="Search..."/>
    )
}

export default function CountryList() {
    let [countryData, setCountryData] = useState([])
    let [loading, setLoading] = useState(false)
    let [filteredCountryData, setFilteredCountryData] = useState([])

    useEffect(() => {
        const fetchData = () => {
            setLoading(true)
            fetch('https://restcountries.eu/rest/v2/all')
                .then(res => res.json())
                .then(data => {
                    setLoading(false)
                    setCountryData(data)
                })
                .catch(e => {
                    console.log(e)
                    setLoading(false)
                })
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
                {loading &&
                    <img src="/loading.gif" alt="loading"/>
                }
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
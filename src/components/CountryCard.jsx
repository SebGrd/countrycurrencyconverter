import React from "react";

export default function CountryCard({countryData}) {
    return (
        <div className="col-4">
            <article className="country-card">
                <img src={countryData.flag} alt="country" className="country-card__img"/>
                <h1 className="country-card__title">{countryData.name}</h1>
                {countryData.currencies.map(({code}) => {
                    if (code === '(none)' || code === null) return null
                    return <h2 className="country-card__badge" key={`${countryData.alpha2Code}-${code}`}>{code}</h2>
                    }
                )}
            </article>
        </div>
    )
}
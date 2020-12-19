import React from "react";

export default function CountryCard({countryData}) {
    return (
        <div className="col-xl-4 col-md-6 col-12">
            <article className="country-card">
                <a href={`/country/${countryData.alpha2Code}`} className="country-card__link">
                    <div className="country-card__img-wrapper">
                        <img src={countryData.flag} alt="country" className="country-card__img-wrapper__img"/>
                    </div>
                    <h1 className="country-card__title">{countryData.name}</h1>
                    <div className="country-card__badges">
                        {countryData.currencies.map(({code}) => {
                                if (code === '(none)' || code === null) return null
                                return <h2 className="country-card__badges__badge" key={`${countryData.alpha2Code}-${code}`}>{code}</h2>
                            }
                        )}
                    </div>
                </a>
            </article>
        </div>
    )
}
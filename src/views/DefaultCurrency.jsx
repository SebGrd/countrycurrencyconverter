import React, {useEffect, useState} from 'react';

function Currency({code, name}) {
    const setDefaultCurrency = (code) => {
        localStorage.setItem('currency', code)
        alert('Default currency set!')
    }

    return (
        <div className="col col-12 col-md-6">
            <article className="default-currencies__currency">
                <h1 className="default-currencies__currency__title">{code}</h1>
                <h2 className="default-currencies__currency__name">{name}</h2>
                <button className="default-currencies__currency__button" onClick={() => setDefaultCurrency(code)}>Select</button>
            </article>
        </div>
    )
}

export default function DefaultCurrency() {
    let [currencies, setCurrencies] = useState({});
    useEffect(() => {
        const fetchData = () => {
            fetch('https://free.currconv.com/api/v7/currencies?apiKey=21a1205f26bfd411d4c9')
                .then(res => res.json())
                .then(data => setCurrencies(data.results))
        }
        fetchData()
    }, [])

    let currenciesList = Object.entries(currencies)

    return (
        <div className="container">
            <h1>Default currency</h1>
            <p>Choose the default currency that will be used by default when you will convert currencies.</p>
            <section className="default-currencies">
                <div className="row">
                    { currenciesList.map(currency => <Currency key={currency[0]} code={currency[0]} name={currency[1].currencyName}/>) }
                </div>
            </section>
        </div>
    )
}
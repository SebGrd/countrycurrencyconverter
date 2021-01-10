import React, {useEffect, useState} from "react";

function BaseValueInput({setBaseValue}) {
    const handleChange = (event) => {
        setBaseValue(event.target.value)
    }
    return (
        <input className="converter__currency__input__input" type="number" min="0" defaultValue={1}
               onChange={handleChange} placeholder="24..."/>
    )
}

function Currency({code}) {
    let [currencyData, setCurrencyData] = useState({});
    let [firstValue, setFirstValue] = useState(1);
    let [secondValue, setSecondValue] = useState(1);

    let savedCurrency = window.localStorage.getItem('currency');
    let defaultCurrency = savedCurrency ? savedCurrency : 'USD'

    useEffect(() => {
        if (code) {
            const fetchData = () => {
                fetch(`https://free.currconv.com/api/v7/convert?q=${defaultCurrency}_${code}&apiKey=21a1205f26bfd411d4c9`)
                    .then(res => res.json())
                    .then(data => setCurrencyData(data))
            }
            fetchData();
        }
    }, [code, defaultCurrency, setCurrencyData])

    let conversionValue = currencyData.results ? currencyData.results[`${defaultCurrency}_${code}`] : null

    let multiplier = conversionValue?.val

    return (
        <div className="converter">
            <h3 className="converter__title">{code}</h3>
            <article className="converter__currency">
                <p className="converter__currency__title">
                    <span className="badge">{defaultCurrency}</span>
                    <span className="converter__currency__title__arrow">→</span>
                    <span className="badge">{code}</span>
                </p>
                <div className="converter__currency__wrapper">
                    <div className="converter__currency__input">
                        <BaseValueInput setBaseValue={setFirstValue}/>
                        <span className="converter__currency__input__code">{defaultCurrency}</span>
                    </div>
                    <div className="converter__currency__arrow">→</div>
                    <div className="converter__currency__result">
                        {Math.round((firstValue * multiplier) * 1000) / 1000} {code}
                    </div>
                </div>
            </article>
            <article className="converter__currency">
                <p className="converter__currency__title">
                    <span className="badge">{code}</span>
                    <span className="converter__currency__title__arrow">→</span>
                    <span className="badge">{defaultCurrency}</span>
                </p>
                <div className="converter__currency__wrapper">
                    <div className="converter__currency__input">
                        <BaseValueInput setBaseValue={setSecondValue}/>
                        <span className="converter__currency__input__code">{code}</span>
                    </div>
                    <div className="converter__currency__arrow">→</div>
                    <div className="converter__currency__result">
                        {Math.round((secondValue / multiplier) * 1000) / 1000} {defaultCurrency}
                    </div>
                </div>
            </article>
        </div>
    )
}

export default function Converter({currencies}) {
    let codes = currencies?.map(({code}) => code)

    return (
        <section className="converter-section">
            <h2>Converter</h2>
            {codes?.map((code) => {
                    if (code === '(none)' || code === null) return null
                    return <Currency key={`${code}`} code={code}/>
                }
            )}
        </section>
    )
}
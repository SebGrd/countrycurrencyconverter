import React, {useEffect, useState} from "react";

function BaseValueInput({setBaseValue}) {

    const handleChange = (event) => {
        setBaseValue(event.target.value)
    }

    return (
        <input className="input" type="number" min="0" defaultValue={1} onChange={handleChange} placeholder="24..."/>
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
        <div className="converter__currency">
            <p><span className="badge">{defaultCurrency}</span>→<span className="badge">{code}</span></p>
            <p><BaseValueInput setBaseValue={setFirstValue}/>
                {defaultCurrency} → {Math.round((firstValue * multiplier) * 1000) / 1000} {code}
            </p>
            <p><span className="badge">{code}</span>→<span className="badge">{defaultCurrency}</span></p>
            <p><BaseValueInput setBaseValue={setSecondValue}/>
                {code} → {Math.round((secondValue / multiplier) * 1000) / 1000} {defaultCurrency}
            </p>
        </div>
    )
}

export default function Converter({currencies}) {
    let codes = currencies?.map(({code}) => code)

    return (
        <div className="converter">
            <h2>Converter</h2>
            {codes?.map((code) => {
                    if (code === '(none)' || code === null) return null
                    return <Currency key={`${code}`} code={code}/>
                }
            )}
        </div>
    )
}
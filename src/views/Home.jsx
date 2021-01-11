export default function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col col-24 col-md-12">
                        <article className="resume">
                            <h1 className="resume__title">
                                <span>Get all country currencies</span><span> from your fingertips.</span>
                            </h1>
                            <p>
                                <b>Currency converter</b> uses 2 secured and reliables APIs to provide you precise and
                                continuous data.
                            </p>
                            <p>You can browse through countries and get their currencies very easily.</p>
                        </article>
                    </div>
                    <div className="col col-24 col-md-12">
                        <section className="apis-resume">
                            <div className="row">
                                <div className="col col-24 col-xl-12">
                                    <article className="apis-resume__resume">
                                        <h1 className="apis-resume__resume__title">Currency Converter API</h1>
                                        <img src="/logoCurrency.png" alt="logo"/>
                                        <a href="https://www.currencyconverterapi.com/"
                                           className="apis-resume__resume__button" target="_blank">Website</a>
                                    </article>
                                </div>
                                <div className="col col-24 col-xl-12">
                                    <article className="apis-resume__resume">
                                        <h1 className="apis-resume__resume__title">REST Countries</h1>
                                        <img src="/logoCountry.png" alt="logo"/>
                                        <a href="https://restcountries.eu/"
                                           className="apis-resume__resume__button" target="_blank">Website</a>
                                    </article>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
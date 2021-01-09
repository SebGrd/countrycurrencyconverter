import HeaderMenu from "./HeaderMenu";

export default function Header() {
    return (
        <header>
            <div className="container" id="header">
                <div className="header-wrapper">
                    <h1 className="header__title">Currency Converter</h1>
                    <HeaderMenu/>
                </div>
            </div>
        </header>
    )
}
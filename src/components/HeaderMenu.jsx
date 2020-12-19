export default function HeaderMenu() {
    return (
        <ul className="header__menu">
            <li className="header__menu__item">
                <a className="header__menu__item__link" href="/">Home</a>
            </li>
            <li className="header__menu__item">
                <a className="header__menu__item__link" href="/country-list">Country List</a>
            </li>
            <li className="header__menu__item">
                <a className="header__menu__item__link" href="/map">Map</a>
            </li>
        </ul>
    )
}
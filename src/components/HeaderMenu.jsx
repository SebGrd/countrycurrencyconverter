export default function HeaderMenu() {

    const mainPage = (href) => window.location.pathname.split('/')[1] === href;

    return (
        <ul className="header__menu">
            <li className="header__menu__item">
                <a
                    className={`header__menu__item__link${mainPage('') ? ' active' : ''}`}
                    href="/">
                    Home
                </a>
            </li>
            <li className="header__menu__item">
                <a
                    className={`header__menu__item__link${mainPage('country-list') ? ' active' : ''}`}
                    href="/country-list">
                    Country List
                </a>
            </li>
            <li className="header__menu__item">
                <a
                    className={`header__menu__item__link${mainPage('default-currency') ? ' active' : ''}`}
                    href="/default-currency">
                    Default currency
                </a>
            </li>
        </ul>
    )
}
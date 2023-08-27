import './style.css';
import logo from "../../assets/logo.png"
const Header = () => {
    return (
        <header className="App-header">
            <div className='header-child header-left'>
            <img alt="logo" src={logo}/>
            <input type="text" className='searchfield' name="search" placeholder="Search for companies,contacts,etc."/>
            <p>Advanced search</p>
            </div>
            <div className='header-child header-right'>
                <a href='#' className='menu-item active'>Target</a>
                <a href='#' className='menu-item'>Engage</a>
                <a href='#' className='menu-item'>Deals</a>
                <a href='#' className='menu-item'>Analyze</a>
                <a href='#' className='menu-item'>Improve</a>
            </div>
        </header>
    )
}

export default Header;
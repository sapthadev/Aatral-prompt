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
                <button className='menu-item active'>Target</button>
                <button className='menu-item'>Engage</button>
                <button className='menu-item'>Deals</button>
                <button className='menu-item'>Analyze</button>
                <button className='menu-item'>Improve</button>
            </div>
        </header>
    )
}

export default Header;
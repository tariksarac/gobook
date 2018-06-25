import React from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import Social from "./Social";
import { Link } from 'react-router-dom'


const logo = require('../../images/logo.jpeg')

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false
        };
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        let { open } = this.state
        return (
            <header className="App-header" style={{backgroundColor: open && 'transparent'}}>
                <div className={'header-content'}>
                    <img src={logo}/>
                    <div className={'header-items'} style={{left: open && '0%'}}>
                        <Link  to="/" onClick={() => this.setState({open :false})}><div className={'header-item'}>Home</div></Link>
                        <Link className={'header-item'} to="/all-tours" onClick={() => this.setState({open :false})}>Destinations</Link>
                        <Link className={'header-item'} to="/#contact" onClick={() => this.setState({open :false})}>Contact</Link>
                    </div>
                    <div className={'menu'}>
                        <HamburgerMenu
                            isOpen={this.state.open}
                            menuClicked={this.handleClick}
                            width={18}
                            height={15}
                            strokeWidth={2}
                            rotate={0}
                            color='#3ac0c7'
                            borderRadius={0}
                            animationDuration={0.5}
                            style={{backgroundColor: 'red'}}
                        />
                    </div>

                    <div className={'header-social'}><Social /> </div>
                </div>
            </header>
        )
    }

}

export default Header
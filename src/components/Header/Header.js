import React from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import Social from "./Social";
import { Link } from 'react-router-dom'

const largeLogo = require('../../images/GoBook.png')

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
                    <div className={'header-items'} style={{left: open && '0%'}}>
                        <Link id={'logo'} className={'header-item'}  to="/" onClick={() => this.setState({open :false})} style={{display:'flex', alignItems:'center'}}> <img className={'logo'} src={largeLogo} style={{margin: '0'}} alt={'GoBook'}/></Link>
                        <Link className={'header-item mobile-home'} to="/" onClick={() => this.setState({open :false})}>Home</Link>
                        <Link className={'header-item'} to="/why-bosnia" onClick={() => this.setState({open :false})}>Why Bosnia</Link>
                        <Link className={'header-item'} to="/about" onClick={() => this.setState({open :false})}>About</Link>
                        <Link className={'header-item'} to="/contact" onClick={() => this.setState({open :false})}>Contact</Link>
                        {/*<Link className={'header-item'} to="/hungary-special" onClick={() => this.setState({open :false})}>Hungary Special</Link>*/}
                    </div>
                    <div className={'menu'}>
                        <HamburgerMenu
                            isOpen={this.state.open}
                            menuClicked={this.handleClick}
                            width={18}
                            height={15}
                            strokeWidth={2}
                            rotate={0}
                            color='#33a3fc'
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
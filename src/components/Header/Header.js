import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import {Link, withRouter} from 'react-router-dom';
import './Header.css';
import BookButton from "../Common/BookButton/BookButton";

const largeLogo = require('../../images/GoBook.png');

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.headerRef = React.createRef();

        this.state = {
            open: false,
            active: null
        };
    }

    static defaultProps = {};

    static propTypes = {};

    handleClick = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    render() {
        let { open, active } = this.state;
        return (
            <header className="App-header" ref={this.headerRef} >
                <div className={'header-wrapper'}>
                    <div className={'logo-container'}>
                        {/*laptop*/}
                        <Link
                            id={'logo'}
                            className={'header-logo'}
                            to="/"
                            onClick={() => this.setState({ open: false ,active: null })}
                            style={{ display: open ? 'none' : 'flex', alignItems: 'center' }}>
                            {' '}
                            <img className={'logo'} src={largeLogo} style={{ margin: '0' }} alt={'GoBook'} />
                        </Link>

                    </div>

                    {/*mobile*/}
                    <div className={'menu'}>
                        <HamburgerMenu
                            isOpen={this.state.open}
                            menuClicked={this.handleClick}
                            width={30}
                            height={20}
                            strokeWidth={2}
                            rotate={0}
                            color="#33a3fc"
                            borderRadius={0}
                            animationDuration={0.5}
                            // style={{ backgroundColor: 'red' }}
                        />
                    </div>


                    <div className={'header-content'} style={{ left: open && '0%' }}>

                        {/*<div className={'header-items'} style={{ left: open && '0%' }}>*/}


                        <div className={'navigation'}>
                            {/*mobile visible*/}
                            <Link
                                className={'header-item mobile-home'}
                                to="/"
                                onClick={() => this.setState({ open: false ,active: null})}>
                                Home
                            </Link>

                            <Link
                                className={`header-item ${active === 'why-bosnia' && 'active'}`}
                                to="/why-bosnia"
                                onClick={() => this.setState({ open: false ,active:'why-bosnia'})}>
                                Why Bosnia
                            </Link>

                            <Link
                                className={`header-item ${active === 'about' && 'active'}`}
                                to="/about"
                                onClick={() => this.setState({ open: false, active:'about' })}>
                                About
                            </Link>

                            <Link
                                className={`header-item ${active === 'contact' && 'active'}`}
                                to="/contact"
                                onClick={() => this.setState({ open: false ,active: 'contact' })}>
                                Contact
                            </Link>

                        </div>
                        {/*</div>*/}

                        <div className={'header-button'}>
                            <BookButton onClickAction={()=>{this.handleClick(); this.props.history.push('/book-now')}}/>
                        </div>
                    </div>
                </div>


            </header>
        );
    }
}

export default withRouter(Header);

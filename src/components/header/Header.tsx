import React from 'react';
import './header.scss';
import Gradient from '../../elements/Gradient';

type HeaderProps = {
    header: string;
};

function Header({ header }: HeaderProps) {
    return (
        <div className="headerWrapper">
            <div className="gradientWrapper">
                <Gradient />
            </div>
            <div className="header">{header}</div>
        </div>
    );
}

export default Header;

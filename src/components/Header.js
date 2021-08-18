import React, {useState} from 'react';
import {ThemeContext} from '../App';

function Header() {
    const {currentTheme, switchTheme} = useState(ThemeContext)
    return(
        <div>
            <button onClick= {() => switchTheme('red')} />
        </div>
    )
}

export default Header;
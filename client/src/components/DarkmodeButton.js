import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

export default function DarkmodeButton(props) {

    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggle = e => {
        e.preventDefault();
        setDarkMode(!darkMode);

    };

    return (
        <>
            <button id='darkmode-btn' className='darkmode-btn' onClick={toggle}>Dark Mode</button>
        </>
    )
}


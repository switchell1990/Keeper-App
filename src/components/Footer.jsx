import React from 'react';

function Header() {

    var currentYear = new Date().getFullYear();

    return <footer>
        <p>Copyright © {currentYear} </p>
    </footer>
}

export default Header;
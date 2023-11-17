import React from 'react';

function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer>Copyright © {year} Oshri Agronov</footer>
    );
}

export default Footer;
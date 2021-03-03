import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    html, body{
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
    }
    body {
        background-color: #FFFFFF;
        color: var(--primary-font);
        font-family: Arial, Helvetica, sans-serif;
        scroll-behavior: smooth;
    }

    :root{
        --primary-font: #31393C;
        --secondary-font: #FFFFFF;
        --primary-bg: #f1f1f1;
        --menu-bg: #131921;
    }
`;

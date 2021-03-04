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
        color: var(--secondary-font);
        background-color: var(--primary-bg);
        font-family: Arial, Helvetica, sans-serif;
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    :root{
        --primary-font: #31393C;
        --secondary-font: #FFFFFF;
        --primary-bg: #131618;
        --secondary-bg: 
    }
`;

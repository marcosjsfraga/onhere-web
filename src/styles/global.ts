import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #F7FAFC;
        color: #2D3748;
        -webkit-font-smoothing: antialiased
    }

    html, body, input, button {
        font-family: Heebo, Barlow, Inter, Roboto, serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`;

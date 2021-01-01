import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        text-align: center;
        background-color: ${(props) => props.theme.color.backgroundPrimary};
    }
`
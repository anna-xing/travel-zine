import styled from 'styled-components';

import { NAV_HEIGHT } from './Nav'

export const PageContainer = styled.main`
    position: relative;
    margin: auto;
    padding: 
        calc(${NAV_HEIGHT} + 12px) 
        ${(props) => props.theme.padding.pageHorizontal}px 
        ${(props) => props.theme.padding.pageVertical}px;
`

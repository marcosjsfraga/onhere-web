import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const NavIcon = styled(Link)<{ sidebar: boolean }>`
    font-size: 26px;
    color: #2D3748;
    margin-left: 1rem;
    height: 80px;

    position: fixed;
    top: 25px;
    left: ${props => (props.sidebar ? '-100%' : '0')};
`;

export const SidebarNav = styled.nav<{ sidebar: boolean }> `
    background: #fff;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    position: fixed;
    top: 77px;
    left: ${props => (props.sidebar ? '0' : '-100%')};
    transition: 250ms;
    z-index: 10;
`;

export const SidebarWrap = styled.div`
    width: 100%;
`;

export const NavIconClose = styled(Link)<{ sidebar: boolean }>`
    margin-left: 1rem;
    font-size: 28px;
    height: 80px;
    position: fixed;
    top: 25px;
    left: ${props => (props.sidebar ? '0' : '-100%')};
    color: #E53E3E;

`;




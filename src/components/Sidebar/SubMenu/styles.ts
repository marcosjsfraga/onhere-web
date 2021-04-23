import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px;
    list-style-type: none;
    height: 40px;
    text-decoration: none;
    color: #1A202C;

    &:hover {
        background: #E2E8F0;
        border-left: 4px solid #718096;
        cursor: pointer;
    }
`;

export const DropDownLink = styled(Link)`
    height: 30px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #1A202C;

    &:hover {
        background: #E2E8F0;
        border-left: 4px solid #718096;
        cursor: pointer;
    }
`;

export const SidebarLabel = styled.span`
    top: 0px;
    margin-left: 25px;
`;

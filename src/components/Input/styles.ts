import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFilled: boolean;
    isFocused: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #E2E8F0;
    border-radius: 10px;
    padding: 10px;
    width: 100%;

    border: 2px solid #CBD5E0;
    color: #666360;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${props =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `}

    ${props =>
        props.isFocused &&
        css`
            border-color: #90CDF4;
            color: #90CDF4;
        `}

    ${props =>
        props.isFilled &&
        css`
            color: #90CDF4;
        `}

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #2D3748;

        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;

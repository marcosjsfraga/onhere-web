import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
    background: #48BB78;
    color: #312e38;
    font-weight: 500;
    height: 40px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    width: 100%;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#48BB78')};
    }
`;

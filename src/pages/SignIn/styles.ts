import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

import sigInBackgroundImg from '../../assets/signin-backg.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;
    width: 100%;
    max-width: 800px;
`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 20px;
    border: 1px solid #CBD5E0;
    border-radius: 5px;

    animation: ${appearFromLeft} 1s;

    form {
        margin: 80px 0;
        width: 360px;
        text-align: center;


        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #3182CE;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#3182CE')};
            }
        }
    }

    > a {
        color: #3182CE;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#3182CE')};
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${sigInBackgroundImg}) no-repeat center;
    background-size: cover;
`;

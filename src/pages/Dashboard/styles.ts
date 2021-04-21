import styled from 'styled-components';

export const Container = styled.div`
    /* height: 100vh; */
    /* display: flex; */
    /* align-items: stretch; */
`;

export const Content = styled.main`
    max-width: 1120px;
    margin: 64px;
    display: flex;
`;

export const Section = styled.section`
    margin-top: 48px;

    > strong {
        color: #999591;
        font-size: 20px;
        line-height: 26px;
        border-bottom: 1px solid #3e3b47;
        display: block;
        padding-bottom: 16px;
        margin-bottom: 16px;
    }

    > p {
        color: #999591;
        font-style: italic;
    }
`;

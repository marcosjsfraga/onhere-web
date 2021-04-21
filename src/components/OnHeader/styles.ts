import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 10px 10px 10px 10px; /* T R B L */
    background: #fff;
    -webkit-box-shadow: 0 4px 6px -6px #A0AEC0;
    -moz-box-shadow: 0 4px 6px -6px #A0AEC0;
    box-shadow: 0 4px 6px -6px #A0AEC0;
`;

export const HeaderContent = styled.div`
    /* max-width: 1120px; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* Stylize 1º image */
    > img {
        height: 55px;
        margin-left: 50px;
    }

    button {
        margin-left: auto;
        background: transparent;
        border: 0;

        svg {
            color: #999591;
            width: 20px;
            height: 20px;
        }
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    /* align-items: center; */
    /* justify-content: space-around; */
    /* margin-left: 40px; */
    /* width: 650px; */

    svg {
        color: #000 !important;
        font-weight: bold;
        position: relative;
        top: 6px;
        margin-right: 25px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 80px;

    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;
    }

    span {
        color: #718096;
    }

    a {
        text-decoration: none;
        color: #44337A;

        &:hover {
            opacity: 0.8;
        }
    }
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

import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Content = styled.div`
    /* margin: 0 auto; */
    margin-top: 3px;

    /* background: #fff !important; */
    /* border-left: 1px solid #FC8181;
    border-right: 1px solid #FC8181; */

    min-width: 1120px;
    height: 100vh;
    padding-top: 10px;

    position: fixed;
    top: 77px;
    left: 50% - 1120px;

    table {
        width: 100%;
        border-spacing: 0 0.3rem;
        background: #fff;

        margin-top: 10px;

        th {
            color: var(--text-body);
            font-weight: 600;
            font-size: 1.1rem;
            padding: 0.5rem 2rem;
            text-align: left;
            line-height: 0.5rem;
        }

        td {
            padding: 0.8rem 1rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.credit {
                color: var(--green);
            }

            &.debit {
                color: var(--red);
            }
        }

    }
`;


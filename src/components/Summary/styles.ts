import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

type CardProps = {
    total?: number;
}

export const Card = styled.div<CardProps>`
    flex-basis: 130px;
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    @media (min-width: 769px) {
        flex-basis: 315px;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;        
    }

    ${(props) => props.total && `
        background: ${props.total > 0 ? 'var(--green)' : 'var(--red)'};
        color: #FFF;
    `
    }
}`
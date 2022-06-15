import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  @media (max-width: 480px) {
    display: flex;
    overflow: scroll;
    padding-right: 1rem;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: ${props => props.theme.colors.textBody};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${props => props.theme.colors.shape};
      color: ${props => props.theme.colors.textBody};
      
      &:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
        color: ${props => props.theme.colors.textTitle};
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
        color: ${props => props.theme.colors.textTitle};
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;

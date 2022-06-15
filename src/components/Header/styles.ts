import styled from "styled-components";

export const Container = styled.header`
  background: ${props => props.theme.colors.blue};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: ${props => props.theme.colors.blueLight};
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 480px) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      height: 2rem;
      width: 2rem;
      

      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

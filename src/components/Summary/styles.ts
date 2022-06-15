import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
  
  @media (max-width: 480px) {
    padding-bottom: .5rem;
    gap: 1rem;
    overflow: scroll;
    padding-right: 1rem;
  }

  div {
    background: ${props => props.theme.colors.shape};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: ${props => props.theme.colors.textTitle};

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

    &.highlight-background {
      background: ${props => props.theme.colors.green};
      color: #fff;
    }
  }
`;

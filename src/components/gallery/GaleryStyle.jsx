import styled from 'styled-components';

export const Container = styled.div`
  column-count: 2;
  column-width: 33%;
  width: 100%;
  max-width: 980px;
  padding: 0 12px;

  @media screen and (min-width: 768px) {
    column-count: 3;
    column-width: 33%;
  }
  @media screen and (min-width: 1024px) {
    margin: 0 auto;
  }
`;

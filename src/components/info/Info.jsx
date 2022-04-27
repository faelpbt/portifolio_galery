import Avatar from '../avatar/Avatar';
import styled from 'styled-components';

function Info() {
  return (
    <Container>
      <Avatar />
      <h1>Tania Rodriguês</h1>
      <p>Artista Plastica</p>
    </Container>
  );
}

export default Info;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
`;

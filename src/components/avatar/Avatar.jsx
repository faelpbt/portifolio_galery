import styled from 'styled-components';
import Perfil from '../../assets/perfil1.jpeg';

function Avatar() {
  return (
    <AvatarImg>
      <img src={Perfil} alt="foto-perfil" />
    </AvatarImg>
  );
}

export default Avatar;

const AvatarImg = styled.div`
  width: 90px;
  height: auto;
  

  img {
    width: 100%;
    border-radius: 9999px;
  }
`;

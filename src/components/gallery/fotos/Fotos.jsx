import styled from 'styled-components';

import Img1 from '../../../assets/img/img1.jpeg';
import Img2 from '../../../assets/img/img2.jpeg';
import Img3 from '../../../assets/img/img3.jpeg';
import Img4 from '../../../assets/img/img4.jpeg';
import Img5 from '../../../assets/img/img5.jpeg';
import Img6 from '../../../assets/img/img6.jpeg';
import Img7 from '../../../assets/img/img7.jpeg';
import Img8 from '../../../assets/img/img8.jpeg';
import Img9 from '../../../assets/img/img9.jpeg';
import Img10 from '../../../assets/img/img10.jpeg';
import Img11 from '../../../assets/img/img11.jpeg';
import Img12 from '../../../assets/img/img12.jpeg';
import Img13 from '../../../assets/img/img13.jpeg';
import Img14 from '../../../assets/img/img14.jpeg';
import Img15 from '../../../assets/img/img15.jpeg';
import Img16 from '../../../assets/img/img16.jpeg';
import Img17 from '../../../assets/img/img17.jpeg';
import Img18 from '../../../assets/img/img18.jpeg';
import Img19 from '../../../assets/img/img19.jpeg';
import Img20 from '../../../assets/img/img20.jpeg';
import Img21 from '../../../assets/img/img21.jpeg';
import Img22 from '../../../assets/img/img22.jpeg';
import Img23 from '../../../assets/img/img23.jpeg';
import Img24 from '../../../assets/img/img24.jpeg';
import Img25 from '../../../assets/img/img25.jpeg';
import Img26 from '../../../assets/img/img26.jpeg';
import Img27 from '../../../assets/img/img27.jpeg';
import Img28 from '../../../assets/img/img28.jpeg';

const imgFoto = [
  {
    id: 1,
    imgSrc: Img1,
  },
  {
    id: 2,
    imgSrc: Img2,
  },
  {
    id: 3,
    imgSrc: Img3,
  },
  {
    id: 4,
    imgSrc: Img4,
  },
  {
    id: 5,
    imgSrc: Img5,
  },
  {
    id: 6,
    imgSrc: Img6,
  },
  {
    id: 7,
    imgSrc: Img7,
  },
  {
    id: 8,
    imgSrc: Img8,
  },
  {
    id: 9,
    imgSrc: Img9,
  },
  {
    id: 10,
    imgSrc: Img10,
  },
  {
    id: 11,
    imgSrc: Img11,
  },
  {
    id: 12,
    imgSrc: Img12,
  },
  {
    id: 13,
    imgSrc: Img13,
  },
  {
    id: 14,
    imgSrc: Img14,
  },
  {
    id: 15,
    imgSrc: Img15,
  },
  {
    id: 16,
    imgSrc: Img16,
  },
  {
    id: 17,
    imgSrc: Img17,
  },
  {
    id: 18,
    imgSrc: Img18,
  },
  {
    id: 19,
    imgSrc: Img19,
  },
  {
    id: 20,
    imgSrc: Img20,
  },
  {
    id: 21,
    imgSrc: Img21,
  },
  {
    id: 22,
    imgSrc: Img22,
  },
  {
    id: 23,
    imgSrc: Img23,
  },
  {
    id: 24,
    imgSrc: Img24,
  },
  {
    id: 25,
    imgSrc: Img25,
  },
  {
    id: 26,
    imgSrc: Img26,
  },
  {
    id: 27,
    imgSrc: Img27,
  },
  {
    id: 28,
    imgSrc: Img28,
  },
]

function Fotos() {
  return (
    <>
      {imgFoto.map((item, index) => {
        return (
          <Container key={index.id}>
            <img src={item.imgSrc} />
          </Container>
        );
      })}
    </>
  );
}

export default Fotos;

const Container = styled.div`
  margin: 5px 0;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

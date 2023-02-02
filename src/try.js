import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/image/1.jpg'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Turkey</h3>
          <p>HotAir Baloon Festival</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/image/2.jfif'}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Moon across the mountains</h3>
          <p>Artsy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/image/3.jfif'}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Life</h3>
          <p>
            The New Beginning
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
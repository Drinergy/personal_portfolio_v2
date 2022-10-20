import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import colorSharp from "../assets/img/color-sharp.png";

export default function Skills() {
    const responsive ={
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },

            items: 5
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },

            items: 3
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },

            items: 2
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },

            items: 1
        }

    };


  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, leaque, accusantium <br /> nulla totam fuga voluptatem aspernatur,  ab odio nam ducimus at quis sequi magni expedita commodi. Animi eum fugit adipisci!</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt=""/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt=""/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt=""/>
                                <h5>JAVASCRIPT</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  )
}

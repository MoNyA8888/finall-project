import React, { Fragment } from "react";

import "./About.css";
import { Link } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";
import codegaza from "./codegaza.jpg";
import firstgaza from "./firstgaza.jpg";
import gaza2 from "./gaza2.jpg";
import gaza3 from "./gaza3.jpg";
import "react-image-lightbox/style.css";

import Lightbox from "react-image-lightbox";

const images = [codegaza, firstgaza, gaza2, gaza3];

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <div className="About">
            <h1 className="h1">About Us</h1>
            <p className="p">
              Code for Palestine was born in 2015 out of a desire to teach
              coding and entrepreneurial skills to some of the brightest high
              school students throughout the West Bank and Gaza Strip.{" "}
            </p>
            <p className="p">
              {" "}
              The organization funding the initiative, the PalTel Group
              Foundation [PGF], recognized that there weren’t enough students
              graduating from Palestinian universities in STEM fields, and those
              that were graduating lacked some of the critical skills needed to
              succeed in the private sector.{" "}
            </p>
            <p className="p">
              {" "}
              Most importantly, PGF saw an opportunity for a tech-driven startup
              scene to help tackle some of Palestine’s problems, and realized
              that a culture of entrepreneurship needed to be bred in order for
              a startup culture to blossom.Code for Palestine is a three
              year-long program, beginning the summer before 10th grade and
              concluding after 12th grade.{" "}
            </p>
            <p className="p">
              Each year has many in-person sessions but is kicked off by a
              two-week camp held during the summer.{" "}
            </p>
            <p className="p">
              {" "}
              Volunteer undergraduate instructors from Stanford University have
              served as the primary teachers during the two-week summer camp.{" "}
            </p>
            <p className="p">
              The overarching goals of Code for Palestine are to:{" "}
            </p>
            <p className="p">
              Drive interest in computer science and STEM careers{" "}
            </p>
            <p className="p">
              Build critical thinking and design thinking skills to complement
              coding education{" "}
            </p>
            <p className="p">
              Provide mentorship for promising Palestinian students, with an
              emphasis on including female and underprivileged students{" "}
            </p>
            <p className="p">
              Encourage entrepreneurship by teaching the skills needed to
              develop an idea{" "}
            </p>
            <p className="p">
              PGF believes that its support of Code for Palestine will
              ultimately lead to a more robust and sustainable technology sector
              in Palestine, driving up employment and wages
            </p>
            <Link to="/req">
              <button type="button" className="Button">
                Read more
              </button>
            </Link>
            <Link to="/box1">
              <button className="Button">
                <h4>back to Boxes bage</h4>
              </button>
            </Link>
            <button
              className="Button"
              onClick={() => this.setState({ isOpen: true })}
            >
              See Some Pictures
            </button>

            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length
                  })
                }
              />
            )}
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default About;

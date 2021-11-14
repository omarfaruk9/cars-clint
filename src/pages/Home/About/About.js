import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../../../images/about (1).jpg';
import img2 from '../../../images/about (2).jpg';
import img3 from '../../../images/about (3).jpg';
import AboutUS from '../AboutUS/AboutUS';

const abouts = [
    {
        "name": "Elizabeth",
        "job": "Senour Manngeer",
        "contact": "+09473738",
        "img": img1
    },
    {
        "name": "Devid Villa",
        "job": "Senour Manngeer",
        "contact": "+09473738",
        "img": img2

    },
    {
        "name": "Simons",
        "job": "Senour Manngeer",
        "contact": "+09473738",
        "img": img3
    }
];

const About = () => {
    return (
        <Container className="my-5">
            <div className="about-title text-center my-5">
                <h1 className="text-success">About Us</h1>
                <p>Finished in special Napier green pearl metallic, leather and Alcantara interior with ...</p>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                {
                    abouts.map(about => <AboutUS
                        about={about}
                        key={about.name}

                    ></AboutUS>)
                }
            </div>

        </Container>
    );
};

export default About;
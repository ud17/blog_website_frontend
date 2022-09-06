import React, { useState } from 'react';
import '../styles/Popular.css';
import {SplideSlide, Splide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import styled from 'styled-components';

function Popular() {

    const [popular, setPopular] = useState([{
        id: 1,
        title: 'First Blog',
        description: 'Description goes here'
    }, {
        id: 2,
        title: 'Second Blog',
        description: 'Description goes here'
    }]);

  return (
    <div className='container-div'>
        <h3>Most Viewed</h3>
        <Splide options={{
            perPage: 3,
            arrows: true,
            drag: "free",
            gap: "5rem"
        }}>
            {
                popular.map((blog) => {
                    return (
                        <SplideSlide key={blog.id}>
                            <div className='card'>
                                <Link to={"/blog/" + blog.id}>
                                    <p>{blog.title}</p>
                                    <img src={'https://image.shutterstock.com/image-photo/travel-photographer-equipment-on-rocky-600w-267670610.jpg'} alt="travel"/>
                                    <Gradient />
                                </Link>
                            </div>
                        </SplideSlide>
                    )
                })
            }
        </Splide>
    </div>
  )
}

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,0.5))
`

export default Popular;
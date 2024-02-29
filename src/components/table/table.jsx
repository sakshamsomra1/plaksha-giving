

import './table.css'


import React from 'react';
import logo from '../../images/logo-white.png'
import vedio from '../../video/1610621344founder1610621344.mp4'
import audio from "../../video/1610621344founder1610621344.ogg"

import photo from '../../video/teal.jpg'
import { useEffect } from 'react';
import { useRef } from 'react';


import OwlCarousel from 'react-owl-carousel'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Table = () => {


    const owlOptions = {
        loop: false,

        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    };





    // const videoRef = useRef();

    // useEffect(() => {
    //   const video = videoRef.current;

    //   const handlePlay = () => {
    //     video.controls = false;
    //   };

    //   // Add event listener for the 'play' event
    //   video.addEventListener('play', handlePlay);

    //   // Clean up the event listener when the component unmounts
    //   return () => {
    //     video.removeEventListener('play', handlePlay);
    //   };
    // }, []);




    return (

        <div>

            hellooo


            <table class="" >

                <th>

                    SubArea


                </th>

                <th>

                    Courses

                </th>


                <tr>

                    <td>

                        Core Computer Science

                    </td>

                    <td>

                        <ol>

                            <li>Computational Thinking</li>
                            <li>Programming and Data Structures</li>
                            <li>Computer Architecture</li>
                            <li> Design and Analysis of Algorithms </li>
                            <li> Theory of Computation </li>
                            <li> Program Analysis </li>
                            <li> Embedded Systems</li>
                            <li> Security/Privacy </li>
                            <li>Computing at Scale</li>
                            <li> Computer Graphics, Virtual Reality and Article Reality(VR/AR)</li>
                            <li>Networks</li>



                        </ol>

                    </td>


                </tr>














                <tr>

                    <td>

                        Artificial Intelligence, Machine Learning and Data Science

                    </td>

                    <td>

                        <ol>

                           <li>Introduction to AI</li>
                           <li>Introduction to Data Science</li>
                           <li> Data Mining </li>
                           <li>Machine learning and Pattern Recognition</li>
                           <li>Search in AI</li>
                           <li>Deep Learning, Computer vision and NLP</li>
                           <li>Knowledge Representation and Reasoning</li>
                           <li>Reinforcement Learning</li>
                           <li>Robotics</li>



                        </ol>

                    </td>


                </tr>








            </table>
        </div>
    );
};

export default Table;

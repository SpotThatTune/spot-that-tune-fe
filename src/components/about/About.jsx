/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.css';
import linkedin from '../../../public/assets/linkedin.png';
import github from '../../../public/assets/github.png';
import ron from '../../../public/assets/ron.jpg';
import edgar from '../../../public/assets/edgar.jpg';
import shawn from '../../../public/assets/ShawnCarpenter.jpg';
const About = () => {
  return (
    <div>
      <h1 className={styles.aboutTitle}>About us</h1>
      <section>
        <figure>
          <img src={ron}alt="Ron"></img>
          <figcaption>Ron</figcaption>
          <figcaption>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</figcaption>
          <div className={styles.profiles}>
            <a href="https://github.com/warrioryoko"target="_blank" rel="noreferrer"><img src={github}/></a>
            <a href="https://www.linkedin.com/in/ron-yonker/"target="_blank" rel="noreferrer"><img src={linkedin}/></a>
          </div>
        </figure>
        <figure>
          <img src={edgar} alt="Edgar"></img>
          <figcaption>Edgar</figcaption>
          <figcaption>
            Software Engineer
            <p>
              The first CD that I listened to was "Get Rich Or Die Tryin". To this day it is still one of my favorite albums. I am terrible with remembering song names and hope this will help me out. 
            </p>
            <div className={styles.profiles}>
              <a href="https://github.com/edgarpdx"target="_blank" rel="noreferrer"><img src={github}/></a>
              <a href="https://www.linkedin.com/in/edgarpdx/"target="_blank" rel="noreferrer"><img src={linkedin}/></a>
            </div>
          </figcaption>

          
        </figure>
        <figure>
          <img src={shawn} alt="Shawn"></img>
          <figcaption>Shawn</figcaption>
          <figcaption>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
          </figcaption>
          <div className={styles.profiles}>
            <a href="https://github.com/ShawnCarpenter"target="_blank" rel="noreferrer"><img src={github}/></a>
            <a href="https://www.linkedin.com/in/shawn-carpenter/"target="_blank" rel="noreferrer"><img src={linkedin}/></a>
          </div>
        </figure>
      </section>
      <Link className={styles.links}to="/" >
      Home
      </Link>
    </div>
  );
};

export default About;

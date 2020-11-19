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
      <h1 className={styles.aboutTitle}>ABOUT US</h1>
      <section>
        <figure>
          <img className={styles.profilepic} src={ron}alt="Ron"/>
          <figcaption className={styles.name}>RON YONKER</figcaption>
          <figcaption className={styles.jobtitle}>
            Software Engineer
            <p className={styles.content}>
            Ron is secretly a racoon whisperer in disguise. He is a 180 lb mass of caffeine and coding fury. He often goes into public without wearing a mask... but when he's forced to, he will wear a chicken wire mesh or a beekeeper's helmet over his head.
            </p>
          </figcaption>
          <div className={styles.profiles}>
            <a href="https://github.com/warrioryoko"target="_blank" rel="noreferrer">
              <img src={github}/>
            </a>
            <a href="https://www.linkedin.com/in/ron-yonker/"target="_blank" rel="noreferrer">
              <img src={linkedin}/>
            </a>
          </div>
        </figure>
        <figure>
          <img className={styles.profilepic} src={edgar} alt="Edgar"/>
          <figcaption className={styles.name}>EDGAR CUELLAR</figcaption>
          <figcaption className={styles.jobtitle}>
            Software Engineer
            <p className={styles.content}>
              The first CD that I listened to was "Get Rich Or Die Tryin". To this day it is still one of my favorite albums. I am terrible with remembering song names and hope this will help me out. 
            </p>
            <div className={styles.profiles}>
              <a href="https://github.com/edgarpdx"target="_blank" rel="noreferrer">
                <img src={github}/>
              </a>
              <a href="https://www.linkedin.com/in/edgarpdx/"target="_blank" rel="noreferrer">
                <img src={linkedin}/>
              </a>
            </div>
          </figcaption>

          
        </figure>
        <figure>
          <img className={styles.profilepic} src={shawn} alt="Shawn"/>
          <figcaption className={styles.name}>SHAWN CARPENTER</figcaption>
          <figcaption className={styles.jobtitle}>Software Engineer 
            <p className={styles.content}>
              The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children.
            </p>
          </figcaption>
          <div className={styles.profiles}>
            <a href="https://github.com/ShawnCarpenter"target="_blank" rel="noreferrer">
              <img src={github}/>
            </a>
            <a href="https://www.linkedin.com/in/shawn-carpenter/"target="_blank" rel="noreferrer">
              <img src={linkedin}/>
            </a>
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

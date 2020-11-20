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
              I am a professional hobbyist. I enjoy coding, photography and cooking. I have a passion for learning which has taken me to the coding world and I am here to stay.The first full CD that I listened to was "Get Rich Or Die Tryin". To this day it is still one of my favorite albums. I am terrible with remembering song names and hope this will help me out. 
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
            In Seventh grade I bought my first music, a tape of “Screaming for Vengeance” by Judas Priest . For the youngsters out there, tapes were a method of forcing you to buy your music again every few years. The first code I wrote was on an Apple II/e in the back of my seventh grade classroom.  I have been obsessed with both music and code ever since.
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

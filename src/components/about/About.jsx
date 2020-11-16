import React from 'react';
import FooterNav from '../footer/FooterNav';
import styles from './About.css';

const About = () => {
  return (
    <div>
      <h1 className={styles.aboutTitle}>About us</h1>
      <section>
        <figure>
          <img src="https://placekitten.com/g/300/400" alt="Ron"></img>
          <figcaption>Ron</figcaption>
          <figcaption>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</figcaption>
        </figure>
        <figure>
          <img src="https://placekitten.com/g/300/400" alt="Edgar"></img>
          <figcaption>Edgar</figcaption>
          <figcaption>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</figcaption>
        </figure>
        <figure>
          <img src="https://placekitten.com/g/300/400" alt="Shawn"></img>
          <figcaption>Shawn</figcaption>
          <figcaption>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
          </figcaption>
        </figure>
      </section>
      <FooterNav />
    </div>
  );
};

export default About;

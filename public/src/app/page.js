// app/page.tsx
export const metadata = {
  title: 'Gheals Tech – Digital Solutions',
  description: 'Digital agency delivering tech solutions',
  icons: {
    icon:'./favicon.ico'
  }
}

import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>

        <div className={[styles.heroContent,styles.mainHeroContent].join(' ')}>
          <h1>Gheals Tech </h1>
              <p>Innovative solutions for any challenges you face</p>
        </div>

        <div className={styles.heroContent}>
          <h1>Gheals Tech </h1>
          <p>Innovative solutions for any challenges you face</p>
          <button>Let’s Talk</button>
        </div>
      </section>

      {/* Insights Section */}
      <section className={styles.insightsSection}>
        <h2>Insights_</h2>
        <div className={styles.insightsGrid}>
          <div><h3>99%</h3><p>Satisfaction Rate</p></div>
          <div><h3>153+</h3><p>Happy Clients</p></div>
          <div><h3>120M</h3><p>Annual Revenue</p></div>
          <div><h3>67%</h3><p>Repeat Rate</p></div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.featuredProjects}>
        <h2>_Featured Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <Image src="/project1.jpg" alt="Project 1" width={400} height={300} className={styles.projectImage} />
            <h3>Concept Catalog Branding</h3>
            <p>Creative identity concept and visual branding for an app startup.</p>
          </div>
          <div className={styles.projectCard}>
            <Image src="/project2.jpg" alt="Project 2" width={400} height={300} className={styles.projectImage} />
            <h3>Morgan Kiosk Interior Branding</h3>
            <p>Rebranding with signage and kiosk support materials.</p>
          </div>
          <div className={styles.projectCard}>
            <Image src="/project3.jpg" alt="Project 3" width={400} height={300} className={styles.projectImage} />
            <h3>Website Pickup Desk</h3>
            <p>Brand experience design for seamless online pickup.</p>
          </div>
        </div>
      </section>

      {/* Forward Thinking Design */}
      <section className={styles.forwardDesign}>
        <Image src="/team-discussion.jpg" alt="Design Team" fill className={styles.overlayImage} />
        <div className={styles.overlayContent}>
          <h2>We believe in forward thinking design_</h2>
          <p>Innovative solutions for any challenges you face</p>
          <button>Let’s Talk</button>
        </div>
      </section>

      {/* Best Innovation */}
      <section className={styles.innovationSection}>
        <h2>Best Innovation_</h2>
        <div className={styles.innovationGrid}>
          <div><h3>Accelerated Growth</h3><p>Drive business results through targeted innovation.</p></div>
          <div><h3>Responsive Interfaces</h3><p>Design built to scale across every screen size.</p></div>
          <div><h3>Intuitive Platforms</h3><p>User-first interfaces that deliver exceptional experiences.</p></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <h2>Testimonials_</h2>
        <div className={styles.testimonialGrid}>
          <div>
            <p>“The professionalism and dedication from Gheals Tech has launched our digital presence.”</p>
            <h4>Prudence Orika</h4>
            <span>Chief Creative Officer</span>
          </div>
          <div>
            <p>“Best of the best! We couldn’t have scaled this fast without their strategic input.”</p>
            <h4>Rauf Olaniyi</h4>
            <span>Head of Product</span>
          </div>
          <div>
            <p>“Seamless design. Exceptional turnaround. Highly recommend for startups.”</p>
            <h4>Esther Uzoamaka</h4>
            <span>Digital Campaign Director</span>
          </div>
        </div>
      </section>

      {/* Consulting CTA */}
      <section className={styles.consultingCTA}>
        <h2>Book free Consulting</h2>
        <p>Let’s talk about your next big idea. No strings attached.</p>
        <a href="mailto:contact@ghealstech.com">contact@ghealstech.com</a>
      </section>

      
    </main>
  );
}

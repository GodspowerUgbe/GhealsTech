import styles from '../styles/footer.module.css';

export default function Footer(){
    return (
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <h3>Social</h3>
            <ul><li>LinkedIn</li><li>Twitter</li><li>Behance</li></ul>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul><li>Home</li><li>Services</li><li>Portfolio</li></ul>
          </div>
          <div>
            <h3>Help</h3>
            <ul><li>Privacy Policy</li><li>Terms</li></ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p>hello@ghealstech.com</p>
            <p>+234-000-000-0000</p>
          </div>
        </div>
        <div className={styles.footerNote}>
          &copy; {new Date().getFullYear()} Gheals Tech – All rights reserved.
        </div>
      </footer>
    );
};
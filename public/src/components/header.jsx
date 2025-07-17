import Link from 'next/link';
import Hamburger from './hamburger.jsx'
import styles from '../styles/header.module.css';

export default function Header({}){
    return (
        <header className={styles.header}>
            <nav></nav>
            <Hamburger />
            <Link href=''><button>nice</button></Link>
        </header>
    );
};
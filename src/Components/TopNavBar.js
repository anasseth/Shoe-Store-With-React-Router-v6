import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopNavBar.module.css';
import NikeOfficialLogo from '../Nike Official Logo 2.png';

function TopNavBar() {
    return (
        <div className={styles.TopBar}>
            <img src={NikeOfficialLogo} className={styles.OfficialLogo} />
            <div className={styles.LinkArea}>
                <Link to='/' className={styles.LinkButton}>New Release</Link>
                <Link to='/Menswear' className={styles.LinkButton}>Men's Wear</Link>
                <Link to='/Womenswear' className={styles.LinkButton}>Women's Wear</Link>
                <Link to='/Kidsfashion' className={styles.LinkButton}>Kids Fashion</Link>
            </div>
        </div>
    );
}
export default TopNavBar
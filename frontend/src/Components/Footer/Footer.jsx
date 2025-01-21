import { useNavigate } from 'react-router-dom'

import TikTokIcon from '@Icons/TikTokIcon'
import InstagramIcon from '@Icons/InstagramIcon'
import FacebookIcon from '@Icons/FacebookIcon'
import YouTubeIcon from '@Icons/YouTubeIcon'

import styles from './Footer.module.css'

const Footer = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerBar}>
                <div className={styles.footerLinks}>
                    <div
                        className={styles.footerLink}
                        onClick={() => navigate('/imprint')}
                    >
                        Imprint & Privacy Policy
                    </div>
                    ⦁
                    <div
                        className={styles.footerLink}
                        onClick={() => navigate('/contact')}
                    >
                        Contact
                    </div>
                </div>
                <div className={styles.footerText}>© Chef’s Kiss</div>
                <div className={styles.footerSocials}>
                    <div
                        className={styles.footerIcon}
                        onClick={() =>
                            window.open('https://www.youtube.com', '_blank')
                        }
                    >
                        <YouTubeIcon />
                    </div>
                    <div
                        className={styles.footerIcon}
                        onClick={() =>
                            window.open('https://www.tiktok.com', '_blank')
                        }
                    >
                        <TikTokIcon />
                    </div>
                    <div
                        className={styles.footerIcon}
                        onClick={() =>
                            window.open('https://www.instagram.com', '_blank')
                        }
                    >
                        <InstagramIcon />
                    </div>
                    <div
                        className={styles.footerIcon}
                        onClick={() =>
                            window.open('https://www.facebook.com', '_blank')
                        }
                    >
                        <FacebookIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

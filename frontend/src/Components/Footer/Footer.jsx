import { useNavigate } from 'react-router-dom'

import TikTokIcon from '@Icons/TikTokIcon'
import InstagramIcon from '@Icons/InstagramIcon'
import FacebookIcon from '@Icons/FacebookIcon'
import YouTubeIcon from '@Icons/YouTubeIcon'

import './Footer.css'

const Footer = () => {
    const navigate = useNavigate()

    return (
        <div className="footerContainer">
            <div className="footerBar">
                <div
                    className="footerLink"
                    onClick={() => navigate('/imprint')}
                >
                    Imprint & Privacy Policy
                </div>
                <div className="footerText">© Chef’s Kiss</div>
                <div className="footerSocials">
                    <div
                        className="footerIcon"
                        onClick={() =>
                            window.open('https://www.youtube.com', '_blank')
                        }
                    >
                        <YouTubeIcon />
                    </div>
                    <div
                        className="footerIcon"
                        onClick={() =>
                            window.open('https://www.tiktok.com', '_blank')
                        }
                    >
                        <TikTokIcon />
                    </div>
                    <div
                        className="footerIcon"
                        onClick={() =>
                            window.open('https://www.instagram.com', '_blank')
                        }
                    >
                        <InstagramIcon />
                    </div>
                    <div
                        className="footerIcon"
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

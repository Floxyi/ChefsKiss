import { useNavigate } from 'react-router-dom'

import TikTokIcon from '@Icons/TikTokIcon'
import InstagramIcon from '@Icons/InstagramIcon'
import FacebookIcon from '@Icons/FacebookIcon'
import YouTubeIcon from '@Icons/YouTubeIcon'

const Footer = () => {
    const navigate = useNavigate()

    const buildLink = (path, text) => {
        return (
            <div
                className="font-bold select-none hover:cursor-pointer text-base hover:underline"
                onClick={() => navigate(path)}
            >
                {text}
            </div>
        )
    }

    const buildIcon = (icon, link) => {
        return (
            <div className="cursor-pointer shrink-0 p-2" onClick={() => window.open(link, '_blank')}>
                {icon}
            </div>
        )
    }

    return (
        <div className="min-w-full">
            <div className="max-h-14 flex flex-row justify-between items-center bg-primary-light border-4 border-primary-dark rounded-full px-6 py-4 mx-5 mb-5">
                <div className="w-[340px] flex flex-row justify-start gap-4 items-center px-4 py-1 text-primary-dark select-none">
                    {buildLink('/imprint', 'Imprint & Privacy Policy')}⦁{buildLink('/contact', 'Contact')}
                </div>
                <div className="font-bold select-none text-base text-primary-dark">© Chef’s Kiss</div>
                <div className="w-[340px] flex flex-row justify-end gap-4 items-center text-primary-dark px-4 py-1">
                    {buildIcon(<YouTubeIcon />, 'https://www.youtube.com')}
                    {buildIcon(<TikTokIcon />, 'https://www.tiktok.com')}
                    {buildIcon(<InstagramIcon />, 'https://www.instagram.com')}
                    {buildIcon(<FacebookIcon />, 'https://www.facebook.com')}
                </div>
            </div>
        </div>
    )
}

export default Footer

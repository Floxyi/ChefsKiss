import { useNavigate } from 'react-router-dom'

import Button from '@Components/Button'
import PageContainer from '@Components/PageContainer'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <PageContainer>
            <div className="min-h-full text-center my-24 mx-12">
                <div className="text-7xl font-bold text-primary-dark animate-bounce">404</div>
                <div className="my-4 text-primary-dark text-2xl">Sorry, but we couldn't find this page :(</div>
                <div className="flex flex-row items-center justify-center">
                    <div className="max-w-fit">
                        <Button onClick={() => navigate('/')}>Go back to homepage</Button>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default HomePage

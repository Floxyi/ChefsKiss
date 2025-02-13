import Header from '@Components/Header'
import Footer from '@Components/Footer'

const PageContainer = ({ children }) => {
    return (
        <div className="flex flex-col max-h-screen min-h-screen">
            <Header />
            <div className="flex-1 flex justify-center mb-12 mx-20">
                <div className="bg-primary-light border-4 border-primary-dark rounded-[2.7rem] py-8 px-14 max-w-full min-w-full min-h-full">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PageContainer

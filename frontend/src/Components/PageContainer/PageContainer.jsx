import Header from '@Components/Header'
import Footer from '@Components/Footer'

const PageContainer = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen max-h-screen mr-[calc(-1*(100vw-100%))]">
            <Header />
            <div className="flex-1 flex justify-center mb-12 mx-56 min-h-fit">
                <div className="flex flex-col flex-1 bg-primary-light border-4 border-primary-dark rounded-[2rem] py-8 px-24 max-w-full min-w-full min-h-full">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PageContainer

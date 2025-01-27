import Button from '@Components/Button'
import PageContainer from '@Components/PageContainer'

const ContactPage = () => {
    return (
        <PageContainer>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl text-primary-dark font-semibold mb-8 text-center select-none">
                    Contact Us
                </h1>
                <p className="text-primary-dark text-lg font-bold mb-8 text-center select-none">
                    If you have any questions, suggestions, or need assistance,
                    feel free to contact us using the details below.
                </p>
                <form className="flex flex-col gap-3 w-full max-w-lg">
                    <label
                        className="text-xl text-primary-dark font-bold select-none mt-3"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="border-2 text-primary-dark font-bold placeholder:font-normal placeholder:text-primary-dark border-primary-dark bg-primary-light p-2 rounded-md focus:outline-none"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                    />

                    <label
                        className="text-xl text-primary-dark font-bold select-none mt-3"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="border-2 text-primary-dark font-bold placeholder:font-normal placeholder:text-primary-dark border-primary-dark bg-primary-light p-2 rounded-md focus:outline-none"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                    />

                    <label
                        className="text-xl text-primary-dark font-bold select-none mt-3"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        className="border-2 text-primary-dark placeholder:text-primary-dark border-primary-dark bg-primary-light p-2 rounded-md focus:outline-none resize-none"
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                    ></textarea>

                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </PageContainer>
    )
}

export default ContactPage

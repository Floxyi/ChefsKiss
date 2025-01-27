import { useState } from 'react'

import Button from '@Components/Button'
import PageContainer from '@Components/PageContainer'
import ContactField from '@Components/ContactField'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        setFormData({ name: '', email: '', message: '' })
    }

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
                <form
                    className="flex flex-col gap-4 w-full max-w-lg"
                    onSubmit={handleSubmit}
                >
                    <ContactField
                        label="Name"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <ContactField
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <ContactField
                        label="Message"
                        type="textarea"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <div className="flex justify-center mt-4">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </PageContainer>
    )
}

export default ContactPage

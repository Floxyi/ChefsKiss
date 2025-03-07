import PageContainer from '@Components/PageContainer'
import ImprintText from '@Components/ImprintText'
import Title from '@Components/Title'

import privacySections from './imprintData.js'

const ImprintPage = () => (
    <PageContainer>
        <Title title="Imprint" margin />
        <ImprintText>
            <strong>Company Name:</strong> ExampleTech Solutions GmbH
            <br />
            <strong>Address:</strong> Innovation Street 42, 10115 Berlin, Germany
            <br />
            <strong>Managing Director:</strong> John Doe
            <br />
            <strong>Commercial Register:</strong> HRB 123456, Amtsgericht Berlin
            <br />
            <strong>VAT ID:</strong> DE123456789
        </ImprintText>

        <div className="min-h-6" />

        <h1 className="text-3xl text-primary-dark font-semibold select-none mb-4 mt-6">Privacy Policy</h1>
        {privacySections.map((section, index) => (
            <article key={index}>
                <h2 className="text-xl text-primary-dark font-bold select-none mt-3">{section.title}</h2>
                <ImprintText>{section.content}</ImprintText>
            </article>
        ))}
    </PageContainer>
)

export default ImprintPage

import PageContainer from '@Components/PageContainer'
import Title from '@Components/Title'

import alice_johnson from '@Images/alice_johnson.jpeg'
import mark_smith from '@Images/mark_smith.jpeg'
import sophia_lee from '@Images/sophia_lee.jpeg'

const teamMembers = [
    {
        name: 'Alice Johnson',
        role: 'Head Chef & Recipe Creator',
        image: alice_johnson,
        bio: 'Alice brings years of experience in gourmet cooking and loves crafting delicious recipes for everyone to enjoy.'
    },
    {
        name: 'Sophia Lee',
        role: 'Food Photographer',
        image: sophia_lee,
        bio: 'Sophia captures the beauty of every dish, making sure that each recipe looks as good as it tastes.'
    },
    {
        name: 'Mark Smith',
        role: 'Full Stack Developer',
        image: mark_smith,
        bio: 'Mark ensures the website runs smoothly, handling everything from backend logic to frontend design.'
    }
]

const AboutPage = () => (
    <PageContainer>
        <Title title="About Us" />
        <div className="text-center max-w-3xl mx-auto mt-6">
            <p className="text-lg text-primary-dark select-none">
                Welcome to <span className="font-semibold">ChefsKiss</span>, your go-to platform for discovering and
                sharing incredible recipes. Our passionate team of food lovers, developers, and photographers work
                together to create an amazing cooking experience for you.
            </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 select-none">
            {teamMembers.map((member, index) => (
                <div
                    key={index}
                    className="bg-primary-background border-[3px] border-primary-dark p-6 rounded-2xl shadow-md text-center text-primary-dark hover:scale-105"
                >
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-primary-dark"
                    />
                    <h3 className="text-2xl font-semibold">{member.name}</h3>
                    <p className="text-lg mb-6">{member.role}</p>
                    <p className="text-lg">{member.bio}</p>
                </div>
            ))}
        </div>
    </PageContainer>
)

export default AboutPage

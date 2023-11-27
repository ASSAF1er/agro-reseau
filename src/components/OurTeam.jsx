import defaut_profile from '../assets/default_profile.jpg'
import team_bg from '../assets/team_bg.jpg'
function OurTeam() {
    const team = [
        {
            name: 'Jordan FOSSI',
            role: 'Group Lead / Backend Lead',
            stack: 'Django, Django REST, Python, HTML, CSS, Bootstrap',
            photo: ''
        },
        {
            name: 'Beral ASSONFACK',
            role: 'Frontend Lead',
            stack: 'ReactJS, NodeJS, Express, Tailwind, Python, HTML, CSS, JS',
            photo: ''
        },
        {
            name: 'Divine CHUDJO',
            role: 'Backend Developer',
            stack: 'Django, Python, HTML, CSS',
            photo: ''
        },
        {
            name: 'Merlin FEDIM',
            role: 'Frontend Developer',
            stack: 'React, Bootstrap, Python, HTML, CSS, JS ',
            photo: ''
        },
        {
            name: 'Ruth POSSEU',
            role: 'Frontend developer',
            stack: 'React, Java, HTML, CSS, JS',
            photo: ''
        }
    ]
    document.documentElement.scrollTop = 0
    return (
        <div className=" pb-20 bg-gray-200 w-full">
            <div
                style={{ backgroundImage: `url(${team_bg})` }}
                className="flex flex-col bg-no-repeat bg-cover justify-center items-center w-full  "
            >
                <div className="flex flex-col items-center py-[100px] text-white backdrop-opacity-90 backdrop-invert-0 w-full bg-[#166534]/70 ">
                    <p className="text-center font-bold text-[60px] ">Notre équipe</p>
                    <p className="text-center text-[20px] font-bold w-[70%] ">
                        Nous sommes un groupe d'étudiants dynamiques de la Faculté des Sciences de l'Université de
                        Yaoundé 1 pasionnés de l'informatique{' '}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center  mt-20 flex-col gap-10">
                <div className="flex flex-row flex-wrap gap-10 justify-center">
                    {team.map((member) => (
                        <Card member={member} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurTeam

function Card({ member }) {
    return (
        <div className="flex flex-col gap-2 w-[300px] shadow-md rounded-2xl text-center items-center justify-center px-5 py-10 bg-white">
            <div>
                {' '}
                <img
                    src={defaut_profile}
                    alt=""
                    className="h-[230px] w-[230px] object-cover rounded-full bg-black"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col gap-1 mt-3">
                <p className="font-bold text-[20px]">{member.name}</p>
                <p className="text-green-700 font-semibold">{member.role}</p>
                <p className="text-gray-500">{member.stack}</p>
            </div>
        </div>
    )
}

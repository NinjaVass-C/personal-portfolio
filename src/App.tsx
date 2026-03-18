import {Navbar} from "./components/Navbar.tsx";
import {Introduction} from "./components/Introduction.tsx";
import {AboutCard} from "./components/AboutCard.tsx";
import {About} from "./components/About.tsx";
import {ExperienceCard} from "./components/ExperienceCard.tsx";
import {ContactInfo} from "./components/ContactInfo.tsx";
import {Icon} from '@iconify/react';

function App() {
    return (
        <body className='bg-fixed'
              style={{backgroundImage: 'linear-gradient(7deg,rgba(13, 4, 110, 1) 0%, rgba(71, 178, 174, 1) 77%, rgba(100, 214, 237, 1) 100%'}}>
        <div className={'flex flex-col h-screen py-5'}>
            <Navbar/>
            <Introduction/>
            <div className='flex m-16 items-center justify-between relative'></div>
        </div>
        <div id='about' className={'flex flex-col h-screen py-5'}>
            <h2 className='text-6xl font-bold my-8 justify-center flex text-gray-50 transition-transform duration-200 ease-out hover:scale-105'>About Me</h2>
            <About/>
            <div className='grid grid-cols-2 gap-6 p-5 grow items-center'>
                <AboutCard
                    inputText={'Outside of programming, you can typically find me listening to all sorts of metal music, playing various video games, and watching Esports like CS2 and Valorant. Fun fact: I play Clone Hero, a modern clone of the Guitar Hero games, and collect the instruments from various games!'}
                    inputTitle={'Hobbies'}/>
                <AboutCard
                    inputText={'I started learning about software development during high school, learning basic html and css in Graphic Design. As I continued, I started using Java in Greenfoot and Netbeans, learning basic fundamentals like OOP and recursion. This turned to a passion for software development, and the direction for my future!'}
                    inputTitle={'How I Started'}/>
                <AboutCard
                    inputText={'As I mentioned, I am a big fan of metal music. I enjoy metal songs from all generations, but my favourites are metalcore and deathcore influenced by the 2000s to 2010s. Some of my favourite bands right now are Like Moths to Flames, 156/Silence, and Protest the Hero. '}
                    inputTitle={'Music'}/>
                <AboutCard
                    inputText={'Being fairly new to the industry, my main goal is to improve my fundamental skills as much as possible, while keeping up to date on emerging technology. Ideally, I want to work in full stack web development, but still want to try as many different fields as possible. '}
                    inputTitle={'Industry Goals'}/>
            </div>
            <div className='flex m-16 items-center justify-between relative'></div>
        </div>
        <div id='experience' className={'flex flex-col h-screen py-5'}>
            <h2 className='text-6xl font-bold my-8 justify-center flex text-gray-50'>My Experience</h2>
            <div className='grid grid-cols-1 gap-6 p-5 grow items-center'>
                <ExperienceCard inputTitle={{
                    company: 'Elentra',
                    role: 'Student Software Developer',
                    techStack: '(PHP/Laravel, Javascript, MySQL)',
                    url: 'https://elentra.com/'
                }} inputText={[
                    '- Successfully intergrated into two development teams, contributing to their respective responsibilities within their domains (Domain Driven Development).',
                    '- Collaborate with QA and customer support staff to investigate and resolve customer-reported issues.',
                    '- Paired with multiple developers to resolve high-priority issues, ensuring efficient and correct fixes were deployed and communicated to the customer.',
                    '- Delivering and shipping bug fixes and feature requests across Jira Tickets to production environments.',
                    '- Participated in company-wide stabilization and performance effort, contributing security and efficiency fixes to legacy codebase.'
                ]}></ExperienceCard>
                <ExperienceCard inputTitle={{
                    company: 'HackSLC Project: Dropadox',
                    role: 'Developer',
                    techStack: '(Nuxt.js, SQLite, Tailwind, Drizzle ORM, ShadCN)',
                    url: 'https://github.com/Dropadox/dropadox'
                }} inputText={[
                    '- As a 4 person development team, we created a file uploading platform, allowing users to create accounts and manage their own uploads ',
                    '- Took responsibility of user authentication/account creation, utilizing JWT and browser cookies to manage user logins and account creation.',
                    '- Discussed tradeoffs and design decisions needed in order to get project to working state before time limit.',
                    '- Led presentation of final product to audience and judges, explaining design decisions, tech stack, and potential improvements/use cases. '
                ]}>

                </ExperienceCard>
                <ExperienceCard inputTitle={{
                    company: 'Other Experience/Personal Projects',
                    role: 'Developer',
                    techStack: '',
                    url: 'https://github.com/NinjaVass-C'
                }}
                                inputText={['- Outside of official projects, I am actively learning different languages and frameworks to further my knowledge. My main focus has been with Java Springboot, React, and Node.js']}>

                </ExperienceCard>
            </div>
            <div className='flex m-16 items-center justify-between relative'></div>
        </div>
        <div id='contact' className={'flex flex-col justify-center mt-16 py-5'}>
            <h2 className='text-6xl font-bold my-8 justify-center flex text-gray-50'>Contact Me</h2>
            <ContactInfo/>
            <div className='flex gap-20 py-5 items-center justify-center'>
                <a href={'mailto:connorvassinfo@gmail.com'}
                   className={'justify-center items-center flex bg-blue-200/90 rounded-2xl p-2 shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1'}>
                    <Icon icon="ic:outline-email" width="48" height="48"/> Email
                </a>
                <a href={'mailto:connorvassinfo@gmail.com'}
                   className={'justify-center items-center flex bg-blue-200/90 rounded-2xl p-2 shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1'}>
                    <Icon icon="mdi:linkedin" width="48" height="48"/> LinkedIn
                </a>
                <a href={'mailto:connorvassinfo@gmail.com'}
                   className={'justify-center items-center flex bg-blue-200/90 rounded-2xl p-2 shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1'}>
                    <Icon icon="mdi:github" width="48" height="48"/> Github
                </a>
            </div>
            <div className='flex m-16 items-center justify-between relative'></div>
        </div>
        </body>
    )
}

export default App

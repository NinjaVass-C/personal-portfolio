import {Navbar} from "./components/Navbar.tsx";
import {Introduction} from "./components/Introduction.tsx";
import {AboutCard} from "./components/AboutCard.tsx";
import {About} from "./components/About.tsx";

function App() {
  return (
    <body className='bg-fixed' style={{backgroundImage: 'linear-gradient(7deg,rgba(13, 4, 110, 1) 0%, rgba(71, 178, 174, 1) 77%, rgba(100, 214, 237, 1) 100%'}}>
      <div className={'flex flex-col h-screen py-5'} >
        <Navbar />
          <Introduction />
          <div className='flex m-16 items-center justify-between relative'></div>
      </div>
      <div id='about' className={'flex flex-col h-screen py-5'} >
        <h2 className='text-6xl font-bold my-8 justify-center flex text-gray-50'>About Me</h2>
        <About />
        <div className='grid grid-cols-1 gap-6 p-5 '>
          <AboutCard inputText={'Outside of programming, you can typically find me listening to all sorts of metal music, playing various video games, and watching Esports like CS2 and Valorant.'} inputTitle={'Hobbies'}/>
          <AboutCard inputText={'The first language I ever learned was Java, specifically through greenfoot and netbeans. I still use the language to this day, using both Java and Spring Boot for personal projects.'} inputTitle={'First language'}/>
          <AboutCard inputText={'As I mentioned, I am a big fan of metal music, both old and new, to the point where I myself starting learning how to become a metal vocalist. Some of my favourite bands are Like Moths to Flames, 156/Silence, and Protest the Hero.'} inputTitle={'Music'}/>
          <AboutCard inputText={'Being fairly new to the industry, my main goal is to improve my fundamental skills as much as possible, while keeping up to date on emerging technology. Ideally, I want to work in full stack web development, but still want to try as many different fields as possible'} inputTitle={'Industry Goals'}/>
        </div>
      </div>
      <div id='experience' className={'flex flex-col h-screen py-5'} >
        <h2 className='text-6xl font-bold my-8 justify-center flex text-gray-50'>My Experience</h2>
      </div>
    </body>
  )
}
export default App

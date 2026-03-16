import {Navbar} from "./components/Navbar.tsx";
import {Introduction} from "./components/Introduction.tsx";

function App() {
  return (
    <body className='bg-fixed' style={{background: 'linear-gradient(7deg,rgba(2, 0, 36, 1) 0%, rgba(11, 11, 54, 1) 35%, rgba(100, 214, 237, 1) 100%)'}}>
    <div className={'flex flex-col h-screen py-5'} >
      <Navbar />
        <Introduction />
        <div className='flex m-16 items-center justify-between relative'>

        </div>
    </div>
    <div className={'flex flex-col  min-h-svh pt-5'}>
    </div>
    </body>
  )
}
export default App

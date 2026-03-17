import '../index.css'

export function Navbar() {
    return (
        <nav className="bg-neutral-primary z-20 md:w-6/12 border-default bg-blue-950/40 rounded-md mx-auto ">
            <h1 className='justify-center mx-auto flex pt-1 font-semibold text-5xl font-sans text-gray-50'>Connor Vass</h1>
            <div className='flex flex-wrap justify-center items-center mx-auto md:p-4 content-center'>
                <ul className='font-medium flex flex-col items-center p-1 md:flex-row md:p-2 mt-2 md:mt-0 md:gap-20'>
                    <li className='my-5 md:my-0'>
                        <a href={'#about'} className="py-2 px-6 bg-blue-900 rounded-2xl text-gray-50 hover:bg-blue-300">About Me</a>
                    </li>
                    <li className='my-5 md:my-0'>
                        <a href={'#experience'} className="py-2 px-6 bg-blue-900 rounded-2xl text-gray-50 hover:bg-blue-300">My Experience</a>
                    </li>
                    <li className='my-5 md:my-0'>
                        <a href={'#contact'} className="py-2 px-6 bg-blue-900 rounded-2xl text-gray-50 hover:bg-blue-300">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


// <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
//     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo"/>
//             <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Flowbite</span>
//         </a>
//         <button data-collapse-toggle="navbar-default" type="button"
//                 className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
//                 aria-controls="navbar-default" aria-expanded="false">
//             <span className="sr-only">Open main menu</span>
//             <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
//                  fill="none" viewBox="0 0 24 24">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
//             </svg>
//         </button>
//         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//             <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
//                 <li>
//                     <a href="#"
//                        className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
//                        aria-current="page">Home</a>
//                 </li>
//                 <li>
//                     <a href="#"
//                        className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
//                 </li>
//                 <li>
//                     <a href="#"
//                        className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</a>
//                 </li>
//                 <li>
//                     <a href="#"
//                        className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Pricing</a>
//                 </li>
//                 <li>
//                     <a href="#"
//                        className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>

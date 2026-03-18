import '../index.css'

export function Navbar() {
    return (
        <nav className="bg-neutral-primary z-20 md:w-6/12 border-default bg-blue-950/40 rounded-md mx-auto shadow-xl">
            <h1 className='justify-center text-center mx-auto flex p-4 font-semibold text-5xl font-sans text-gray-50'>Connor
                Vass</h1>
            <div className='flex justify-center w-full lg:p-4 '>
                <ul className='font-medium flex flex-col lg:flex-row items-center gap-8 my-5'>
                    <li className='shadow-xl duration-300 ease-in-out hover:-translate-y-1'>
                        <a href={'#about'} className="py-2 px-6 bg-blue-900 rounded-2xl text-gray-50 hover:bg-blue-300">About
                            Me
                        </a>
                    </li>
                    <li className='shadow-xl duration-300 ease-in-out hover:-translate-y-1'>
                        <a href={'#experience'}
                           className="py-2 px-6 bg-blue-900 rounded-2xl text-gray-50 hover:bg-blue-300">My
                            Experience</a>
                    </li>
                    <li className='shadow-xl duration-300 ease-in-out hover:-translate-y-1'>
                        <a href={'#contact'}
                           className="py-2 px-6 bg-blue-900 rounded-2xl text-gray-50 hover:bg-blue-300">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


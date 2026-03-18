import '../index.css'

export function Navbar() {
    return (
        <nav className="bg-neutral-primary z-20 md:w-6/12 border-default bg-blue-950/40 rounded-md mx-auto ">
            <h1 className='justify-center mx-auto flex pt-1 font-semibold text-5xl font-sans text-gray-50'>Connor
                Vass</h1>
            <div className='flex flex-wrap justify-center items-center mx-auto md:p-4 content-center'>
                <ul className='font-medium flex flex-col items-center p-1 md:flex-row md:p-2 mt-2 md:mt-0 md:gap-20'>
                    <li className='my-5 md:my-0'>
                        <a href={'#about'} className="py-2 px-6 bg-blue-900 rounded-2xl text-gray-50 hover:bg-blue-300">About
                            Me</a>
                    </li>
                    <li className='my-5 md:my-0'>
                        <a href={'#experience'}
                           className="py-2 px-6 bg-blue-900 rounded-2xl text-gray-50 hover:bg-blue-300">My
                            Experience</a>
                    </li>
                    <li className='my-5 md:my-0'>
                        <a href={'#contact'}
                           className="py-2 px-6 bg-blue-900 rounded-2xl text-gray-50 hover:bg-blue-300">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


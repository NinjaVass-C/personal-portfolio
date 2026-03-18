export function Introduction() {
    return (
        <div className='flex items-center p-20 rounded-sm  h-full grow justify-center gap-8'>
            <div
                className='flex text-2xl flex-col items-center p-12 text-gray-50 rounded-2xl border-2 border-blue-300/60 bg-blue-300/10'>
                <h2 className='text-6xl font-bold mb-4'>Connor Vass</h2>
                <p>I am a third year Computer Programming and Analysis Student,</p>
                <p>and I am currently working as a <span className='font-bold'>Student Software Engineer</span> at <a
                    className={'text-blue-200'} href={'https://elentra.com/'}>Elentra</a>.</p>
            </div>

        </div>

    )
}
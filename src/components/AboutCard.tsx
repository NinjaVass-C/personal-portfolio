export function AboutCard({inputText, inputTitle}: { inputText: string, inputTitle: string }) {
    return (
        <div className={'p-4 bg-blue-300/30 border border-blue-950 rounded-3xl shadow-2xl duration-200 ease-out hover:scale-105 max-h-32 overflow-y-auto md:max-h-none md:overflow-visible'}>
            <h2 className='text-2xl font-bold text-center text-gray-200 text-shadow-blue-900 text-shadow-2xs'>
                {inputTitle}
            </h2>
            <p className={'text-l lg:text-xl text-gray-50 text-center text-shadow-blue-900 text-shadow-2xs'}>
                {inputText}
            </p>
        </div>
    )
}
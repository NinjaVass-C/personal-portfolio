export function AboutCard({inputText, inputTitle}: { inputText: string, inputTitle: string }) {
    return (
        <div className={'p-4 bg-blue-300/30 rounded-3xl shadow-2xl duration-200 ease-out hover:scale-105 max-h-32 overflow-y-auto md:max-h-none md:overflow-visible'}>
            <h2 className='text-2xl font-bold justify-center flex text-gray-200'>
                {inputTitle}
            </h2>
            <p className={'text-l lg:text-xl text-gray-50 text-center'}>
                {inputText}
            </p>
        </div>
    )
}
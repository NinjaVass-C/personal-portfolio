export function AboutCard({inputText, inputTitle}: { inputText: string, inputTitle: string }) {
    return (
        <div className={'w-1/2 bg-blue-300/30 justify-center mx-auto rounded-3xl p-4 '}>
            <h2 className='text-2xl font-bold justify-center flex text-gray-200'>
                {inputTitle}
            </h2>
            <p className={'flex text-xl items-center text-gray-50 text-center'}>
                {inputText}
            </p>
        </div>
    )
}
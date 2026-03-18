export type Title = {
    company?: string;
    url?: string;
    techStack?: string;
    role?: string;
}


export function ExperienceCard({inputText, inputTitle}: { inputText: string[], inputTitle: Title }) {
    return (
        <div className={'w-8/12 bg-blue-300/30 justify-center mx-auto rounded-2xl p-4 shadow-2xl duration-200 ease-out hover:scale-105 max-h-64 xl:max-h-96 overflow-y-auto'}>
            <h2 className='text-2xl font-bold text-gray-200 text-center'>
                <a className='text-blue-200' href={inputTitle.url}>{inputTitle.company}</a>&nbsp;- {inputTitle.role} {inputTitle.techStack}
            </h2>
            {inputText.map((input) => (
                <p className={'flex text-xl items-center text-gray-50 px-10 py-1'}>
                    {input}
                </p>
            ))}
        </div>
    )
}
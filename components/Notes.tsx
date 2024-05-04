const Notes = ({content}:{
    content: string
}) => {

    return (
        <div className="max-w-sm space-y-3 my-6">
            <textarea className="py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows={3} placeholder="This is a textarea placeholder" readOnly value={content}></textarea>
        </div>
    )
}

export default Notes;
import Image from "next/image"

const CourseCard = () => {
    return (
        <div>
            <div className="flex gap-5 w-[300px] mx-auto">
                <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70" href="#">
                <Image 
                width={300}
                height={300}
                className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description" />
                <div className="p-4 md:p-5 h-auto">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    Add Card title
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400">
                    Click to add some courses to start learning from your personalized platform.
                    </p>
                </div>
                </a>
            </div>
        </div>
    )
}

export default CourseCard;
import CourseCard from "@/components/CourseCard";
import Image from "next/image";

const LearnPage = () => {
    return (
        <div className="w-full px-32 grid grid-cols-3 gap-14 py-16 items-center">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </div>
    )
}

export default LearnPage;
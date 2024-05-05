"use client";

import CourseCard from "@/components/CourseCard";
import ProtectedRoute from "@/components/ProtectedRoute";

const LearnPage = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-[90vh] bg-sky-100">
        <h2 className="text-center text-[27px] font-bold text-black-300/50 pt-5">
          My Courses
        </h2>
        <div className="grid grid-cols-4 p-7 pt-10">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default LearnPage;

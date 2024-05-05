"use client";

import CourseCard from "@/components/CourseCard";
import ProtectedRoute from "@/components/ProtectedRoute";
import Image from "next/image";

const LearnPage = () => {
  return (
    <ProtectedRoute>
      <div className="w-full px-32 grid grid-cols-3 gap-14 py-16 items-center">
        <CourseCard />
      </div>
    </ProtectedRoute>
  );
};

export default LearnPage;

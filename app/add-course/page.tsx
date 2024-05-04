"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

const AddCourse = () => {
  return (
    <ProtectedRoute>
      <div className="h-[90vh]">
        <div className="flex flex-col items-center border h-[90vh] justify-center">
          <div className="space-y-3">
            <textarea
              className="py-3 px-4 block w-[50vw] bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              rows={9}
              placeholder=""
            ></textarea>
          </div>
          <p className="text-center m-10">OR</p>
          <form className="border-2 border-black-600 p-14">
            <label className="block">
              <span className="sr-only">Upload course material</span>
              <input
                type="file"
                className="block w-full text-sm text-gray-500
                        file:me-4 file:py-2 file:px-4
                        file:rounded-lg file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-600 file:text-white
                        hover:file:bg-blue-700
                        file:disabled:opacity-50 file:disabled:pointer-events-none
                        dark:text-neutral-500
                        dark:file:bg-blue-500
                        dark:hover:file:bg-blue-400
                        "
                accept=".doc,.docx,.pdf"
              />
            </label>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AddCourse;

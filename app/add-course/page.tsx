"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

const AddCourse = () => {
  return (
    <ProtectedRoute>
      <div className="h-[90vh]">
        <div className="flex flex-col items-center border h-[90vh] justify-center">
          <div className="space-y-5">
            <textarea
              className="py-3 px-4 block w-[50vw] bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              rows={9}
              placeholder="
                Describe the topic or question you want to learn about.
                          "
            ></textarea>
            <button
              className="
                            w-fit py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-500 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800
                          "
            >
              Submit
            </button>
          </div>
          <p className="text-center m-10">OR</p>
          <form className="border-2 border-black-600 p-14 space-y-5">
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
            <button
              className="
                            w-fit py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-500 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800
                          "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AddCourse;

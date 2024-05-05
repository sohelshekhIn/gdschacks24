export default function Home() {
  return (
    <>
      <div className="p-5"></div>
      <div className="h-[100vh] overflow-hidden bg-cover bg-center bg-[url('https://img.freepik.com/premium-photo/education-concept-3d-hat-books-blue-background-modern-flat-design-isometric-concept-education-back-school_387680-17.jpg')]">
        <div className="max-w-3xl text-left absolute top-[40%] left-[10%] pl-5">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white tracking-wide">
            Empower Your Learning Journey:
            <span className="text-blue-600 leading-loose">
              Elevating Education
            </span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
            with AI-Enhanced Note-Taking.
          </p>
          <div>
            <a href="#">
              <button className="mt-7 p-4 w-[20%] rounded-md font-bold text-[24px] bg-blue-600 text-white">
                Learn
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

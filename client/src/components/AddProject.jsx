const AddProject = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center md:p-4">
      <div className="bg-gray-700 sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-1/2 p-4 rounded-lg ">
        <h1 className="text-3xl text-gray-300 font-bold text-center mb-8">
          PROJECT TRACKER
        </h1>
        <div className="bg-white rounded-lg p-3 md:px-1">
          <h1 className="text-black text-2xl font-bold text-center mb-4">
            Add Project
          </h1>
          <form className="sm:p-3">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Class
              </label>
              <select
                className="bg-blue-300 text-blue-800 p-2 rounded w-full"
                name="class"
              >
                <option value="class1">Cohort 1</option>
                <option value="class2">Cohort 2</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Project Type
              </label>
              <select
                className="bg-blue-300 text-blue-800 p-2 rounded w-full"
                name="projectType"
              >
                <option value="Fullstack">Fullstack</option>
                <option value="Android">Android</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Project Name
              </label>
              <input
                className="rounded bg-blue-300 border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 py-2 px-4 w-full"
                type="text"
                name="projectName"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Project Description
              </label>
              <textarea
                className="rounded bg-blue-300 border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 py-2 px-4 w-full"
                name="projectDescription"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Team Leader
              </label>
              <select
                className="bg-blue-300 text-blue-800 p-2 rounded w-full"
                name="teamLeader"
              >
                <option value="teamLeader1">Team Leader 1</option>
                <option value="teamLeader2">Team Leader 2</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Team Members
              </label>
              <input
                className="rounded bg-blue-300 border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 py-2 px-4 w-full"
                type="text"
                name="teamMembers"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                GitHub Link
              </label>
              <input
                className="rounded bg-blue-300 border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 py-2 px-4 w-full"
                type="text"
                name="githubLink"
              />
              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white py-2 px-16 rounded mx-auto block w-full hover:bg-blue-600"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;

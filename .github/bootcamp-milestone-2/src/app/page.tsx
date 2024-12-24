import WorkExperience from'@/components/workexperience';

export default async function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-6xl md:text-7xl font-bold text-center text-gray-800 
                       hover:text-blue-600 transform hover:scale-105 
                       transition-all duration-300 ease-in-out">
          Software Developer
        </h1>
        
        <p className="text-2xl text-center text-gray-700 leading-relaxed">
          Hi, I am 
          <span className="font-semibold text-blue-600 hover:text-blue-800 
                         transition-colors duration-300 mx-2 hover:underline">
            Rygel Fuentiblanca
          </span> 
          and I am a sophomore studying Computer Science at
          <span className="block mt-2 font-semibold text-green-600 
                         hover:text-green-800 transition-colors duration-300">
            Cal Poly - San Luis Obispo⌨️🖱️
          </span>
        </p>
      </div>
      {/* Main}
      {/* Work Experience Section */}
      <div className='flex justify-center items-center mt-12'>
        <WorkExperience />
      </div>
    </div>
  );
}


import React from 'react';
import '../src/index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
     <nav className="bg-gradient-to-r from-slate-950 via-gray-700 to-black shadow-lg">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      <div className="text-2xl font-bold text-white animate-pulse">PraSum</div>
      <div className="flex space-x-4">
        <a href="#about" className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">About Me</a>
        <a href="#projects" className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">Projects</a>
        <a href="#contact" className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">Contact</a>
      </div>
    </div>
  </div></nav>

   {/* Intro Section  */}
   <div className="bg-gradient-to-r from-black via-gray-500 to-purple-950">
  <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between animate-fade-in">
    <div className="text-center md:text-left">
      <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
        Hello, I'm <span className="text-yellow-300">PraSum</span> aka Pratik/Suman Rai.
      </h1>
      <p className="text-2xl text-white ml-4 mb-6">
        Welcome to my personal portfolio website. I'm passionate about creating amazing websites.
      </p>
      <button className="bg-yellow-300 text-gray-900 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"><a href="#projects">
        Explore My Work</a>
      </button>
    </div>
    <img className='w-72 mt-8 md:mt-0 transform hover:scale-105 transition duration-300 rounded-lg shadow-2xl border-4 border-white' src={`${process.env.PUBLIC_URL}/img.jpg`} alt="Profile" />
  </div>
</div>

      {/* Background Section  */}
<section id="about" className="py-20 bg-gradient-to-r from-slate-800 to-purple-950 text-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-extrabold mb-8 text-center animate-bounce">About Me</h2>
    <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
      <p className="text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Educational Background:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li className='underline hover:text-blue-500 transition duration-300'>ScheMes College || Running, Bachelor in Computer Application.</li>
          <li className='underline hover:text-blue-500 transition duration-300'>Gyankunj High School || +2 High School Graduate.</li>
          <li className='underline hover:text-blue-500 transition duration-300'>Vidhya Sagar School || SLC || Finished secondary school.</li>
        </ul>
      </p>
      <hr className="my-6 border-t-2 border-gray-300" />
      <p className="text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Skills based on Programming:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li className='underline hover:text-blue-500 transition duration-300'>Frontend Dev || Html, CSS, JS, React, Bootstrap, TailwindCSS, Next JS</li>
          <li className='underline hover:text-blue-500 transition duration-300'>Backend Dev || Python, Node JS, express JS.</li>
          <li className='underline hover:text-blue-500 transition duration-300'>Database || MongoDB</li>
        </ul>
      </p>
      <hr className="my-6 border-t-2 border-gray-300" />
      <p className="text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Additional Skills:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li className='underline hover:text-blue-500 transition duration-300'>Wordpress Dev || elementor</li>
          <li className='underline hover:text-blue-500 transition duration-300'>Figma || UI/UX Design</li>
          <li className='underline hover:text-blue-500 transition duration-300'>Canva || Graphics Designing</li>
          <li className='underline hover:text-blue-500 transition duration-300'>Video Editing || Capcut, Filmora</li>
        </ul>
      </p>
    </div>
  </div>
</section>

     {/* Projects Section */}
<section id="projects" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-20">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-white mb-8 text-center">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project Card 1 */}
      <div className="bg-white shadow-lg rounded-lg p-4 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Personal Portfolio Website</h3>
        <img className='w-full h-48 object-cover rounded-md mb-4' src={`${process.env.PUBLIC_URL}/project1.png`} alt="Personal Portfolio Website" />
        <p className="text-gray-600 mb-4">In this project, I've used HTML, CSS, along with JS to showcase my skills and credibility.</p>
        <a href="https://github.com/codingwithprasum/Personal-Portfolio-Website" className="text-white font-semibold block text-center bg-gradient-to-r from-blue-500 to-indigo-500 py-2 rounded-lg hover:from-indigo-500 hover:to-blue-500 transition duration-300">Explore</a>
      </div>
      {/* Project Card 2 */}
      <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">iCloud Navigation Bar</h3>
        <img className='w-full h-48 object-cover rounded-md mb-4' src={`${process.env.PUBLIC_URL}/project2.png`} alt="iCloud Navigation Bar" />
        <p className="text-gray-600 mb-4">This project is my imagination of iCloud Navbar, created with Next.js and shadcnUI powered by pnpm.</p>
        <a href="https://i-cloud-navigation-bar.vercel.app/" className="text-white font-semibold block text-center bg-gradient-to-r from-blue-500 to-indigo-500 py-2 rounded-lg hover:from-indigo-500 hover:to-blue-500 transition duration-300">Explore</a>
      </div>
      {/* Project Card 3 */}
      <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Super Nova Website</h3>
        <img className='w-full h-48 object-cover rounded-md mb-4' src={`${process.env.PUBLIC_URL}/project3.png`} alt="Super Nova Website" />
        <p className="text-gray-600 mb-4">This project was created by me and my friend during our initial phase of learning programming languages.</p>
        <a href="https://super-nova-project.vercel.app/" className="text-white font-semibold block text-center bg-gradient-to-r from-blue-500 to-indigo-500 py-2 rounded-lg hover:from-indigo-500 hover:to-blue-500 transition duration-300">Explore</a>
      </div>
    </div>
  </div>
</section>

    {/* Contact Section  */}
<section id="contact" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-8 text-white text-center animate-bounce">Get in Touch</h2>
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
      <p className="text-gray-600 mb-4">
        I'm always open to new opportunities and collaborations.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
      </form>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Pra Sum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
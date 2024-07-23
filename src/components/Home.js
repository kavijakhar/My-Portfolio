import React from 'react'
import { Link } from 'react-scroll'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import myimg from "../assets/IMG-20231023-WA0005.jpg"
const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full  bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full   px-4  md:flex-row">
                <div className="flex flex-col justify-center mr-4 h-full">
                    <h2 className="md:text-5xl sm:text-6xl  font-midium text-white">
                        I'm a Mern Stack Developer
                    </h2>
                    <p className="text-gray-400  py-4 max-w-md font-medium">
                        I'm kavita jakhar and MERN stack developer. I use  the technologies MongoDB, Express.js, React.js, and Node.js to build full-stack web applications.I can  handle both the front-end and back-end aspects of the application.
                    </p>


                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white hover:scale-105 w-fit px-6 py-3 my-2 flex items-center rounded-md  button
                            cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img
                        src={myimg}
                        alt="my profile"
                        className=" rounded-3xl pictureStyle  duration-200 hover:scale-90  mx-auto w-60  md:w-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

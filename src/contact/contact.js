/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../css/main.css';
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Contact(props) {
  return (
    <div className="xl:flex w-full h-full justify-between">
      <div className="xl:h-full xl:w-1/2 flex flex-wrap content-center align-middle pt-24 sm:pt-32 md:pt-40 lg:pt-64 xl:pt-0">
        <div>
          <h1 className="text-3xl md:text-5xl text-white font-bold">
            Get in touch
          </h1>
          <p className="mt-8 md:mt-16 text-white text-opacity-50 text-md md:text-lg">
            If you would like to contact me about a project collaboration, a job
            opportunity or just to say hello you can leave a message, or email
            me at{' '}
            <a
              href="mailto:sgcuber24@gmail.com"
              className="text-custom-blue-text underline pointer-events-auto"
            >
              sgcuber24@gmail.com
            </a>{' '}
            and we can talk!
          </p>

          <h1 className="text-2xl md:text-4xl text-white font-bold mt-8 md:mt-16">
            Social Media
          </h1>
          <br />
          <h1 className="mt-2 sm:mt-4 text-white text-opacity-50 text-md md:text-lg">
            You can also find me on LinkedIn, GitHub and Instagram!
          </h1>
          <div className="flex flex-wrap hidden sm:block mt-10">
            <a
              href="https://resume.creddle.io/resume/657k02y9xfn"
              target="_blank"
              className="pointer-events-auto mr-5"
            >
              <button
                className="text-md md:text-xl font-bold text-white outline-none active:bg-blue-700 hover:bg-blue-500 rounded-md w-32 h-10 md:w-40 md:h-10 tracking-wide"
                style={{ backgroundColor: '#007BB5' }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
              </button>
            </a>
            <a
              href="https://resume.creddle.io/resume/657k02y9xfn"
              target="_blank"
              className="pointer-events-auto mr-5"
            >
              <button
                className="text-md md:text-xl font-bold text-white outline-none active:bg-blue-700 hover:bg-blue-500 rounded-md w-32 h-10 tracking-wide"
                style={{ backgroundColor: '#4F4F4F' }}
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </button>
            </a>
            <a
              href="https://resume.creddle.io/resume/657k02y9xfn"
              target="_blank"
              className="pointer-events-auto mr-5"
            >
              <button
                className="text-md md:text-xl font-bold text-white bg-custom-blue-button outline-none active:bg-blue-700 hover:bg-blue-500 rounded-md w-32 h-10 md:w-40 md:h-10 tracking-wide"
                style={{ backgroundColor: '#3F729B' }}
              >
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </button>
            </a>
          </div>
          <div className="flex flex-wrap justify-around sm:hidden visible mt-6">
            <a
              href="https://www.linkedin.com/in/sriram-g-67487915a"
              target="_blank"
              className="pointer-events-auto"
            >
              <button
                className="text-md md:text-xl font-bold text-white outline-none active:bg-blue-700 hover:bg-blue-500 rounded-full w-10 h-10"
                style={{ backgroundColor: '#007BB5' }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </button>
            </a>
            <a
              href="https://www.github.com/sgcuber24"
              target="_blank"
              className="pointer-events-auto"
            >
              <button
                className="text-md md:text-xl font-bold text-white outline-none active:bg-blue-700 hover:bg-blue-500 rounded-full w-10 h-10"
                style={{ backgroundColor: '#4F4F4F' }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </a>
            <a
              href="https://www.instagram.com/sgcuber24"
              target="_blank"
              className="pointer-events-auto"
            >
              <button
                className="text-md md:text-xl font-bold text-white outline-none active:bg-blue-700 hover:bg-blue-500 rounded-full w-10 h-10"
                style={{ backgroundColor: '#3F729B' }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="transform scale-75 sm:scale-100 flex flex-wrap xl:justify-end justify-center  content-center  xl:w-1/2 py-8 sm:py-16 xl:p-0">
        <div className="pointer-events-auto">
          <h1 className="text-2xl md:text-4xl text-white font-bold">
            Leave a message
          </h1>
          <form action="" className="mt-8">
            <div>
              <label
                className="text-md font-bold text-gray-400 block"
                for="name"
              >
                Name
              </label>
              <input
                style={{ width: 400 }}
                type="text"
                className="border rounded bg-transparent outline-none focus:border-custom-blue-button text-white p-2"
                name="name"
                required
              />
              <label
                className="text-md font-bold text-gray-400 block mt-6"
                for="email"
              >
                Email
              </label>
              <input
                style={{ width: 400 }}
                type="email"
                className="border rounded bg-transparent outline-none focus:border-custom-blue-button text-white p-2"
                name="email"
                required
              />
              <label
                className="text-md font-bold text-gray-400 block mt-6"
                for="message"
              >
                Message
              </label>
              <textarea
                rows="4"
                cols="60"
                style={{ width: 400 }}
                type="text"
                name="message"
                className="border rounded bg-transparent outline-none focus:border-custom-blue-button text-white p-2"
                required
              />
              <input
                type="submit"
                className="block text-md md:text-xl font-bold text-white bg-custom-blue-button outline-none active:bg-blue-700 hover:bg-blue-500 rounded-md w-32 h-8 md:w-40 md:h-10 tracking-wide mt-6"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

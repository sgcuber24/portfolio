/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../css/main.css';
function Home(props) {
  return (
    <div className="h-full lg:w-1/2 flex flex-wrap content-center align-middle">
      <h1 className="text-3xl md:text-5xl text-white font-bold">
        Hello, I am <span className="text-custom-blue-text">Sriram.</span>
      </h1>
      <p className="mt-8 md:mt-16 text-white text-opacity-50 text-md md:text-lg">
        I am a programmer and an aspiring opensource developer from Bangalore,
        India looking to dive deep into Deep Learning and Flutter Development. I
        love racking my brain over challenges and puzzles and would like to be
        occupied all the time. I am also an avid gamer with countless hours on
        competitve games.
      </p>
      <a
        href="https://resume.creddle.io/resume/657k02y9xfn"
        target="_blank"
        className="mt-10 md:mt-20 "
      >
        <button className="text-md md:text-xl font-bold text-white bg-custom-blue-button outline-none active:bg-blue-700 hover:bg-blue-500 rounded-md w-32 h-8 md:w-40 md:h-10 tracking-wide">
          Résumé
        </button>
      </a>
    </div>
  );
}

export default Home;

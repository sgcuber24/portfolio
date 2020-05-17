import React from 'react';
import '../css/main.css';

function SkillItem(props) {
  let skill = props.skill;
  return (
    <div
      className="border-white h-16 border align-middle flex border-opacity-75 hover:border-opacity-100 pointer-events-auto rounded-lg"
      style={{ width: 400 }}
    >
      <img
        src={skill['icon']}
        alt="WD"
        className="object-scale-down w-8 ml-4"
      />
      <div>
        <h1 className="text-white pl-5 pt-2 font-bold text-sm">
          {skill['title']}
        </h1>
        <p className="text-white pl-5 text-xs sm:text-sm">
          ({skill['skills']})
        </p>
      </div>
    </div>
  );
}

export default SkillItem;

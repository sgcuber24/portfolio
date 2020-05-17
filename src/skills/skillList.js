import React from 'react';
import '../css/main.css';
import skillData from './skillsData';
import SkillItem from './skillItem';
function SkillList(props) {
  return (
    <div>
      {skillData.map((skill) => (
        <div className="pt-6 ">
          <SkillItem skill={skill}></SkillItem>
        </div>
      ))}
    </div>
  );
}

export default SkillList;

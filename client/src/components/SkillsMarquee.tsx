import { skills } from '../data/profile';

export default function SkillsMarquee() {
  const looped = [...skills, ...skills];

  return (
    <div className="skills-marquee">
      <div className="skills-track">
        {looped.map((skill, index) => (
          <span key={`${skill}-${index}`}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

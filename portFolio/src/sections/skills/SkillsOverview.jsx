import SkillCategory from '../../components/skills/SkillCategory';
import { skillCategories } from '../../data/skills';

export default function SkillsOverview() {
  return (
    <section className="px-6 pb-24 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        {skillCategories.map((category) => (
          <SkillCategory key={category.id} title={category.title} skills={category.skills} />
        ))}
      </div>
    </section>
  );
}
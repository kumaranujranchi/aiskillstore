import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Skill } from '@/types';

const skillsDirectory = path.join(process.cwd(), 'src/data/skills');

export function getAllSkills(): Skill[] {
  const fileNames = fs.readdirSync(skillsDirectory);
  const allSkillsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(skillsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    } as Skill;
  });

  return allSkillsData;
}

export function getSkillBySlug(slug: string): Skill | null {
  try {
    const fullPath = path.join(skillsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    } as Skill;
  } catch {
    return null;
  }
}

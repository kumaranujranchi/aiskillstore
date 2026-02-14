export interface SkillPreview {
  colors: string[];
  typography: {
    headings: string;
    body: string;
  };
  image: string;
}

export interface Skill {
  slug: string;
  title: string;
  description: string;
  author: string;
  price: string;
  preview: SkillPreview;
  content: string; // The raw markdown content
  demoUrl?: string; // Optional URL for a live demo website
}

export type TTestimonials = { name: string; feedback: string };

export type TProject = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  images: string[];
  techStack: string[];
  role: string;
  clientRepoLink?: string;
  serverRepoLink?: string;
  liveDemoLink?: string;
  testimonials?: TTestimonials[];
  videoDemo?: string;
  isTeamProject?: boolean;
  teamMembers?: string[];
  isDeleted: boolean;
};

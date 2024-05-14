import IProject from "./IProject";

export default interface ITranslate {
  downloadCV: string;
  title: string;
  bio: string;
  buttonProjects: string;
  buttonTechnologies: string;
  technologiesTitle: string;
  contactTitle: string;
  contactText: string;
  contactButton: string;
  projectsTitle: string;
  projectsSubtitle: string;
  projects: IProject[];
  buttonRepo: string;
  buttonApp: string;
  footer: string;
  thankYou: string;
}

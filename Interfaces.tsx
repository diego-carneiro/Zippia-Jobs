export interface Job {
  jobTitle: string;
  companyName: string;
  postedDate: string;
  companyLogo: string;
  jobDescription: string;
}
export interface Props {
  children?: React.ReactNode;
  data?: Job[];
}

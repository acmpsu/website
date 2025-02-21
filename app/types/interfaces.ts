export interface TeamMember {
  name: string;
  role: string;
  image: string;
  links: {
    github?: string;
    linkedin: string;
  };
  quote: {
    text: string;
    attribution: string;
  };
}

export interface Sponsor {
  name: string;
  url: string;
  logoPath: string;
}

export interface ClubPartner {
  name: string;
  url: string;
  logoPath: string;
}
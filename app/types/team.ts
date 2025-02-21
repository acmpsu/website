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
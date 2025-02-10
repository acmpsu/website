export interface ClubPartner {
    name: string;
    url: string;
    logoPath: string;
  }
  
  export const clubPartners: ClubPartner[] = [
    {
      name: "IEEE",
      url: "https://sites.psu.edu/psuieee/",
      logoPath: "/club-logos/ieee.png"
    },
    {
      name: "HackPSU",
      url: "https://hackpsu.org/",
      logoPath: "/club-logos/hackpsu.png"
    }

  ];
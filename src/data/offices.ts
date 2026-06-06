export interface Office {
  city: string;
  role: string;
  address: string;
  phone: string;
  email: string;
}

export const globalOffices: Office[] = [
  {
    city: "Shenzhen",
    role: "Global Headquarters",
    address: "#6-2 Alley 2, 25th Block, Tangwei Community, Fuyong Subdistrict, Bao'an, Shenzhen, China",
    phone: "15986725116",
    email: "info@lifelect.com",
  },
];

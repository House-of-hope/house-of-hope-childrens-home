export type Kid = {
  id: string;
  name: string;
  age: number;
  bio: string;
  image: string;
  location?: string;
};

export const kids: Kid[] = [
  {
    id: "abdulaziz-kazungu",
    name: "Abdulaziz Kazungu",
    age: 11,
    bio: "Abdulaziz Kazungu, 11, Male, Grade 5",
    image: "/kids/abdulaziz_kazungu.jpg",
    location: "Likoni",
  },
  {
    id: "andrew-boniface",
    name: "Andrew Boniface",
    age: 0,
    bio: "Andrew Boniface, empty, Male, Grade 6",
    image: "/kids/andrew boniface.jpg",
    location: "Likoni",
  },
  {
    id: "anthony-mlola",
    name: "Anthony Mlola",
    age: 15,
    bio: "Anthony Mlola, 15, Male, Grade 9",
    image: "/kids/anthony_mlola.jpg",
    location: "Likoni",
  },
  {
    id: "eliza-mpa",
    name: "Eliza Mpa",
    age: 10,
    bio: "Eliza Mpa, 10, Female, Grade 5",
    image: "/kids/eliza mpa.jpg",
    location: "Likoni",
  },
  {
    id: "elsie-kipkoech",
    name: "Elsie Kipkoech",
    age: 0,
    bio: "Elsie Kipkoech, empty, Female, Grade 5",
    image: "/kids/elsie_kipkoech.jpg",
    location: "Likoni",
  },
  {
    id: "emmanuel-leonard",
    name: "Emmanuel Leonard",
    age: 9,
    bio: "Emmanuel Leonard, 9, Male, Grade 4",
    image: "/kids/emmanuel_leonard.jpg",
    location: "Likoni",
  },
  {
    id: "farida-mohammed",
    name: "Farida Mohammed",
    age: 13,
    bio: "Farida Mohammed, 13, Female, Grade 4",
    image: "/kids/farida_mohammed.jpg",
    location: "Likoni",
  },
  {
    id: "george-mumo",
    name: "George Mumo",
    age: 13,
    bio: "George Mumo, 13, Male, empty",
    image: "/kids/george_mumo.jpg",
    location: "Likoni",
  },
  {
    id: "jamal-hassanal",
    name: "Jamal Hassanal",
    age: 13,
    bio: "Jamal Hassanal, 13, Male, empty",
    image: "/kids/jamal_hassanal.jpg",
    location: "Likoni",
  },
  {
    id: "jayden-spencer",
    name: "Jayden Spencer",
    age: 8,
    bio: "Jayden Spencer, 8, Male, Grade 3",
    image: "/kids/jayden_spencer.jpg",
    location: "Likoni",
  },
  {
    id: "lucy-miguel",
    name: "Lucy Miguel",
    age: 0,
    bio: "Lucy Miguel, empty, empty, empty",
    image: "/kids/lucy_miguel.jpg",
    location: "Likoni",
  },
  {
    id: "mercy-kipkoech",
    name: "Mercy Kipkoech",
    age: 0,
    bio: "Mercy Kipkoech, empty, Female, Grade 2",
    image: "/kids/mercy kipkoech.jpg",
    location: "Likoni",
  },
  {
    id: "neema-leonard",
    name: "Neema Leonard",
    age: 15,
    bio: "Neema Leonard, 15, Female, Grade 10",
    image: "/kids/neema_leonard.jpg",
    location: "Likoni",
  },
  {
    id: "patience-kipkoech",
    name: "Patience Kipkoech",
    age: 0,
    bio: "Patience Kipkoech, empty, Female, Grade 4",
    image: "/kids/patience kipkoech.jpg",
    location: "Likoni",
  },
  {
    id: "pauline",
    name: "Pauline",
    age: 11,
    bio: "Pauline, 11, Female, Grade 4",
    image: "/kids/pauline.jpg",
    location: "Likoni",
    
  },
  {
    id: "ruth-kasyoka",
    name: "Ruth Kasyoka",
    age: 11,
    bio: "Ruth Kasyoka, 11, Female, Grade 5",
    image: "/kids/ruth_kasyoka.jpg",
    location: "Likoni",
  },
  {
    id: "precious-kiptoo",
    name: "Precious Kiptoo",
    age: 12,
    bio: "Precious Kiptoo, 12, Female, Grade 6",
    image: "/kids/precious_kiptoo.jpg",
    location: "Likoni",
  },
  {
    id: "rinah-mutheu",
    name: "Rinah Mutheu",
    age: 10,
    bio: "Rinah Mutheu, 10, Female, Grade 5",
    image: "/kids/rinah_mutheu.jpg",
    location: "Likoni",
  },
  {
    id: "ummi-ochola",
    name: "Ummi Ochola",
    age: 15,
    bio: "Ummi Ochola, 15, Female, Grade 8",
    image: "/kids/ummi_ochola.jpg",
    location: "Likoni",
  },
  
  {
    id: "linet-mueni",
    name: "Linet Mueni",
    age: 11,
    bio: "Linet Mueni, 11, Female, Grade 5",
    image: "/kids/linet_mueni.jpg",
    location: "Likoni",
  },
];

export function getKidById(id: string) {
  return kids.find((k) => k.id === id);
}

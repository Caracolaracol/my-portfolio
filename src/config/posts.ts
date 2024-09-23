type Post = {
  title: string;
  date: string;
  description: string;
  link: string;
  slug: string;
};

type Category = {
  title: keyof typeof POSTS;
};

export const POSTS: { [key in "Web" | "Apps" | "Videos" | "Art" | "Coding"]: Post[] } = {
  Web: [
    {
      title: "Tickets",
      date: "2021-10-10",
      description: "Tickets",
      link: "tickets",
      slug: "tickets",
    },
    {
      title: "Language Spin",
      date: "2021-10-10",
      description: "Language Spin",
      link: "language-spin",
      slug: "langslug-spin",
    },
    {
      title: "Iron Plant",
      date: "2021-10-10",
      description: "Iron Plant",
      link: "iron-plant",
      slug: "slug-plant",
    },
    {
      title: "FIDE Form",
      date: "2021-10-10",
      description: "giftoky",
      link: "fideform",
      slug: "fideform",
    },
  ],
  Coding:[
    {
      title: "Gardens Database",
      date: "2021-10-10",
      description: "gardens",
      link: "gardens",
      slug: "gardens",
    },
  ],
  Apps: [
    {
      title: "Giftoky",
      date: "2021-10-10",
      description: "giftoky",
      link: "giftoky",
      slug: "giftoky",
    },
    {
      title: "Torchnd",
      date: "2021-10-10",
      description: "giftoky",
      link: "torchnd",
      slug: "torchnd",
    },
    {
      title: "FIDE app",
      date: "2021-10-10",
      description: "giftoky",
      link: "fide",
      slug: "fide",
    },
    {
      title: "My Notes",
      date: "2024-10-10",
      description: "notes",
      link: "notes",
      slug: "notes",
    },
  ],
  Videos: [
    {
      title: "Bichos",
      date: "2021-10-10",
      description: "giftoky",
      link: "bichos",
      slug: "bichos",
    },
    {
      title: "Cruzando Ríos / Saltando Piedras",
      date: "2021-10-10",
      description: "giftoky",
      link: "cruzando-rios-saltando-piedras",
      slug: "cruzando-slug-saltando-piedras",
    },
    {
      title: "La cena está lista",
      date: "2021-10-10",
      description: "giftoky",
      link: "cena",
      slug: "cena",
    },
    {
      title: "Quebrada radiocontrol",
      date: "2021-10-10",
      description: "giftoky",
      link: "quebrada",
      slug: "quebrada",
    },
    {
      title: "Asamblea de jueces",
      date: "2021-10-10",
      description: "giftoky",
      link: "asamblea",
      slug: "asamblea",
    },
  ],
  Art: [
    {
      title: "Music Projects",
      date: "2021-10-10",
      description: "giftoky",
      link: "music",
      slug: "music",
    },
    {
      title: "Macro Photography",
      date: "2021-10-10",
      description: "giftoky",
      link: "macro",
      slug: "macro",
    },
    {
      title: "Arts",
      date: "2021-10-10",
      description: "giftoky",
      link: "arts",
      slug: "arts",
    },
  ],
};

export const BLOG_ENTRIES: Post[] = [
  {
    title: "Entrie1",
    date: "2021-10-10",
    description: "giftoky",
    link: "entrie",
    slug: "entrie",
  },
];

export const POST_CATEGORIES: Category[] = [
  {
    title: "Apps",
  },
  {
    title: "Web",
  },
  {
    title:"Coding"
  },
  {
    title: "Videos",
  },
  {
    title: "Art",
  }
];

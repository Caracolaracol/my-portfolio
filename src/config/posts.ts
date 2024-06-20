type Post = {
    title: string;
    date: string;
    description: string;
    link: string;
};

type Category = {
    title: keyof typeof POSTS;
};

export const POSTS: { [key in 'Web' | 'Apps' | 'Videos' | 'Art' ]: Post[] } = {
    Web: [
        {
            title: "Language Spin",
            date: "2021-10-10",
            description: "Language Spin",
            link: "language-spin"
        },
        {
            title: "Iron Plant",
            date: "2021-10-10",
            description: "Iron Plant",
            link: "iron-plant"
        }
    ],
    Apps: [
        {
            title: "giftoky",
            date: "2021-10-10",
            description: "giftoky",
            link: "giftoky"
        },
        {
            title: "torchnd",
            date: "2021-10-10",
            description: "giftoky",
            link: "torchnd"
        }
    ],
    Videos: [
        {
            title: "Bichos",
            date: "2021-10-10",
            description: "giftoky",
            link: "bichos"
        },
        {
            title: "Cruzando Ríos / Saltando Piedras",
            date: "2021-10-10",
            description: "giftoky",
            link: "cruzando-rios-saltando-piedras"
        },
        {
            title: "La cena está lista",
            date: "2021-10-10",
            description: "giftoky",
            link: "cena"
        },
        {
            title: "Quebrada radiocontrol",
            date: "2021-10-10",
            description: "giftoky",
            link: "quebrada"
        },
        {
            title: "Asamblea de jueces",
            date: "2021-10-10",
            description: "giftoky",
            link: "asamblea"
        },
    ],
    Art: [
        {
            title: "Music Projects",
            date: "2021-10-10",
            description: "giftoky",
            link: "music"
        },
        {
            title: "Macro Photography",
            date: "2021-10-10",
            description: "giftoky",
            link: "macro"
        },
        {
            title: "Arts",
            date: "2021-10-10",
            description: "giftoky",
            link: "art"
        },
    ],
    
}

export const BLOG_ENTRIES: Post[] = [
    {
        title: "Entrie1",
        date: "2021-10-10",
        description: "giftoky",
        link: "entrie"
    }
]

export const POST_CATEGORIES: Category[] = [
    {
        title: "Web"
    },
    {
        title: "Apps"
    },
    {
        title: "Videos"
    },
    {
        title: "Art"
    }
]

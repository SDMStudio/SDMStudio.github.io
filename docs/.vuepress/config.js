module.exports = {
    base: "/",
    dest: "public",
    title: "SDM'Studio",
    description: 'Solver for sequential decision making problems.',
    head: [
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: "SDM'Studio",
            description: "Solver of Sequential Decision Making problems"
        },
        '/fr/': {
            lang: 'fr-FR',
            title: "SDM'Studio",
            description: 'Solveur de problèmes de prise de décision séquentielles'
        }
    },
    themeConfig: {
        // logo : "/assets/img/sdms-icon2.png",
        locales: {
            '/': {
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'English',
                // Aria Label for locale in the dropdown
                ariaLabel: 'Languages',

                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Tutorials', link: '/tutorials/' },
                    { text: 'Doc', link: '/doc/' },
                    { text: 'ANR Plasma', link: '/anr/' },
                    // { text: 'ANR Plasma', link: 'https://anr.fr/Projet-ANR-19-CE23-0018' },
                ],
                sidebar: {
                    "/anr/":
                        [
                            {
                                title: 'ANR PLASMA',   // required
                                path: '/anr/',      // optional, link of the title, which should be an absolute path and must exist
                            },
                            {
                                title: 'Team Members',   // required
                                path: '/anr/members',      // optional, link of the title, which should be an absolute path and must exist
                            },
                            {
                                title: 'Publications',   // required
                                path: '/anr/publications',      // optional, link of the title, which should be an absolute path and must exist
                            },
                        ],
                    "/tutorials/":
                        [
                            {
                                title: 'Tutorials',   // required
                                path: '/tutorials/',      // optional, link of the title, which should be an absolute path and must exist
                                collapsable: false, // optional, defaults to true
                                sidebarDepth: 1,
                                children: [
                                    '/tutorials/install',  /* /foo/one.html */
                                    '/tutorials/quickstart',  /* /foo/one.html */
                                    {
                                        title: 'Theory',   // required
                                        path: '/tutorials/theory',      // optional, link of the title, which should be an absolute path and must exist
                                        collapsable: true, // optional, defaults to true
                                        sidebarDepth: 1,
                                        children: [
                                            '/tutorials/theory/2p-zsSG',
                                            '/tutorials/theory/2p-zsPOSG',
                                        ]
                                    },
                                    {
                                        title: 'Algorithms',   // required
                                        path: '/tutorials/algorithms/',      // optional, link of the title, which should be an absolute path and must exist
                                        collapsable: true, // optional, defaults to true
                                        sidebarDepth: 1,
                                        children: [
                                            '/doc/experiments/params',
                                            '/doc/experiments/notes',
                                            '/tutorials/algorithms/hsvi',  /* /foo/one.html */
                                            '/tutorials/algorithms/qlearning',  /* /foo/one.html */
                                        ]
                                    },
                                    {
                                        title: 'Value functions',   // required
                                        path: '/tutorials/value_function/',      // optional, link of the title, which should be an absolute path and must exist
                                        collapsable: true, // optional, defaults to true
                                        sidebarDepth: 1,
                                        children: [
                                            '/tutorials/value_function/q/',  /* /foo/one.html */
                                            '/tutorials/value_function/v/',  /* /foo/one.html */
                                        ]
                                    },
                                    '/tutorials/contribute',  /* /foo/one.html */
                                ]
                            },
                            {
                                title: 'Documentation',   // required
                                path: '/doc/'
                            }
                        ],
                    "/doc/":
                        [
                            {
                                title: 'Tutorials',   // required
                                path: '/tutorials/',      // optional, link of the title, which should be an absolute path and must exist

                            },
                            {
                                title: 'Documentation',   // required
                                path: '/doc/',
                                collapsable: false, // optional, defaults to true
                                sidebarDepth: 1,
                                children: [
                                    '/doc/api/namespaces',
                                    '/doc/api/annotated',
                                    '/doc/api/files',
                                    {
                                        title: 'Experiments',   // required
                                        path: '/doc/experiments/',      // optional, link of the title, which should be an absolute path and must exist
                                        collapsable: true, // optional, defaults to true
                                        sidebarDepth: 1,
                                        children: [
                                            '/doc/experiments/params',
                                            '/doc/experiments/notes',
                                            '/doc/experiments/hsvi',
                                            '/doc/experiments/serial_hsvi',
                                            '/doc/experiments/hierarchical_qlearning',
                                        ]
                                    },
                                    '/doc/debugging/',
                                ]
                            }
                        ]
                },
            },
            '/fr/': {

                // text for the language dropdown
                selectText: 'Langages',
                // label for this locale in the language dropdown
                label: 'Français',
                // Aria Label for locale in the dropdown
                ariaLabel: 'Languages',

                nav: [
                    { text: 'Accueil', link: '/fr/' },
                    { text: 'Tutoriels', link: '/fr/tutorials/' },
                    { text: 'Doc', link: '/doc/' },
                    { text: 'ANR Plasma', link: '/fr/anr/' },
                ],
                sidebar: {
                    "/fr/anr/":
                        [
                            {
                                title: 'ANR PLASMA',   // required
                                path: '/fr/anr/',      // optional, link of the title, which should be an absolute path and must exist
                            },
                            {
                                title: 'Team Members',   // required
                                path: '/fr/anr/members',      // optional, link of the title, which should be an absolute path and must exist
                            },
                            {
                                title: 'Publications',   // required
                                path: '/fr/anr/publications',      // optional, link of the title, which should be an absolute path and must exist
                            },
                        ],
                    "/fr/tutorials/":
                        [
                            {
                                title: 'Tutoriels',   // required
                                path: '/fr/tutorials/',      // optional, link of the title, which should be an absolute path and must exist
                                collapsable: false, // optional, defaults to true
                                sidebarDepth: 1,
                                children: [
                                    '/fr/tutorials/install',  /* /foo/one.html */
                                    '/fr/tutorials/quickstart',  /* /foo/one.html */
                                    {
                                        title: 'Fondements théoriques',   // required
                                        path: '/fr/tutorials/theory/',      // optional, link of the title, which should be an absolute path and must exist
                                        collapsable: true, // optional, defaults to true
                                        sidebarDepth: 1,
                                        children: [
                                            '/fr/tutorials/theory/mdp',  /* /foo/one.html */
                                            '/fr/tutorials/theory/pomdp',  /* /foo/one.html */
                                            '/fr/tutorials/theory/decpomdp',  /* /foo/one.html */
                                            '/fr/tutorials/theory/2p-zsSG',  /* /foo/one.html */
                                            '/fr/tutorials/theory/2p-zsPOSG',  /* /foo/one.html */
                                            '/fr/tutorials/theory/posg',  /* /foo/one.html */
                                            '/fr/tutorials/theory/bMDP',  /* /foo/one.html */
                                            '/fr/tutorials/theory/oMDP',  /* /foo/one.html */
                                        ]
                                    },
                                    {
                                        title: 'Fondements algorithmiques',   // required
                                        path: '/fr/tutorials/algorithms/',      // optional, link of the title, which should be an absolute path and must exist
                                        collapsable: true, // optional, defaults to true
                                        sidebarDepth: 1,
                                        children: [
                                            '/fr/tutorials/algorithms/astar',  /* /foo/one.html */
                                            '/fr/tutorials/algorithms/hsvi',  /* /foo/one.html */
                                            '/fr/tutorials/algorithms/pbvi',  /* /foo/one.html */
                                            '/fr/tutorials/algorithms/qlearning',  /* /foo/one.html */
                                        ]
                                    },
                                    {
                                        title: 'Fonctions de valeurs',   // required
                                        path: '/fr/tutorials/value_function/',      // optional, link of the title, which should be an absolute path and must exist
                                        collapsable: true, // optional, defaults to true
                                        sidebarDepth: 1,
                                        children: [
                                            '/fr/tutorials/value_function/q/',  /* /foo/one.html */
                                            '/fr/tutorials/value_function/v/',  /* /foo/one.html */
                                        ]
                                    },
                                    '/fr/tutorials/contribute',  /* /foo/one.html */
                                ]
                            },
                            {
                                title: 'Documentation',   // required
                                path: '/doc/'
                            }
                        ],
                    "/fr/doc/":
                        [
                            {
                                title: 'Tutoriels',   // required
                                path: '/fr/tutorials/',      // optional, link of the title, which should be an absolute path and must exist

                            },
                            {
                                title: 'Documentation',   // required
                                path: '/doc/',
                                collapsable: false, // optional, defaults to true
                                sidebarDepth: 1,
                                children: [
                                ]
                            }
                        ]
                },
            }
        },
        repo: 'https://github.com/SDMStudio/sdms',

    },

    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },
        extendMarkdown: md => {
            md.use(require("markdown-it-katex"));
        }
    }
}

module.exports = {
    base: "/sdms/",
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
                    { text: 'ANR Plasma', link: 'https://anr.fr/Projet-ANR-19-CE23-0018' },
                ],
                sidebar: {

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
                                    '/tutorials/theory',  /* /foo/one.html */
                                    {
                                        title: 'Algorithms',   // required
                                        path: '/tutorials/algorithms/',      // optional, link of the title, which should be an absolute path and must exist
                                        collapsable: false, // optional, defaults to true
                                        sidebarDepth: 1,
                                        children: [
                                            '/tutorials/algorithms/hsvi',  /* /foo/one.html */
                                            '/tutorials/algorithms/qlearning',  /* /foo/one.html */
                                            '/tutorials/algorithms/(2p)-zsSG',
                                            '/tutorials/algorithms/(2p)-zsPOSG',
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
                                    '/doc/api/files'
                                ]
                            }
                        ]
                },
            },
            '/fr/': {

                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'Français',
                // Aria Label for locale in the dropdown
                ariaLabel: 'Languages',

                nav: [
                    { text: 'Home', link: '/fr/' },
                    { text: 'Tutoriels', link: '/fr/tutorials/' },
                    { text: 'Doc', link: '/doc/' },
                    { text: 'ANR Plasma', link: 'https://anr.fr/Projet-ANR-19-CE23-0018' },
                ],
                sidebar: {

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
                                    '/fr/tutorials/theory',  /* /foo/one.html */
                                    {
                                        title: 'Algorithms',   // required
                                        path: '/fr/tutorials/algorithms/',      // optional, link of the title, which should be an absolute path and must exist
                                        collapsable: false, // optional, defaults to true
                                        sidebarDepth: 1,
                                        children: [
                                            '/fr/tutorials/algorithms/hsvi',  /* /foo/one.html */
                                            '/fr/tutorials/algorithms/qlearning',  /* /foo/one.html */
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
        repo: 'https://gitlab.inria.fr/chroma1/plasma/sdms',

    },

    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },
        extendMarkdown: md => {
            md.use(require("markdown-it-katex"));
        }
    }
}

module.exports = {
    base: "/",
    title: "SDM'Studio",
    description: 'Solver for sequential decision making problems.',
    head: [
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
                    { text: 'ANR Plasma', link: '/anr_plasma/' },
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
                                    '/tutorials/algorithms',  /* /foo/one.html */
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
                    { text: 'Doc', link: '/fr/doc/' },
                    { text: 'ANR Plasma', link: '/anr_plasma/' },
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
                                    '/fr/tutorials/algorithms',  /* /foo/one.html */
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
                                path: '/fr/doc/',
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
}
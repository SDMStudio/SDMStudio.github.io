# Contribute

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

## Contribute to the code


## Contribute to the tutorials

The main purpose of tutorials is to provide users a comprehensive and in depth overview of theoritical and practical aspects behind *SDM'Studio*. Tutorials not only give a way to understand the usage of the platform but also provide the possibility for a user from another domain to understand the goal of researches in this field of AI. We think that popularized tutorials are a good alternative to papers for people that are not expert in the domain. In any case, tutorials can replace papers, they are in addition to give a better intuition of what happen in the theory. However, unlike to papers, tutorials neither show theorems and proofs nor explain experiments.

### How to write tutorials

The tutorials are written in **Markdown**. Refer to the [Markdown guide](#markdown-guide) to have detailed informations about the syntax. In order to provide a better user experience, you may need more flexibility when writing tutorials. To this end, it is also possible to add HTML tags or add Vue.js components to your markdown file. For more information, you can refer to the section [Advanced tutorials](#advanced-tutorials).



## Markdown guide
### Basic elements

Explanations for basic markdown can be found [here](https://www.markdownguide.org/basic-syntax/) or [here](https://v1.vuepress.vuejs.org/guide/markdown.html#frontmatter).

Basics include :

- Titles
- Lists
- Links
- Tables
- Emojis
- etc



### Mathematics

You can write mathematical formulas in markdown by including the 2 following at the top of the file.md . Equations can then be written in *LaTex*.

**Lines to add at the top of the markdown file**:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>
```

*Syntax* : 
```md
$$q^{\pi}_{t}(s, a) = \mathbb{E}_{\pi}\left[ \sum_{i=t}^{T} \gamma^{t-i} R_{i} \mid S_t = s, A_t = a\right]$$
```

*Results* : 
$$q^{\pi}_{t}(s, a) = \mathbb{E}_{\pi}\left[ \sum_{i=t}^{T} \gamma^{t-i} R_{i} \mid S_t = s, A_t = a\right]$$

### Images

*Syntax* :
```
![Paysage](https://mb.cision.com/Public/14683/3219095/aa1f4b9e11644ab0_400x400ar.jpg)
```

*Results* :

![Paysage](https://mb.cision.com/Public/14683/3219095/aa1f4b9e11644ab0_400x400ar.jpg)

### Code

*Syntax* : 

~~~
```cpp
#include <iostream>
#include <sdm/worlds.hpp>
#include <sdm/parser/parser.hpp>

int main(int argc, char **argv)
{
    auto dpomdp_world= sdm::parser::parse_file("my_problem.dpomdp");
    std::cout << "Nb Agents : " << dpomdp_world->getNumAgents() << std::endl;
    std::cout << "State Space : " << *dpomdp_world->getStateSpace() << std::endl;
    std::cout << "Action Space : " << *dpomdp_world->getActionSpace() << std::endl;
    std::cout << "Observation space : " << *dpomdp_world->getObsSpace() << std::endl;
    return 0;
}
```
~~~

*Output* :

```cpp
#include <iostream>
#include <sdm/worlds.hpp>
#include <sdm/parser/parser.hpp>

int main(int argc, char **argv)
{
    auto dpomdp_world= sdm::parser::parse_file("my_problem.dpomdp");
    std::cout << "Nb Agents : " << dpomdp_world->getNumAgents() << std::endl;
    std::cout << "State Space : " << *dpomdp_world->getStateSpace() << std::endl;
    std::cout << "Action Space : " << *dpomdp_world->getActionSpace() << std::endl;
    std::cout << "Observation space : " << *dpomdp_world->getObsSpace() << std::endl;
    return 0;
}
```

### Tables


*Syntax* : 
```md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

*Output* :

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

### Emojis

*Syntax* : `:emoji-name:`

*Example* : :smiley: :scream: :-1: :airplane: :bird: :fish:

*More* : [List of emojis](https://gist.github.com/rxaviers/7360908)


## Advanced tutorials

To make more advanced tutorials, several tools can be used on top of Markdown syntax.

### Include HTML

When building *SDM'Studio* website, *Markdown* files are first transcrypted in *HTML*. As a results, it is possible to add any HTML tags in the  content of each tutorial and it will appear properly in the resulting HTML file. 

### Use Headers

A good practice when creating a new content file is to add a header. Headers are placed at the top of the Markdown file and allow to store usefull data for the current file (meta-data, tags, title, etc). 

```md
---
title: Algorithms
meta:
  - name: description
    content: SDMS tutorials.
  - name: keywords
    content: sdms solver tuto decision making 
tags:
  - algorithms
---
```

A more complete example of what can look like a header is :

```md
---
sidebar: false
home: true
heroText: Explore decision making researches.
tagline: Solve sequential decision making problems using most advanced algorithms in this field. 
actionText: Get Started →
actionLink: /tutorials/quickstart.html
features:
- title: Help researchers in their experiments
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Easily build new algorithms based existed ones
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Quickly find solutions to decision making problems
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
more:
- title: Algorithms
  details: Different algorithms are available on SDMS.
  features:
  - title: Planning
    img: planning-img.png
    details: Planning algorithms are .....
  - title: Learning
    img: learning-img.png
    details: Learning algorithms are .....
- title: Problems
  details: Different problems can be solve using the platform.
  features:
  - title: Single-agent processes
    img: planning-img.png
    details: Planning algorithms are .....
  - title: Collaborative multi-agent processes
    img: learning-img.png
    details: Learning algorithms are .....
links:
- title: Install
  details: Easily install SDMS on your laptop or on any remote server
  text: How to install ? 
  link: /tutorials/install.html
- title: Tutorials
  details: Tutorials help you to quickly understand the theory and basic usage of SDMS
  text: View Tutorials 
  link: /tutorials/ 
- title: Documentation
  details: Go deeper into the documentation to understand  implementation details
  text: View Doc 
  link: /doc/ 
footer: MIT Licensed | Copyright © 2021 - ANR Plasma
---
```

### Add Vue.js components

Using vue components can considerarly improve the interface. By combining adequatly headers and vue components you can nearly make any custom interactive component you need and reuse them in several tutorials. This requires more time and few knowledge in [Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript) and [Vue.js](https://vuejs.org/) but the result is interesting.
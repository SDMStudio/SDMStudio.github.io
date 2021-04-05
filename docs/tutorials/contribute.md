# Contribute

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

## Contribute to the code


## Contribute to the tutorials

The main purpose of tutorials is to provide users a comprehensive and in depth overview of theoritical and practical aspects behind *SDM'Studio*. Tutorials not only give a way to understand the usage of the platform but also provide the possibility for a user from another domain to understand the goal of researches in this field of AI. We think that popularized tutorials are a good alternative to papers for people that are not expert in the domain. In any case, tutorials can replace papers, they are in addition to give a better intuition of what happen in the theory. However, unlike to papers, tutorials neither show theorems and proofs nor explain experiments.

### How to write tutorials

Tutorials are written in **Markdown**. This is a convenient way to quickly write tutorials. You can refer to the [Markdown guide](#markdown-guide) to have detailed informations about the syntax. To provide an improved user experience, you may need flexibility when writing tutorials. To this end, it is also possible to add HTML tags or use Vue.js components to your markdown file. For more information, you can refer to the section [Advanced tutorials](#advanced-tutorials).



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

You can write mathematical formulas in markdown by including the two following lines on top of the `file.md` . Equations can then be written with standard *LaTex* format.

**Lines to add at the top of the file**:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>
```

***Input*** : 
```md
$$q^{\pi}_{t}(s, a) = \mathbb{E}_{\pi}\left[ \sum_{i=t}^{T} \gamma^{t-i} R_{i} \mid S_t = s, A_t = a\right]$$
```

***Output*** : 
$$q^{\pi}_{t}(s, a) = \mathbb{E}_{\pi}\left[ \sum_{i=t}^{T} \gamma^{t-i} R_{i} \mid S_t = s, A_t = a\right]$$

### Images

***Input*** :
```
![Paysage](https://mb.cision.com/Public/14683/3219095/aa1f4b9e11644ab0_400x400ar.jpg)
```

***Output*** :

![Paysage](https://mb.cision.com/Public/14683/3219095/aa1f4b9e11644ab0_400x400ar.jpg)

### Code

***Input*** : 

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


***Input*** : 
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

***Input*** : `:emoji-name:`

*Example* : :smiley: :scream: :-1: :airplane: :bird: :fish:

*More* : [List of emojis](https://gist.github.com/rxaviers/7360908)


## Write advanced tutorials

In addition to simple markdown syntax, it is possible to make tutorials more attractive. Two examples that enable producing more attractive user interfaces are classic HTML and Vue.js components.

### Include HTML

When building *SDM'Studio* website, *Markdown* files are first transcrypted in *HTML*. As a results, it is possible to add any HTML tag in the content of a tutorial and it will appear as is in the output file. 

::: details
HTML and Vue.js components can be directly written in the core of any markdown file without previous specifications.
:::

**Input**
```md
<div style="font-style : oblique">
  <hr>
  <h4> This is an example </h4>

  <a href='https://en.wikipedia.org/wiki/HTML'> HTML Link</a>

  <iframe width="420" height="315" src="https://www.youtube.com/embed/fJ9rUzIMcZQ"></iframe> 
  <hr>
</div>
```

**Output**
<div style="font-style : oblique">
  <hr>
  <h4> This is an example </h4>
  
  <a href='https://en.wikipedia.org/wiki/HTML'> HTML Link</a>
  
  <iframe width="420" height="315" src="https://www.youtube.com/embed/fJ9rUzIMcZQ"></iframe> 
  <hr>
</div>


### Use Headers

A good practice when creating a new content file is to add a header. Headers are placed at the top of the file and allow to store usefull data for the current file (meta-data, tags, title, etc). 

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

An example of what can be a complete header is :

```md
---
title: Description page
meta:
  - name: description
    content: SDMS description.
  - name: keywords
    content: sdms overview description 
tags:
  - description overview
sidebar: false
home: false
heroText: Explore decision making researches.
tagline: Solve sequential decision making problems using most advanced algorithms in this field. 
actionText: Get Started →
actionLink: /tutorials/quickstart.html
features:
- title: Help researchers in their experiments
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Easily build new algorithms based existed ones
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
footer: MIT Licensed | Copyright © 2021 - ANR Plasma
---
```

### Add Vue.js components

Vue components can considerarly improve the interface. By combining adequatly headers and vue components you can make high level interface of all kind. Moreover, components are reusable in every tutorials. To be valid and accessible from the Markdown files, components must be global. That is to say, they need to be located in `global-components` folder. 

**Example :** including *ImageZoom* component

***Input***
```md
<ImageZoom img="/assets/img/sdms-icon-light.png" title="Icon light"/>
<ImageZoom img="/assets/img/sdms-icon.png" title="Icon dark"/>
```

***Output***
<ImageZoom img="/assets/img/sdms-icon-light.png" title="Icon light"/>
<ImageZoom img="/assets/img/sdms-icon.png" title="Icon dark"/>


See [Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript) and [Vue.js](https://vuejs.org/) documentation for more information about Vue components.
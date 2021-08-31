# Contribuer

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

## Contribuer au code


## Contribuer aux tutoriels

Le principal objectif des tutoriels est de fournir à l'utilisateur la possibilité de comprendre les aspects à la fois théoriques et pratiques liés à la plateforme *SDM'Studio*. Ils ne sont pas seulement un moyen de comprendre l'usage de la plateforme, ils permettent d'expliquer à un utilisateur spécialisé dans un domaine différent les enjeux des recherches en planification et apprentissage par renforcement multi-agents. Nous pensons que cette approche que l'on pourrait définir de *vulgarisée* est un bon moyen de faire connaître notre domaine de recherche à des étudiants ou à des personnes non spécialistes. En aucun cas, les tutoriels ne remplacent les papiers de recherche. Ils sont là, en complément, dans le but de donner une vue d'ensemble et une intuition sur ce qui se passe dans la théorie. Contrairement aux papiers scientifiques, ils ne doivent pas inclurent de preuves ou d'expérimentations précises.

### Quel format utiliser pour créer un tutoriel

Le format d'écrire des tutoriels est le **Markdown**. Ce formatage est adapté à l'écriture de documents web sans nécessiter de connaissance préalable en HTML. 
Pour plus de détails sur la syntaxe, vous pouvez vous référez au [Guide Markdown](#guide-markdown) ci-dessous. **Markdown** simplifie l'écriture de contenu web mais son utilisation se restreint à seulement quelques fonctionnalités. Pour avoir une plus grande flexibilité lors de l'écriture de tutoriels, et ainsi améliorer l'expérience utilisateur, vous pouvez ajouter des balises HTML ou des composants Vue.js à votre fichier markdown (voir [Advanced tutorials](#ecrire-des-tutoriels-avances)). 

## Guide Markdown
### Elements de base

Des explications sur l'utilisation de markdown sont disponble [ici](https://www.markdownguide.org/basic-syntax/) et [là](https://v1.vuepress.vuejs.org/guide/markdown.html#frontmatter).

Les éléments de base incluent :

- Les titres
- Les listes
- Les liens
- Les tableaux
- Les émoticones
- etc

### Mathematiques

Vous pouvez écrire des formules mathématiques en avec le format *LaTex* classique dans vos fichiers markdown. Pour cela, il suffit d'inclure les deux lignes ci-dessous en haut de votre fichier `.md`. 

**Lignes à ajouter en haut du fichier**:
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

### Tableaux


***Input*** : 
```md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

***Output*** :

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

### Emojis

***Input*** : `:emoji-name:`

*Exemple* : :smiley: :scream: :-1: :airplane: :bird: :fish:

*Plus d'émoticones* : [List of emojis](https://gist.github.com/rxaviers/7360908)


## Ecrire des tutoriels avancés

En plus de la syntaxe markdown classique, il est possible d'améliorer le design de ceux-ci en ajoutant des composants HTML ou Vue.js. De cette manière, les possibilités de graphisme sont quasiment infinies. Par exemple, il devient possible d'ajouter des composants interactifs.

### Inclure des balises HTML

Lors de la construction du site *SDM'Studio*, les fichiers *Markdown* sont d'abord traduits en langage *HTML*. Par conséquence, tout ajout de balise HTML dans le contenu d'un fichier `.md` apparaîtra tel quel dans le fichier qui en résulte.

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


### Utilisation des 'Headers'

Une bonne pratique lors de la création d'un nouveau fichier de contenu consiste à ajouter une en-tête. Les en-tête sont placés au début du fichier et permettent de stocker des données utiles au fichier web généré (meta-data, tags, titres, etc). 

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

Un exemple de ce que l'on peut faire avec les 'headers' :

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

### Ajout de composants Vue.js

Les composants Vue peuvant considérablement améliorer l'interface. En les combinant avec les 'headers', il est possible de définir toute sorte d'interfaces graphiques de haut-niveau.  De plus, ces composants sont réutilisables dans les différents fichiers `.md`. Pour être accessibles depuis les fichier `.md`, les composants doivent être placés dans le dossier `global-components`.

**Exemple :** inclure le composant *ImageZoom* 

***Input***
```md
<ImageZoom img="/assets/img/sdms-icon-light.png" title="Icon light"/>
<ImageZoom img="/assets/img/sdms-icon.png" title="Icon dark"/>
```

***Output***
<ImageZoom img="/assets/img/sdms-icon-light.png" title="Icon light"/>
<ImageZoom img="/assets/img/sdms-icon.png" title="Icon dark"/>


See [Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript) and [Vue.js](https://vuejs.org/) documentation for more information about Vue components.
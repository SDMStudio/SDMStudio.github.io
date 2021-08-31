---
title: A propos de SDM'Studio
meta:
  - name: description
    content: SDMS tutorials.
  - name: keywords
    content: sdms solver tuto decision making 
tags:
  - get started
  - quick start
  - theory
  - mathematics
---

# SDM'Studio - Sequential Decision Making Studio 

  - [Introduction](#introduction)
  - [Pour qui ?](#pour-qui-)
  - [Par où commencer ?](#par-où-commencer-)
  - [Philosophie](#philosophie)
  
## Introduction

SDM'Studio est une plateforme logicielle open-source dédiée à la recherche en intelligence artificielle. La plateforme s'intéresse à la résolution de ce que l'on appelle les problèmes de prise de décision séquentielle. C'est-à-dire, des problèmes dans lesquels un ou plusieurs agents ont pour objectif d'accomplir une tâche prédéfinie en interagissant dans un environnement<!-- qu'ils observent partiellement -->. SDMS repose sur les fondements théoriques de la résolution des processus de décision de Markov (MDP). Grâce à des reformulations judicieusement choisies, nous étendons les équations de Bellman classiques, et les algorithmes qui en découlent, à des classes de problèmes plus complexes tels que les POMDP, les DecPOMDP et les POSG (voir [Fondements théoriques](/fr/tutorials/theory/)). 

## Pour qui ?

SDM'Studio est à la fois un logiciel et une bibliothèque. Cette caractéristique permet différents types d'usages selon les besoins et les connaissances de l'utilisateur. Un utilisateur sans connaissance particulière en informatique peut utiliser l'interface haut-niveau du logiciel pour résoudre un problème qu'il aura préalablement formulé selon les formatages prédéfinis (voir [Formulation d'un problème](/fr/tutorials/quickstart.html#formulation-d-un-probleme)). Dans le cas d'une personne ayant des connaissances en informatique ou d'un chercheur dans le domaine, elle pourra utiliser l'aspect bibliothèque C++ pour l'intégrer à son application ou pour expérimenter de nouvelles approches de résolutions.

## Par où commencer ?

Pour commencer, le plus simple est d'essayer. Commencez par installer SDM'Studio sur votre machine `Linux` ou `MacOS` grâce au guide d'[Installation](/fr/tutorials/install.html). Ensuite, suivez le tutoriel '[Pour commencer](/fr/tutorials/quickstart.html)' et lancez vos premières résolution de problème en ligne de commande. Vous pourrez continuer en lisant les sections relatives aux [Fondements théoriques](/fr/tutorials/theory/) et aux [Fondements algorithmiques](/fr/tutorials/algorithms/) pour avoir une vue d'ensemble des briques logicielles existantes dans SDMS. Finalement, la section [Contribuer](/fr/tutorials/contribute.html) et la [Documentation](/doc/) de la bibliothèque vous permettront de prendre en main l'outil en tant que développeur.

## Philosophie

SDMS est développé dans le but de contribuer aux recherches scientifiques courantes et futures. A cet effet, le logiciel est mis à disposition gratuite et le code est open-source. Cela à pour but de permettre à la communauté de recherche en IA d'en bénéficier rapidement et simplement. Son usage peut servir à des fins commerciales, sous condition qu'il respecte les termes de la licence définie par les auteurs. 

L'objectif du projet SDMS, principalement financé sur fond de l'[Agence Nationale de Recherche](https://anr.fr/), est de construire un logiciel: 
1. gratuit
2. performant 
3. rassemblant les dernières avancées scientifiques du domaine
4. réutilisable dans le cadre de recherches futures 
5. simple d'utilisation


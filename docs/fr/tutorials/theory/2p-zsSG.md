# zero-sum SG

## Model
Un jeu stochastique (ou de Markov) décompté à deux joueurs et somme
nulle (zs-SG) (Cf. Shapley et al. 1953 (Proceedings of the National Academy of Sciences (PNAS))) est
spécifié par un tuple

- $\langle \mathcal{S}, \mathcal{A}^1, \mathcal{A}^2, P, r, \gamma, s_0 \rangle$ où
 
- $\mathcal{S}$ est un ensemble fini d'états,
 
- $\mathcal{A}^1$ et $\mathcal{A}^2$ sont des ensembles finis d'actions (une par
joueur),

- $\mathbb{P}{s}{a^1}{a^2}{s'}$ est la probabilité de transiter de l'état $s$ à
$s'$ quand les actions $a^1$ et $a^2$ sont effectuées;

- $r(s,a^1,a^2)$ est une fonction de récompense (scalaire);

- $\gamma\in [0,1)$ est un facteur d'atténuation; et

- $s_0$ est l'état initial.

L'objectif du joueur 1 est de maximiser l'espérance de la somme
atténuée des récompenses $E[\sum_t \gamma^t R_t|s_0]$ alors que
l'objectif du joueur 2 est de minimiser cette quantité.

Par commodité, on notera:

- $\Delta(\cdot)$ the probability simplex over some finite set;

- $\pi^i: \mathcal{S} \to \Delta(\mathcal{A}^i) $ une stratégie stochastique pour
  le joueur $i$;
- $\pi=(\pi^1,\pi^2)$ une stratégie jointe (ou une paire de
  stratégies) pour les deux joueurs;
- $r(\pi)$ le vecteur des récompenses immédiates espérées pour
  la stratégie (jointe) $\pi$:
  $r(\pi)(s)=\sum_{a^1,a^2} \pi^1(a^1|s) \pi^2(a^2|s) r(s,a^1,a^2)$;

- $P(\pi)$ la matrice de transition induite par la stratégie
  $\pi$.

Un tel jeu peut être ré-écrit en forme normale et résolu en cherchant
alors un équilibre de Nash (une stratégie mixte).

## Bellman's Optimality Equations

Définissons, pour tout $v$, le jeu de matrice de Shapley
$\Gamma^s(v) = [r(s,\cdot,\cdot)+\gamma \sum_{s'}
P_{\cdot,\cdot}(s'|s) v(s')]$
pour tout $s$ (c'est-à-dire, une valeur par paire d'action
$(a^1,a^2)$).

Alors, l'opérateur d'optimalité de Shapley
$\mathcal{H}: v \mapsto NEV(\Gamma^{\cdot}(v))$ est une fonction
contractante, et son unique point fixe est la fonction de valeur des
stratégies SGPNE, notée $NEV^*$.

L'algorithme de Shapley pour résoudre les zs-SG, analogue à 
l'itération sur la valeur (VI) pour les MDP, consiste en
l'application itérative de cet opérateur jusqu'à
$\epsilon$-convergence, et alors, quand on est dans un état $s$,
d'agir selon la NES du jeu de Matrice de Shapley induit en $s$.

## Shapley's algorithm

blabla

## HSVI algorithm

blabla

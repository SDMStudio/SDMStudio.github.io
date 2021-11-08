---
title: Theory
meta:
  - name: description
    content: SDMS tutorials.
  - name: keywords
    content: algorithms hsvi qlearning    
tags:
  - algorithms hsvi qlearning    
---

# Fondements théoriques

### *Notations*

- $x_t$ : état à l'instant $t$
- $u_t$ : action à l'instant $t$
- $z_t$ : observation à l'instant $t$
- $o_t$ : historique à l'instant $t$
- $d_t$ : règle de décision à l'instant $t$
- $s_t$ : état du controller à l'instant $t$
  
## Formalismes



| Problème                     | Etat                                                            | Action                                                                       | Observation                                             |
| ---------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------- |
| *MDP*                        | $x_t$                                                           | $u_t$                                                                        | $x_t$                                                   |
| *POMDP*                      | $x_t$                                                           | $u_t$                                                                        | $z_t$                                                   |
| *MMDP*                       | $x_t$                                                           | $\mathbf{u}_t = \left( u_t^1, u_t^2, ..., u_t^n\right)$                      | $x_t$                                                   |
| *serial MMMDP*              | $x_t$                                                           | $u_t^i$                                                                      | $x_t$                                                 |
| *MPOMDP*                     | $x_t$                                                           | $\mathbf{u}_t = \left( u_t^1, u_t^2, ..., u_t^n\right)$                      | $\mathbf{z}_t = \left( z_t^1, z_t^2, ..., z_t^n\right)$ |
| *serial MPOMDP*              | $x_t$                                                           | $u_t^i$                                                                      | $\mathbf{z}_t$ if $i = n$ else   $\emptyset$                                               |
| *hierarchical MPOMDP*        | $x_t$                                                           | $\mathbf{u}_t = \left( u_t^1, u_t^2, ..., u_t^n\right)$                      | $\mathbf{z}_t = \left( z_t^{1:n}, z_t^{2:n}, ..., z_t^n\right)$ |
| *belief MDP*                 | $b_t =  p\left( x_t \mid \mathbf{o}_t \right)$                  | $\mathbf{u}_t = \left( u_t^1, u_t^2, ..., u_t^n\right)$                      | $\mathbf{z}_t = \left( z_t^1, z_t^2, ..., z_t^n\right)$ |
| *occupancy MDP*              | $\xi_t =  p\left( x_t, o_t \mid \iota_t \right)$                | $\mathbf{d}_t = (d_t^i)_{i=1..n} =  \left(p(u^i \mid o_t^i)\right)_{i=1..n}$ | $\rho_t = \emptyset$                                    |
| *serial occupancy MDP*       | $\xi_t^i =  p\left( x_t, o_t, u_t^{0:i-1} \mid \iota_t \right)$ | $d_t^i =  p(u_t^i \mid o_t^i)$                                               | $\rho_t = \emptyset$                                    |
| *hierarchical occupancy MDP* | $\xi_t =  p\left( x_t, o_t \mid \iota_t \right)$                | $\mathbf{d}_t = (d_t^i)_{i=1..n} =  \left(p(u^i \mid o_t^i)\right)_{i=1..n}$ | $\rho_t = z_t^n$                                        |
| *(2p)-ZS-SG*                 | $s_t$                                                           | $(p(u_t^1),p(u_t^2))$                                                        |                                                         |
| *occupancy MG*               | $\xi_t =  p\left( x_t, o_t \mid \iota_t \right)$                | $\mathbf{d}_t = (d_t^i)_{i=1..n} =  \left(p(u^i \mid o_t^i)\right)_{i=1..n}$ |                                                         |





<!-- ## DQN et DRQN    :airplane: :sunglasses: :smiley:

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


### Planification vs Apprentissage par renforcement

+ **Planification** : on a accès à la dynamique de l'environnment $p(s' | s, a)$ et $p(o | s, a)$ 
  +  Calcul explicite de la statistique $b_t = p(s | h_t)$
  +  Calcul de la valeur exacte des équations de Bellman
+ **Apprentissage par renforcement** : pas d'accès à la dynamique, juste les échantillons générés ($o_0, a_0, r_1, o_1, a_1, r_2, .., etc$)
  + Comment construire une croyance $b_t$ ?
  + Comment estimer $V^{\pi}$ (ou $Q^{\pi}$) ?
  + Comment estimer $V^{*}$ (ou $Q^{*}$) ?

**Solution** : $\rightarrow$ on les estime

### Estimation de la fonction de valeur d'action $Q^{\pi}$

Définition de la Q-valeur:
$$q^{\pi}_{t}(s, a) = \mathbb{E}_{\pi}\left[ \sum_{i=t+1}^{T} \gamma^{t-i+1} R_{i} \mid S_t = s, A_t = a\right]$$

Equation de Bellman :
$$q^{\pi}_{t}(s, a) = \mathbb{E}_{\pi}\left[ R_{t+1} + \gamma q^{\pi}_{t+1}(S_{t+1}, A_{t+1}) \mid S_t = s, A_t = a\right]$$

**Note** : l'espérance est une moyenne probabiliste

$$q^{\pi}_{t}(s_t, a_t) \approx \frac{1}{n} \sum_{i=1}^n \left[ r_{t+1}^{(i)} + \gamma q^{\pi}_{t+1}(s_{t+1}^{(i)}, a_{t+1}^{(i)}) \right]$$

**1. Algo SARSA** 

**Mise à jour par moyenne mobile** : A chaque pas de temps et chaque (s, a, r, s', a') généré, on applique :

$q^{\pi}_{t}(s_t, a_t) \leftarrow (1-\alpha_t) q^{\pi}_{t}(s_t, a_t) + \alpha_t \left[ r_{t+1} + \gamma q^{\pi}_{t+1}(s_{t+1}, a_{t+1}) \right]$

$q^{\pi}_{t}(s_t, a_t) \leftarrow q^{\pi}_{t}(s_t, a_t) + \alpha_t \left( \left[ r_{t+1} + \gamma q^{\pi}_{t+1}(s_{t+1}, a_{t+1}) \right] - q^{\pi}_{t}(s_t, a_t)\right)$

On peut prouver que sous certaines conditions (notamment sur $\alpha_t$), l'algo converge vers la **VRAI** valeur $q^{\pi}$.


### Estimation de la fonction de valeur d'action optimale $Q^{*}$

Définition de la Q-valeur:
$$q^{*}_{t}(s, a) = max_{\pi} \left[ \mathbb{E}_{\pi}\left[ \sum_{i=t+1}^{T} \gamma^{t-i+1} R_{i} \mid S_t = s, A_t = a\right] \right]$$

Equation d'optimalité de Bellman :
$$q^{*}_{t}(s, a) = \mathbb{E}\left[ R_{t+1} + \gamma \max_{a'}  q^{*}_{t+1}(S_{t+1}, a') \mid S_t = s, A_t = a\right]$$

**Note** : l'espérance est une moyenne probabiliste

$$q^{*}_{t}(s_t, a_t) \approx \frac{1}{n} \sum_{i=1}^n \left[ r_{t+1}^{(i)} + \gamma \max_{a'}  q^{*}_{t+1}(s_{t+1}^{(i)}, a') \right]$$

**2. Algo Q-learning** 

**Mise à jour par moyenne mobile** : A chaque pas de temps et chaque (s, a, r, s', a') généré, on applique :

$q^{*}_{t}(s_t, a_t) \leftarrow (1-\alpha_t) q^{*}_{t}(s_t, a_t) + \alpha_t \left[ r_{t+1} + \gamma \max_{a'}  q^{*}_{t+1}(s_{t+1}, a') \right]$

$q^{*}_{t}(s_t, a_t) \leftarrow q^{*}_{t}(s_t, a_t) + \alpha_t \left( \left[ r_{t+1} + \gamma \max_{a'} q^{*}_{t+1}(s_{t+1}, a') \right] - q^{*}_{t}(s_t, a_t)\right)$

On peut prouver que sous certaines conditions (notamment sur $\alpha_t$), l'algo converge vers la **VRAI** valeur $q^{*}$.

### L'algorithme DQN 

Algorithme du Q-learning dans lequel on représente la Q-valeur par un réseau de neurones (NN). 

On assume que l'horizon est infini et on nomme les paramètres du réseau de neurones sont $\theta$. Notre but est d'ajuster les paramètres $\theta$ pour que $q^{\theta^*} \approx q^*$.

La règle de mise à jour peut se réécrire sous la forme d'un problème de minimisation. A chaque pas de temps, on exécute une descente de gradient dans le but de minimiser:

$$\mathbf{L}(\theta) = \frac{1}{2} \left[ r_{t+1} + \gamma \max_{a'} q^{\theta}_{t+1}(s_{t+1}, a') - q^{\theta}_{t}(s_t, a_t) \right]^2$$

Mise à jour des $\theta$ : 
$$\theta_{t+1} = \theta_t + \alpha_t \nabla_{\theta}\mathbf{L}(\theta_t)$$



**DQN pour Atari Games:**
![DQN](../../.vuepress/public/assets/img/dqn.png)


**Quelques astuces pour booster les résultats**
- Mieux utiliser l'expérience (*Experience Replay*)
  - Garde en mémoire l'expérience passée
  - Chaque update utilise un **batch** d'expériences passées pour mettre à jour le modèle
  - **Proritized** Experience Replay $\rightarrow$ fait revenir plus souvent les échatillons rare / mauvais
- Utiliser un modèle cible
  - Eviter de changer trop souvent la cible

**Problème** : Q-learning converge vers la solution optimale seulement pour MDP !!!!


### L'agorithme DRQN = DQN + Maintient d'une croyance $b_t$

**Objectif** : Pour résoudre POMDP, on a besoin de travailler sur des historiques $h_t$ ou sur des croyances $b_t$.

**Idée** : Utiliser un réseau de neurones récurrent (**RNN**) pour représenter $q$. Ainsi, on ne représente plus $q^{\theta}_t(s_t, a_t)$ mais $q^{\theta}_t(h_t, a_t)$.

**Différents types de RNN**

**La version simple:**

![Vanilla](../../.vuepress/public/assets/img/vanilla-rnn.png)

**La version plus complexe**

![lstm](../../.vuepress/public/assets/img/lstm.png)

**La version complexe mais pas trop**

![gru](../../.vuepress/public/assets/img/gru.png) -->

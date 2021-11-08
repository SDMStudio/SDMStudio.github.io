# HSVI

The algorithmic scheme of [Heuristic Search Value Iteration](https://arxiv.org/abs/1207.4166) (HSVI) was firstly introduced by Trey Smith and Reid Simmons.

## Composantes 

<ImageZoom img="/assets/img/modularity-hsvi.png" title="Components used in HSVI"/>

## Schéma algorithmique

Le schéma algorithmique général d'HSVI est représenté par le schéma ci-dessous. 
Pour en définir une instance, celui-ci nécessite de définir les notions d'état $s_t$, d'action $a_t$, de borne inférieur $\underline{V}$ et borne supérieur $\bar{V}$.

<ImageZoom img="/assets/img/algorithms-hsvi.png" title="HSVI scheme" max_width="700"/>


**Exemple** : une instance d'HSVI est l'algorithme oHSVI. Cette instance permet de résoudre un Dec-POMDP formulé comme un occupancy-state MDP. Le type d'état dans ce cas est un état d'occupation, noté $\xi_t = p\left( x_t, o_t \mid \iota_t \right)$. Le type d'action est un ensemble de règles de décision individuelles, noté $\mathbf{d}_t = (d_t^1, ..., d_t^n) =  \left(p(u^1 \mid o_t^1), p(u^2 \mid o_t^2),..., p(u^n \mid o_t^n)\right)$. La borne inférieure est représentée par une ensemble d'hyperplan et la borne supérieure par un ensemble de point.


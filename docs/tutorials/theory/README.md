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

# Theoritical foundations

### *Notations*
- $x_t$: state at time $t$.
- $u_t$ : action at time $t
- $z_t$ : observation at time $t$
- $o_t$ : history at time $t$
- $d_t$ : decision rule at time $t$
- $s_t$ : state of the controller at time $t$
  
## Formalisms



| Problem                   | State                                                            | Action                                                                                                              | Observation |
| -------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| *MDP*                      | $x_t$                                                           | $u_t$                                                                                                               |        $x_t$     |
| *POMDP*                    | $b_t =  p\left( x_t \mid o_t \right)$                           | $u_t$                                                                                                               |       $z_t$      |
| *MMDP*                     | $s_t$                                                           | $\mathbf{u}_t = \left( u_t^1, u_t^2, ..., u_t^n\right)$                                                             |       $x_t$      |
| *MPOMDP*                   | $b_t =  p\left( x_t \mid \mathbf{o}_t \right)$                  | $\mathbf{u}_t = \left( u_t^1, u_t^2, ..., u_t^n\right)$                                                             |      $\mathbf{z}_t = \left( z_t^1, z_t^2, ..., z_t^n\right)$    
| *NDPOMDP*                   | $\mathbf{\xi}_t =  \left(p\left( b^i_t \mid b^i_0, d^i_{0..t} \right)\right)_{i=1..n}$                  |  $\mathbf{d}_t = (d_t^i)_{i=1..n} =  \left(p(u^i \mid o_t^i)\right)_{i=1..n}$                                                             |      $\mathbf{z}_t = \left( z_t^1, z_t^2, ..., z_t^n\right)$       |   |
| *Dec-POMDP*                | $\xi_t =  p\left( x_t, o_t \mid \iota_t \right)$                | $\mathbf{d}_t = (d_t^i)_{i=1..n} =  \left(p(u^i \mid o_t^i)\right)_{i=1..n}$ |
| *Extensive-Form Dec-POMDP* | $\xi_t^i =  p\left( x_t, o_t, u_t^{0:i-1} \mid \iota_t \right)$ | $d_t^i =  p(u_t^i \mid o_t^i)$                                                                                      |             |
| *(2p)-ZS-SG*               | $s_t$                                                           | $(p(u_t^1),p(u_t^2))$                                                                                               |             |
| *(2p)-ZS-POSG*             | $\xi_t =  p\left( x_t, o_t \mid \iota_t \right)$                | $\mathbf{d}_t = (d_t^i)_{i=1..n} =  \left(p(u^i \mid o_t^i)\right)_{i=1..n}$ |             |


## Problems reformulation


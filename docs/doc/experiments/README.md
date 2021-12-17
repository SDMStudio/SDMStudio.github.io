# Experimentations

Here are some notes.
- [Selection of parameters](/doc/experiments/params)
- [Notes and choices for SDMS](/doc/experiments/notes)
  
Here is a set of experimentations.
- [HSVI](/doc/experiments/hsvi)
- [Q-Learning](/doc/experiments/qlearning)

# BoxPushing 
- HORIZON : 4
# PBVI

| Trial | Value   | Size | Time    |
| ----- | ------- | ---- | ------- |
| 2     | 69,9301 | 214  | 28,5744 |

# HSVI 

| HSVI             | Num Trials | Error    | Value LB | Value UB | Size LB | Size UB | Time    | NumStates |
| ---------------- | ---------- | -------- | -------- | -------- | ------- | ------- | ------- | --------- |
| Simultané        | 25         | 0,133875 | 98,5936  | 98,7275  | 13      | 29      | >6000   | 80        |
| Serial           | 8          | 0,03798  | 98,5936  | 98,6316  | 37      | 29      | 31,1217 | 45        |
| Serial (tabular) | 2          | 0,598185 | 98,5109  | 99,1091  | 13      | 13      | 5586,2  | 31871     |


# HSVI Simultané

- LB : PLWC (type_selection=WCSP, pruning_freq=10, type_pruning=BOUNDED)
- UB : Sawtooth (type_selection=LP, pruning_freq=NO_PRUNING)
- HORIZON : 10

| Problem    | Num Trials | Error   | Value LB | Value UB | Size LB | Size UB | Time     | NumStates |
| ---------- | ---------- | ------- | -------- | -------- | ------- | ------- | -------- | --------- |
| alignment  | 73         | 43,5217 | 91       | 134,522  | 50      | 526     | 7083,55  | 1033      |
| mabc1      | 1          | 0       | 9,29     | 9,29     | 20      | 10      | 0,815401 |           |
| boxPushing | 2          | 13,4805 | 215,23   | 228,711  | 28      | 18      | 6007,43  | 38        |
| Mars       | 1          | 2,66062 | 25,9527  | 28,6133  | 20      | 10      | 4399,63  | 20        |
| recycling  | 12         | 0       | 31,8639  | 31,8639  | 15      | 71      | 14,8543  | 104       |
| tiger      | 21         | 26,8749 | 3,90758  | 30,7825  | 30      | 138     | 6148,64  | 203       |

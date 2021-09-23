
# Selection of parameters

TEST GITHUB !!!!! TO BE DELETED !!!
## Memory

Minimum memory size required to achieve optimality

| Problem       | Memory |
| ------------- | ------ |
| mabc          | 1      |
| recycling     | 1      |
| tiger         | 3      |
| alignment2x4  | 2      |
| Grid3x3Corner | 1      |
| boxPushing    | 2      |
| GridSmall     | 2      |
| Mars          | 2      |


## Precision

Triplet of values that ensure that optimality is achieved.

| Problem      | Horizon | PRECISION_BELIEF | PRECISION_OCCUPANCY | COMPRESS_PRECISION |
| ------------ | ------- | ---------------- | ------------------- | ------------------ |
| mabc         | *       | 0.001            | 0.001               | O.1                |
| recycling    | *       | 0.1              | 0.1                 | O.1                |
| tiger        | *       | 0.01             | 0.001               | O.1                |
| alignment2x4 | *       | 0.1              | 0.1                 | O.1                |

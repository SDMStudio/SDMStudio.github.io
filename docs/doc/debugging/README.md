# Debugging

This section describe how we can debug our code.  

## 1) Track memory leaks

We can use [Valgrind](https://www.valgrind.org/) tools to manage a possible memory leak.  

If you normally run your program like this:

```sh
myprog arg1 arg2
```

Use this command line:

```sh
valgrind --leak-check=yes myprog arg1 arg2
```

This should display whether some parts of the memory was lost or not.

## 2) Track large CPU usage

To better optimize CPU usage, we can use a profiler. In my case, I use [Valgrind](https://www.valgrind.org/) to build profile data and [KCachegrind](https://kcachegrind.github.io) to visualize them.

If you normally run your program like this:

```sh
myprog arg1 arg2
```

Use this command line:

```sh
valgrind --tool=callgrind --dump-instr=yes --simulate-cache=yes --collect-jumps=yes myprog arg1 arg2
```

This should save a file called `callgrind.out.xxxxx` where `xxxxx` is the profile data identifier. Earlier profile data are represented by a bigger identifier. To visualize profile data, simply run :

```sh
kcachegrind callgrind.out.xxxxx
```
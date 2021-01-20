/* -------------------------------------------------------- */
/*                     Data Structures                      */
/* -------------------------------------------------------- */
/*      Abstraction (ADT)     |     Implementation (DS)     */
/* -------------------------------------------------------- */
/*         List               |     Dynamic Array.          */
/*                            |     Linked List.            */
/* -------------------------------------------------------- */
/*         Queue              |   Linked List based Queue.  */
/*                            |     Array based Queue.      */
/*                            |     Stack based Queue.      */
/* -------------------------------------------------------- */
/*         Map                |     Tree Map                */
/*                            |     Hash Map/Hash Table     */
/* -------------------------------------------------------- */


/* -------------------------------------------------------- */
/*                  Complexity Analysis                     */
/* -------------------------------------------------------- */
/* 1. - Big-O Notation                                      */
/* -------------------------------------------------------- */
/* Big-O Notation gives an upper bound of the complexity in */
/* the worst case, helping to quantify performance as the   */
/* input size becomes arbitrarily large.                    */
/* -------------------------------------------------------- */
/*     Constant      |     0(1)                             */
/*     Logarithmic   |     0(log(n))                        */
/*     Linear        |     0(n)                             */
/*     Linearithmic  |     0(nlog(n))                       */
/*     Quadric       |     0(n^2)                           */
/*     Cubic         |     0(n^3)                           */
/*     Exponential   |     0(b^n)     Note: b > 1           */
/*     Factorial     |     0(n!)                            */
/* -------------------------------------------------------- */
/* 2. - Big-O Properties                                    */
/* -------------------------------------------------------- */
/*      0(n + c) = 0(n)                                     */
/*      0(cn) = 0(n)                                        */
/* -------------------------------------------------------- */
/* Let f be a function that describes the running time of   */
/* a particular algorithm for an input of size n:           */
/*      f(n) = 7log(n)^3 + 15n^2 + 2n^3 + 8                 */
/*                  0(f(n)) = 0(n^3)                        */
/* -------------------------------------------------------- */
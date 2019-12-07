import numpy as np

n1 = 236491
n2 = 713787

def rolling_window(a, size):
    shape = a.shape[:-1] + (a.shape[-1] - size + 1, size)
    strides = a.strides + (a. strides[-1],)
    return np.lib.stride_tricks.as_strided(a, shape=shape, strides=strides)

def check(n):
    a = [int(d) for d in str(n)]
    da = np.diff(a)
    inc = np.all(da >= 0)
    if not inc:
        return False
    rep = (da == 0)
    # print(rep)
    # print(rolling_window(rep, 3))

    first = rep[0:2]
    # print(first)
    if first[0] and not first[1]:
        return True
    last = rep[-2:]
    if last[-1] and not last[-2]:
        return True
    winds = rolling_window(rep, 3)
    for w in winds:
        if not w[0] and w[1] and not w[2]:
            return True

    return False;

alln = np.arange(n1, n2+1)
for n in alln:
    if (check(n)):
        print(n)
# print(check(112233))
# print(check(123444))
# print(check(111122))
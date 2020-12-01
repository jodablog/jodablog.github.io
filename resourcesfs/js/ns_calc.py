#import numpy as np
import sys

args = sys.argv

def sigma_R2_1(wvl, z, r0, ns):
    # first term of sum for σ_R^2 from (5.72) Giacomo PhD
    k = 2 * 3.1415926535897932 / wvl
    return 5.32 * k**(-5 / 6) * z**(5 / 6) * r0**(-5 / 3) * (1 - 1 / (2 * ns))**(5 / 6) / ns

def min_ns(z, wvl, r0):
    ns = 0
    sr2 = 1
    while sr2 > 0.5:
        ns += 1
        sr2 = sigma_R2_1(wvl, z, r0, ns)
    return ns

ns = min_ns(float(args[1]) * 10**6, float(args[2]) * 10**(-3), float(args[3]) * 10**3)
print(str(ns))

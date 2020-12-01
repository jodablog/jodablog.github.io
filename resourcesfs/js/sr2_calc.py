#import numpy as np
import sys

args = sys.argv

def sigma_R2(z, wvl, r0):
    # full Rytov variance
    k = 2 * 3.1415926535897932 / wvl
    return 2.90 * k**(-5 / 6) * z**(5 / 6) * r0**(-5 / 3)

sr2 = sigma_R2(float(args[1]) * 10**6, float(args[2]) * 10**(-3), float(args[3]) * 10**3)
sr2=round(sr2, 2)
print(str(sr2))

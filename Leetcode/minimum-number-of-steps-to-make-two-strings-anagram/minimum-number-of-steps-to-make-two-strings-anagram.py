class Solution:
    def minSteps(self, s: str, t: str) -> int:
        scount = {}
        tcount = {}
        for i in s:
            if i in scount:
                scount[i] += 1
            else:
                scount[i] = 1
        for i in t:
            if i in tcount:
                tcount[i] += 1
            else:
                tcount[i] = 1
        steps = 0
        for i in scount:
            si = scount.get(i,0) - tcount.get(i,0)
            if si > 0:
                steps += si
        return steps
            
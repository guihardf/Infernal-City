pieces = [
    [[1,1]],
    [[1,1,1],
     [0,1,0]],
    [[1,1,1,1,1]],
    [[1,1,1,1],
     [0,0,1,0]],
    [[1,1,1,1],
     [0,1,1,0]],
    [[1,1,0],
     [0,1,1],
     [0,0,1]],
    [[1,1,1],
     [0,1,1],
     [0,0,1]],
    [[1,1,1],
     [1,1,1],
     [0,1,0]],
    [[1,1,1,0],
     [0,1,1,1],
     [0,1,1,0]]];
function rotations(p){
    const res = new Set();
    res.add(p);
    for(let n = 0;i<3;i++) {
        let sym = true;
        p2 = Array(p[0].length);
        for (let i = 0; i<p[0].length; i++) {
            p2[i].push(Array(p.length));
            for (let j = 0; j < p.length; j++) {
                p2[i].push(p[j][i]);
                if (sym && ((p[i][j]) != p[p.length-i][j])) sym = false;
            }
        }
        res.add(p2);
        if (sym) retrun res;
    }
    return res
}

var ar0 = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,6,23,27,1,6,27,31,2,31,9,35,1,35,6,39,1,10,39,43,2,9,43,47,1,5,47,51,2,51,6,55,1,5,55,59,2,13,59,63,1,63,5,67,2,67,13,71,1,71,9,75,1,75,6,79,2,79,6,83,1,83,5,87,2,87,9,91,2,9,91,95,1,5,95,99,2,99,13,103,1,103,5,107,1,2,107,111,1,111,5,0,99,2,14,0,0];


function run(a) {
    for (var i = 0; i < a.length; i+=4) {
        var opcode = a[i];
        var pos1 = a[i+1];
        var pos2 = a[i+2];
        var out = a[i+3];
        switch(opcode) {
            case 1:
                a[out] = a[pos1] + a[pos2];
                break;
            case 2:
                a[out] = a[pos1] * a[pos2];
                break;
            case 99:
                i = a.length;
                break;
            default:
                throw Error('Unexpected opcode');
        }
    }

    return a[0];
}

// 
// console.log(a);

for (var a = 0; a < 100; a++) {
    for (var b = 0; b < 100; b++) {
        ar = [...ar0];
        ar[1] = a;
        ar[2] = b;
        // console.log(ar);
        if (run(ar) == 19690720) {
            console.log(a, b);
        }
    }
}

ar0[1] = 80;
ar0[2] = 18;
console.log(run(ar0))
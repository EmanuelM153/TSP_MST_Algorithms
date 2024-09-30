function matprint(mat) {
    let shape = [mat.length, mat[0].length];
    function col(mat, i) {
        return mat.map(row => row[i]);
    }
    let colMaxes = [];
    for (let i = 0; i < shape[1]; i++) {
        colMaxes.push(Math.max.apply(null, col(mat, i).map(n => n.toString().length)));
    }

    var text = ""

    mat.forEach(row => {
        text += row.map((val, j) => {
            return new Array(colMaxes[j]-val.toString().length+1).join(" ") + val.toString() + "  ";
        }).toString() + "\n";
    });

    return text
}

module.exports = matprint
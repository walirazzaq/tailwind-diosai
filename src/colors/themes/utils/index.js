const flattenColors = function (ob) {
    var toReturn = {};
    var flatObject;
    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) {
            continue;
        }
        if ((typeof ob[i]) === 'object' && (Object.keys(ob[i]).includes('default') || Object.keys(ob[i]).includes('DEFAULT'))) {
            flatObject = flattenColors(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) {
                    continue;
                }
                toReturn[i + (!!isNaN(x) && x.toLocaleLowerCase() !== 'default' ? '-' + x : '')] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}
module.exports = {
    flattenColors
}

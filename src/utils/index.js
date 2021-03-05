/**
 *  深拷贝
 *  @param { object } origin
 *  @param { {} or [] } target
 */
function deepClone (origin, target) {
    let tar = target || {};

    for(let k in origin) {
        if (origin.hasOwnProperty(k)) {
            if (typeof( origin[k] === 'object') && origin[k] !== null) {
                tar[k] = Array.isArray(origin[i]) ? [] : {};
                deepClone(origin[k], tar[k])
            } else {
                tar[k] = origin[k];
            }
        }
    }
    return target
}

export default deepClone
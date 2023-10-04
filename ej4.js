function transformarATipos(array) {
    let array2 = [];
    for(let i = 0; i < array.length; i++) {
        array2[i] = typeof array[i];
    }
    
    return array2;
}

console.log(transformarATipos([1, "casa", {}]));

console.log(transformarATipos([function(){}, true]));
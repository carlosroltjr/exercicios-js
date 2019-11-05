let comparaComThis = function (param) {
    console.log(this === param); // neste caso this é global
}

comparaComThis(global);
comparaComThis(this);

const obj = {};
comparaComThis = comparaComThis.bind(obj); // agora this aponta pro obj

comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);

comparaComThisArrow(global);
comparaComThisArrow(module.exports);
comparaComThisArrow(this);

comparaComThisArrow = comparaComThisArrow.bind(obj);

comparaComThisArrow(obj);
comparaComThisArrow(module.exports);

// o this dentro da arrow function não tem como variar
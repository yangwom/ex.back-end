var valordaSoma = function (result) {
    console.log(result.a + result.b);
};
var seuendereço = function (andress) {
    console.log("seu endere\u00E7o \u00E9 ".concat(andress.endereço));
};
seuendereço({ endereço: 'rua do seu zé' });
valordaSoma({ a: 100, b: 200 });

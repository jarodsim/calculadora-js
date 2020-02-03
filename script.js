/**
 * Jarod Mateus
 */

function inseri(num) {
    document.form.tela.value = document.form.tela.value + num;
}

function resultado() {
    var expressao = document.form.tela.value;
    if ((expressao != null) || (expressao != '') || (expressao != undefined)) {
        document.form.tela.value = eval(expressao);
    }
}

function limpar() {
    document.form.tela.value = '';
}

function voltar() {
    var expressao = document.form.tela.value;
    document.form.tela.value = expressao.substring(0, expressao.length - 1);
}
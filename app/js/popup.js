/*jshint browser: true */
/*global chrome */
function transWiki() {
    var input = document.getElementById('inputArea');
    var output = document.getElementById('outputArea');
    var optRow = document.getElementsByName('optRow');
    var optCol = document.getElementsByName('optCol');
    var cbefore = document.getElementById('contentBefore');
    var cAfter = document.getElementById('contentAfter');
    var contBox = document.getElementById('contBox');
    var msg = document.getElementById('msg');

    cbefore.className = 'off';
    contBox.className = 'off';

    var result = input.value.replace(/\t/g, ' | ');
    result = result.replace(/\n/g, ' |\n| ');
    result = '| ' + result;

    var rHead = '';
    var rBody = result;

    if (optRow[0].checked == true) {
        var lineBreak = result.indexOf('\n');
        var fstRow = result.substr(0, lineBreak + 1);
        rHead = fstRow.replace(/\|/g, '||');
        rBody = result.substr(lineBreak + 1);
    }
    if (optCol[0].checked == true) {
        rBody = rBody.replace(/^\|+(.*?)\|+/gm, '||$1||');
    }
    rBody = rBody.replace(/\|.$/, '');
    output.innerHTML = rHead + rBody;

    cAfter.className = 'on';
    msg.className = 'on';
    output.focus();
}

function backWiki() {
    var input = document.getElementById('inputArea');
    var cbefore = document.getElementById('contentBefore');
    var cAfter = document.getElementById('contentAfter');
    var contBox = document.getElementById('contBox');
    var msg = document.getElementById('msg');

    msg.className = 'off';
    cAfter.className = 'off';
    cbefore.className = 'on';
    contBox.className = 'on';
    input.value = '';
    input.focus();
}

	  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#tran_btn').addEventListener('click', transWiki);
    document.querySelector('#back_btn').addEventListener('click', backWiki);
});

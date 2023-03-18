function transWiki() {
  console.log('transWiki')
  const input = document.getElementById('inputArea');
  const output = document.getElementById('outputArea');
  const optRow = document.getElementsByName('optRow');
  const optCol = document.getElementsByName('optCol');
  const cBefore = document.getElementById('contentBefore');
  const cAfter = document.getElementById('contentAfter');
  const contBox = document.getElementById('contBox');
  const msg = document.getElementById('msg');

  cBefore.className = 'off';
  contBox.className = 'off';

  let result = input.value.replace(/\t/g, ' | ');
  result = result.replace(/\n/g, ' |\n| ');
  result = '| ' + result;

  let rHead = '';
  let rBody = result;

  if (optRow[0].checked) {
    const lineBreak = result.indexOf('\n');
    const fstRow = result.substring(0, lineBreak + 1);
    rHead = fstRow.replace(/\|/g, '||');
    rBody = result.substring(lineBreak + 1);
  }

  if (optCol[0].checked) {
    rBody = rBody.replace(/^\|+(.*?)\|+/gm, '||$1||');
  }

  rBody = rBody.replace(/|.$/, '');
  output.innerHTML = rHead + rBody;

    cAfter.className = 'on';
    msg.className = 'on';
    output.focus();
}

function backWiki() {
  console.log('backWiki')
  const input = document.getElementById('inputArea');
  const cBefore = document.getElementById('contentBefore');
  const cAfter = document.getElementById('contentAfter');
  const contBox = document.getElementById('contBox');
  const msg = document.getElementById('msg');

  msg.className = 'off';
  cAfter.className = 'off';
  cBefore.className = 'on';
  contBox.className = 'on';
  input.value = '';
  input.focus();
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#tran_btn').addEventListener('click', transWiki);
  document.querySelector('#back_btn').addEventListener('click', backWiki);
});
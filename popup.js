/*jshint browser: true */
/*global chrome */
function transWiki(){
var input = document.getElementById('inputArea');
var output = document.getElementById('outputArea');
var option = document.getElementsByName('optionTh');
var cbefore = document.getElementById('contentBefore');
var cAfter = document.getElementById('contentAfter');
var contBox = document.getElementById('contBox');

cbefore.className='off';

var result = input.value.replace(/\t/g,' | ');
result = result.replace(/\n/g,' |\n| ');
result = '| '+ result;
var lastBar;
if(option[0].checked == true){
var nCount = result.indexOf('\n');
var oneRow = result.substr(0, nCount);
var	rHead = oneRow.replace(/\|/g,'||');
lastBar = result.lastIndexOf('|')-nCount;
var rBody = result.substr(nCount, lastBar);
output.innerHTML = rHead + rBody;
}else{
lastBar = result.lastIndexOf('|');
var rBody = result.substr(0,lastBar);
output.innerHTML = rBody;
}
cAfter.className='on';
contBox.innerHTML = '<span class="succeed"></span>&nbsp;&nbsp;<strong>Complete</strong>&nbsp;&nbsp;-&nbsp;&nbsp;변환완료 :)'
output.focus();
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', transWiki);
});
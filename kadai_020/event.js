// btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const textValue = document.getElementById('text');


// HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click', () => {

// ドキュメントが読み込まれたときに関数を実行する
textValue.textContent ='ボタンをクリックしました';

});













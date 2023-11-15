//日付の取得
const today = new Date();


//年
const todaysYear = today.getFullYear();

//月
const todaysMonth = today.getMonth();

//日
const todaysDay = today.getUTCDate();


//出力
console.log(todaysYear+'年'+todaysMonth+'月'+todaysDay+'日');
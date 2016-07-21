/*javascript
	HTMLでフォームに入力された言葉をどうやって返すか？*/
//↓プログラム書き場

//選択肢返答サンプル
function goScript(num) {
	num++;
	switch(num){
		case 1:
			alert("こんにちは!");
			break;
		case 2:
			alert("こんばんは!");
			break;
		
	}
	document.write("更新してください");

}
/*「こんにちは」か「こんばんは」に"Hello"と返す処理*/
function onButtonClick() {
          target = document.getElementById("output");
          

        /*
		 * 検索対象文字列
		 */
		 var str = document.forms.kaiwa.kaiwatext.value;
		 
		/*
		 * 指定した文字列が存在する位置を検索する
		 */
			if(str.indexOf("こんにちは")!=-1 || str.indexOf("こんばんは")!=-1){
				document.write("Hello");
		}else if(str.indexOf("おはよ")!=-1){
			document.write("おはようなぎ");
		}else if(str.indexOf("おまえはもう死んでいる")!=-1){
			document.write("なにぃ！！　い！？　いが、いぎ、いぐ　いけごあぁ！！");
		}else if(str.indexOf("金よこせガキ")!=-1){
			document.write("ごめんなさい持ってません");
		}else if(str.indexOf("33-4")!=-1){
			document.write("なんでや阪神関係ないやろ！");
		}else if(str.indexOf("今日の日付は")!=-1){
			var today = new Date();
			document.write("今日は"+today.getFullYear()+"年"
							+(today.getMonth()+1)+"月"+
								today.getDate()+"日です。");
		}else if(str.indexOf("今何時")!=-1){
			var hour= new Date();
			document.write(hour.getHours()+"時間"
							+hour.getMinutes()+"分"+
								hour.getSeconds()+"秒です。");
			}else{
			document.write("すみません何言っているのかわかりません");
      }
          
}
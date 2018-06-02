/* bxSlider */
$(function(){
	$("#bxslider").bxSlider({
  mode:'fade',//’horozontal’,'vertical','fade'
  speed:1000,//1秒かけてアニメーション移動(2000＝2秒)
  starslide:0,//最初のスライドを設定：0からカウント
  auto:true,//自動再生「true=ON、false=OFF]
  autoConsole:true,//自動再生のコントローラーを表示「true=ON、false=OFF]
  adaptiveHeight:true,//高さが大きい場合に自動でフィットします
  captions:false, //true=imgタグのtitle属性を表示「true=表示、false=非表示]
  pager: false
  });
});

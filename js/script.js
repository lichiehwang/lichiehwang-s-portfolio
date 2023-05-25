$(document).ready(function() {
  // Accordion functionality
  $('.title').on('click', function() {
    $('.box').slideUp(500);
    
    var findElm = $(this).next(".box");
    
    if ($(this).hasClass('close')) {
      $(this).removeClass('close');
    } else {
      $('.close').removeClass('close');
      $(this).addClass('close');
      $(findElm).slideDown(500);
    }
  });
  
  // Hide all boxes on page load
  $('.box').hide();
  
  // Open specific accordion items on page load
  $(window).on('load', function() {
    $(".accordion-area li:first-of-type section").removeClass("open");
    $(".open").each(function(index, element) {
      var Title = $(element).children('.title');
      $(Title).addClass('close');
      var Box = $(element).children('.box');
      $(Box).slideDown(500);
    });
  });
  
  // Web click event
  $('.web').on('click', function() {
    // Perform click operation logic
    // Example: Print the clicked website's title in the console
    var title = $(this).find('h3').text();
    console.log('Clicked:', title);
  });
});



//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});
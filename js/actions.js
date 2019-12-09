var posNav = $(".navbar").offset().top;
variavel();
ifScroll();
// on scroll
$(window).scroll(function(){
	ifScroll();
	
});
// variaveis do site
function variavel(){
	$(".caixaNavbar").css("top",$(".first").height()-($(".caixaNavbar").height()/2));
	$(".imgTipoPerda").width($(window).width()*0.6);
	$(".imgTipoPerda").height($(".imgTipoPerda").width()*(546/939));
	$(".banner1").height($(".banner1").width()*(1117/4000));
	$(".boxCarta").height($(".boxCarta").width());
	$(".boxAparelho").height($(".boxAparelho").width());
	var hFirst = $(".first").height();
	$(".opacity").height(hFirst);
	$(".text").height(hFirst);
	$(".navbar").height($(".navbar a").height());
	var tangente = Math.tan(20);
	var espaco = $(".bannerSombraTop").height()/tangente;
	$(".bannerSombraTop").css("transform","translateX("+espaco+"px) skewX(40deg)");
	$(".bannerSombraBot").css("transform","translateX("+(-espaco)+"px) skewX(40deg)");
	$(".bannerTitle").css("margin-top",($(".caixaNavbar").height()/2)+15);
	$(".bannerTitle").css("margin-bottom",($(".caixaNavbar").height()/2)+15);
	$(".faixa").height($(".bannerTitle").height()-$(".bannerSombraTop").height()-$(".bannerSombraBot").height());
	$(".faixa").css("margin-top",(($(".bannerTitle").height()/2)-($(".faixa").height()/2))+parseInt($(".bannerTitle").css("marginTop")));

}
// is scroll
function ifScroll(){
	if ($(document).scrollTop() >= posNav) {
	  $(".navbar").addClass("fixed");
	} 
	else {
		posNav = $(".navbar").offset().top;
		$(".navbar").removeClass("fixed");
	}
	for(var i=1;i<$("section").size();i++){
		if ($(document).scrollTop()+10>=$("section").eq(i).offset().top && $(document).scrollTop()+10<=($("section").eq(i).offset().top)+($("section").eq(i).height())) {
			$(".navbar a").eq(i-1).addClass("active");
		}
		else{
			$(".navbar a").eq(i-1).removeClass("active");
		}
	}
	variavel();
}

$(window).resize(function() {
	variavel();
});
// --------------maquina--de--escrever------------------
// palavras de incentivo
var palavras=['amor','solidariedade','saúde','bem-estar','futuro','alegria','acessibilidade','pessoas'];
var num,gerador;
function gerarPalavras(){
	for(gerador=parseInt(Math.random() * (palavras.length));num==gerador;gerador=parseInt(Math.random() * (palavras.length)));
	num = gerador;
	letterForLetter(palavras[num]);
}
function chamarGerar(){
	gerarPalavras();
	setTimeout(chamarGerar,3500);
}
chamarGerar();

function letterForLetter(palavras){
var textoArray = palavras.split('');
	var texto="";
	textoArray.forEach((letra,i)=>{
		setTimeout(
			()=>{
				texto+=letra;
		 	$(".palavras").text(texto);
			},
			100*i);
	});
}
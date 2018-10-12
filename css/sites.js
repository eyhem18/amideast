$(".image-caption").slideDown();
var lengthOfDiv = $(".textOverImage").length
// alert(lengthOfDiv)
for (let index =0; index <= lengthOfDiv ; index++) {
    $(".image"+index).mouseenter(function(){
        $(".image-caption"+index).css("display" , "block")
    })
    $(".image"+index).mouseleave(function(){
        $(".image-caption"+index).css("display" , "none")
    })
    
}


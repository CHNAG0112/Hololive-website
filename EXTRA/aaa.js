window.onload =function(){
// 取得標籤
var slider= document.getElementById("slider");
var slider_main=document.getElementById("slider_main");
var allBoxes= slider_main.children;
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var slider_index=document.getElementById(slider_index);
// 創建動態索引
for(var i=0;i<allBoxes.length;i++){
var span=document.createElement("span");
if(i==0){
    span.className ="slider_index_icon current ";
    }else{
        span.className="slider_index_icon"
    }
    span.innerText=i+1;
    slider_index.appendChild(span);
    
}

}



}


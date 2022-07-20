let theButton=document.querySelector(".box button");
let input=document.querySelector(".box input");
let img=document.querySelector(".box .img img");
let info=document.querySelectorAll(".info > div");
let ok=document.querySelector(".fa-thumbs-up");
let disok=document.querySelector(".fa-thumbs-down");
let span1=document.querySelector(".like .one span");
let span2=document.querySelector(".like .two span");
let span=document.querySelector(".clip .pra span");
let imgs=document.querySelectorAll(".info img");
let contanerimg=document.querySelector(".img")
let mainimg=document.querySelector(".img img");
let num1=0;
let num2=0;
let imgarry=[];
for(let i=0;i<imgs.length;i++){
    imgarry.push(imgs[i]);
    // console.log(imgarry[i].src);
}
imgarry.forEach(element => {
    element.addEventListener("click",function(){
        document.querySelector(".img img").remove();
        let img=document.createElement("img");
        img.src=element.src;
        contanerimg.append(img);
        span.innerHTML="";
        span.innerHTML=element.parentNode.getAttribute("data-eng");
        

    })
});
theButton.addEventListener(("click"),function(e){
    
    if(input.value==="serbian"){
        for(let r=0;r<info.length;r++){
            if(span.innerHTML===info[r].getAttribute("data-eng")){
                span.innerHTML="";
                span.innerHTML=info[r].getAttribute("data-ser");
            }
        }
        
    }else if(input.value==="English"){
        for(let r=0;r<info.length;r++){
            if(span.innerHTML===info[r].getAttribute("data-ser")){
                span.innerHTML="";
                span.innerHTML=info[r].getAttribute("data-eng");
            }
        }
    }
                
 })
 theButton.addEventListener(("keydown"),function(e){
                if(input.value!==""){
                      for(let h=0;h<info.length;h++){
                        if(input.value===info[h].innerHTML){
                            span.innerHTML="";
                            span.append(input.value);
                        }
                      }
            }
})
ok.addEventListener("click",function(){
    if(num1<20){
        num1++;
        span1.innerHTML="";
        span1.append(num1);
    }
})
disok.addEventListener("click",function(){
   if(num2<20){
        num2++;
        span2.innerHTML="";
        span2.append(num2);
   }
})
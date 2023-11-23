index=7;




  let slider=document.querySelectorAll(".slider")
  let slider1=document.querySelectorAll(".slider>div")




let m=Array.from(slider1)

      let restInterval;
     restInterval=setInterval(autoPlay,2000)
       let rotate=0;
            // let rotate1=-45;
       function autoPlay(){
      slider1.forEach((item)=>{item.classList.remove("event")})
      rotate+=45;
      slider.forEach((element,ind)=>{setTimeout(()=>{element.style.transform = ` perspective(1000px) rotateY(${rotate}deg)`;},ind*300)}) 
          m[index-1].classList.add("event")
          m[index-1].addEventListener("mouseenter",enterFunc)
          m[index-1].addEventListener("mouseleave",leaveFunc)

                if(index<=1)
                {
                  index=9
                }
                index--;

       }

       function enterFunc(){
        console.log("enter Func");
        clearInterval(restInterval)
       }
       function leaveFunc(){
        console.log("out Func");
        restInterval=setInterval(autoPlay,2000)
       }


       function back(){
    

        enterFunc()
        slider1.forEach((item)=>{item.classList.remove("event")})

        index++;

        rotate-=45;
        slider.forEach((element,ind)=>{setTimeout(()=>{element.style.transform = ` perspective(1000px) rotateY(${rotate}deg)`;},ind*300)}) 
if(index>=9){
  index=1
}
leaveFunc()
       }

       function front(){
        enterFunc()
        slider1.forEach((item)=>{item.classList.remove("event")})

        index--;
     
        rotate+=45;
        slider.forEach((element,ind)=>{setTimeout(()=>{element.style.transform = ` perspective(1000px) rotateY(${rotate}deg)`;},ind*300)}) 
if(index<=0){
  index=8
}
leaveFunc()
       }
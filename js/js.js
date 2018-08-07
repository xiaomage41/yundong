window.onload=function(){
    let p=document.querySelector(".concent_top")
    let s=document.querySelector(".concent_s")
    let o=document.querySelector(".small")
    let wh=innerHeight;
    let u=document.querySelectorAll(".banner_tu")
    let po=document.querySelector(".sdf")
    let g=document.querySelector(".banner_btn")
    let f=document.querySelector(".banner_btn1")
    let h=document.querySelectorAll(".span")
    let widths =parseInt(getComputedStyle(po,null).width);
    let next=0;
    let now=0;
    function move(){
        next++;
        if(next==u.length){
            next=0
        }
        u[next].style.left=widths+"px";
        animate(u[now],{left:-widths});
        animate(u[next],{left:0});
        h[now].classList.remove("hot");
        h[next].classList.add("hot");
        now=next;
    }
    function move1(){
        next--;
        if(next<0){
            next=u.length-1;
        }
        u[next].style.left=-widths+"px";
        animate(u[now],{left:widths});
        animate(u[next],{left:0});
        h[now].classList.remove("hot");
        h[next].classList.add("hot");
        now=next
    }
    g.onclick=function(){
        move1()
    }
    f.onclick=function(){
        move();
    }
    window.onscroll=function(){
        let st=document.body.scrollTop||document.documentElement.scrollTop
        if(wh+st>wh){
            s.style.boxShadow=" 0 -10px 15px 10px rgba(229, 229, 229, 1)"
            p.style.top="-186px"
        }
        if(wh+st>wh+300){
            o.style.display="block"
        }
    }












}
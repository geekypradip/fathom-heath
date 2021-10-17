var button =document.querySelectorAll('.button');
var box=document.querySelectorAll('.jsshow');
button[0].style.color="#000";
button[0].onclick=function(){
   button[0].style.color="#000";
    for(var i=0;i<box.length;i++){
       box[i].style.display='block';
       if(i!=0)
       button[i].style.color="#5f6872"
    }
    // alert("You clicked")
}
    // alert("You clicked 2nd part")
    
    button[1].onclick = function(){
        for(var k=0;k<box.length;k++){
            box[k].style.display='none';
            if(k!=1)
            button[k].style.color="#5f6872"
            else
            button[k].style.color="#000"
         }
        var contant=document.getElementsByClassName("1");
        for(var j=0;j<contant.length;j++){
            contant[j].style.display='block';
        }
    }
    button[2].onclick = function(){
        for(var k=0;k<box.length;k++){
            box[k].style.display='none';
            if(k!=2)
            button[k].style.color="#5f6872"
            else
            button[k].style.color="#000"
         }
        var contant=document.getElementsByClassName("2");
        for(var j=0;j<contant.length;j++){
            contant[j].style.display='block';
        }
    }
    button[3].onclick = function(){
        for(var k=0;k<box.length;k++){
            box[k].style.display='none';
            if(k!=3)
            button[k].style.color="#5f6872"
            else
            button[k].style.color="#000"
         }
        var contant=document.getElementsByClassName("3");
        for(var j=0;j<contant.length;j++){
            contant[j].style.display='block';
        }
    }
    button[4].onclick = function(){
        for(var k=0;k<box.length;k++){
            box[k].style.display='none';
            if(k!=4)
            button[k].style.color="#5f6872"
            else
            button[k].style.color="#000"
         }
        var contant=document.getElementsByClassName("4");
        for(var j=0;j<contant.length;j++){
            contant[j].style.display='block';
        }
    }
    button[5].onclick = function(){
        for(var k=0;k<box.length;k++){
            box[k].style.display='none';
            if(k!=5)
            button[k].style.color="#5f6872"
            else
            button[k].style.color="#000"
         }
        var contant=document.getElementsByClassName("5");
        for(var j=0;j<contant.length;j++){
            contant[j].style.display='block';
        }
    }
var box, container;
    container = document.getElementById("container");
    for(var i=0;i<5; i++){
    // for(let i=0;i<5; i++){
        box=document.createElement("span");
        box.style.display = 'inline-block';
        box.style.width =  '100px'; 
        box.style.height = '100px';
        box.style.margin = '10px';
        box.style.backgroundColor = 'rgb(138, 43, 226)';
        box.onclick= function(){
            alert("This is box #"+i);
        }
        container.appendChild(box);
    }


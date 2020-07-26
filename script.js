
//for selecting various otts
var buttons=document.querySelectorAll('button');
var i;
var selection=document.getElementById('selection');

//list for all the items selected
var list=[];
//loop through the platform selection buttons and add them to the selection list
for (i = 2; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {

      var val=event.target.value+" ";
      if(list.includes(event.target.value)){
        console.log("already in the list");
      }
      else{
        selection.appendChild(document.createTextNode(val));
        list.push(event.target.value);
      }
})
};

//for select all button
var all =document.getElementById('selectall');
var item=['Prime','Netflix','Hotstar','Aha'];

function allIn(){
  if(list.length==0){
  for (let i=0;i<item.length;i++){
    selection.appendChild(document.createTextNode(item[i]+' '));
    list.push(item[i]);
  }
 }
 else if(list.length<item.length){
   for(let j=0;j<item.length;j++){
     if(list.includes(item[j])){
       console.log("already in list");
     }
     else{
       selection.appendChild(document.createTextNode(item[j]+' '));
       list.push(item[j]);
     }
   }
 }

}

all.addEventListener("click",allIn);

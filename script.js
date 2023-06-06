alert("Hi I'm Susmitha");
var data1={image : "abc.jpg",name : " Susmitha Reddy Banda", designation:"Student"};
var data2={image : "edf.jpg",name : "B.Susmitha Reddy", designation:"student"};
var isdata1 = true;
var displaydata;
var changemypic = function(){
    if(isdata1){
        displaydata= data2;
        isdata1 = false;
    }
    else{
        displaydata = data1;
        isdata1=true;
    }
    document.getElementById("myimage").src=displaydata.image;
    document.getElementById("myname").innerHTML=displaydata.name;
    document.getElementById("mydesig").innerHTML=displaydata.designation;
}
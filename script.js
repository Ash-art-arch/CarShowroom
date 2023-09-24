const rightButton = document.querySelector("#icon1");
const leftButton = document.querySelector("#icon2");
const img=document.querySelector("#imagescontainer1")
const head= document.querySelector("#head2");
const body=document.querySelector("#body2x  ")
const data=[{
    url:"images/car1.jpg",
    title:"Mustang",
    description:"Ford Mustang: The Ford Mustang is an iconic American sports car produced by the Ford Motor Company. It was first introduced in 1964 and has since become one of the most recognizable and enduring muscle cars in automotive history. The Mustang is known for its sleek and distinctive design, powerful engines, and affordable price point. It has gone through multiple generations and variations, with models ranging from the base V6 to high-performance Shelby GT500 versions.",
},{
    url:"images/car2.jpg",
    title:"Chevy",
    description:"Ford Mustang: The Ford Mustang is an iconic American sports car produced by the Ford Motor Company. It was first introduced in 1964 and has since become one of the most recognizable and enduring muscle cars in automotive history. The Mustang is known for its sleek and distinctive design, powerful engines, and affordable price point. It has gone through multiple generations and variations, with models ranging from the base V6 to high-performance Shelby GT500 versions.", 

}

]
var count=0;
console.log(data.length);
rightButton.addEventListener('click',()=>{
   count=(count+1)%data.length;
   
//   document.querySelector(`#imagescontainer${count+1}`).style.backgroundImage=`url(${data[count].url})`;
//    head.innerText=`${data[count].title}`;
//    body.innerText=`${data[count].description}`

document.querySelector(`#content-wrapper${count}`).style.transform="translateX(-100%) ";
document.querySelector(`#content-wrapper${count+1}`).style.transform="translateX(-100%) ";

})
leftButton.addEventListener('click',()=>{
    if(count<0){
        count =data.length-1;
        
       }
       else{
        count--;
       }
       console.log(count);
       document.querySelector(`#content-wrapper${count+2}`).style.transform="translateX(0%) ";
        document.querySelector(`#content-wrapper${count+1}`).style.transform="translateX(0%) ";
    
})
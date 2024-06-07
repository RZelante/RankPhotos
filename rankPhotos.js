"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Ricardo Zelante
      Date: 03/12/2023   

      Filename: rankPhotos.js
*/
let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

for(let imgCntr = 0; imgCntr < images.length; imgCntr++){
      images[imgCntr].onclick = function(){
            if(this.parentElement.id == "photo_bucket"){
                  let newItem = document.createElement("li");
                  newItem.appendChild(this);
                  photoList.append(newItem);
            }
            else{
                  let oldItem = this.parentElement;
                  photoBucket.appendChild(this);
                  oldItem.parentElement.removeChild(oldItem);
            }
      }
      
     
}

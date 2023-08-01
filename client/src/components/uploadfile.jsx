 import React, { useState } from "react"
 import $ from 'jquery'
 const UploadFile=()=>{
    const [image,setImage]=useState();
  
      const imagesPreview =(e)=>{
         const files=e.target.files
         for(let file of files)
            setImage(file)
          
         console.log(image)
          for (let i = 0; i < e; i++) {
            let reader = new FileReader();
            reader.onload = function(event) {
                setImage(event.target.result)
            };
         
            reader.readAsDataURL(e.files[i]);
          }
        }
return (    
    <div className="container">
      <div className="row">
        <div className="col-sm-8 mt-3">
          <h4>Node.js upload images - bezkoder.com</h4>

          <form
            className="mt-4"
            action="http://localhost:8080/upload"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="form-group">
              <input
                type="file"
                name="file"
                multiple
                id="input-files"
                className="form-control-file border"
                onChange={(e)=>imagesPreview(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <div className={"preview-images"+(image?"":" d-none")}>
           
               <img src={image} key={Math.random()} alt="file to be placed"/>
           
            {/* <img src={image} alt="file to be placed"/> */}
          </div>
        </div>
      </div>
    </div>)
 }
 export default UploadFile;
 
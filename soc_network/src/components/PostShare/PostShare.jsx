import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";


const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img alt="" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOptions">
        <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            Photo
          </div>
          <div className="option">
            Video
          </div>
          <div className="option">
            Location
          </div>
          <div className="option">
            Shedule
          </div>
          <button className="button ps-button">Share</button>
          <div>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PostShare;

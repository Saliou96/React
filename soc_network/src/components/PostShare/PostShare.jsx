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
            {/* <UilScenery />
            Photo */}
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            {/* <UilPlayCircle />
            Video */}
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            {/* <UilLocationPoint />
            Location */}
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            {/* <UilSchedule />
            Shedule */}
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
      {/* {image && (

        <div className="previewImage">
          {/* <UilTimes onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" /> */}

      </div>
    </div>
  );
};

export default PostShare;

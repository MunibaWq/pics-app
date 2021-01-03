import React, { useEffect, useRef } from "react";

const ImageCard = (props) => {
  const { description, urls } = props.image;
  const imageRef = useRef();

  useEffect(() => {
    console.log(imageRef.current);
    console.log(imageRef.current.clientHeight);
    imageRef.current.addEventListener("load", setSpans);
    //   effect
    //   return () => {
    //       cleanup
    //   }
  });

  const setSpans = () => {
    console.log("setSpans " + imageRef.current.clientHeight);
  };

  return (
    <div>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;

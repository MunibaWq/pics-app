import React, { useEffect, useRef, useState } from "react";

const ImageCard = (props) => {
  const { description, urls } = props.image;
  const imageRef = useRef();
  const [spans, setSpans] = useState(0);

  useEffect(() => {
    console.log(imageRef.current);
    console.log(imageRef.current.clientHeight);
    imageRef.current.addEventListener("load", setSpan);
    //   effect
    //   return () => {
    //       cleanup
    //   }
  });

  const setSpan = () => {
    const height = imageRef.current.clientHeight;
    const span = Math.ceil(height / 10);
    setSpans(span);
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;

import React, { useEffect } from "react";

const ImageCard = (props) => {
  const { description, urls } = props.image;
  const imageRef = React.useRef();

  useEffect(() => {
    console.log(imageRef.current);
    console.log(imageRef.current.clientHeight);
    //   effect
    //   return () => {
    //       cleanup
    //   }
  });

  return (
    <div>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;

import React, { useRef } from "react";

const withCanvas = WrappedComponent => {
  return props => {
    const canvasRef = useRef(null);
    
    const resize = (src, height, filename = null, mimeType = "image/jpeg") => {
      return new Promise(resolve => {
        const image = new Image();
        const canvas = canvasRef.current;
        image.onload = () => {
          if (image.height > height) {
            image.width *= height / image.height;
            image.height = height;
          }
          const ctx = canvas.getContext("2d");
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0, image.width, image.height);

          if(filename) {
            canvas.toBlob((blob) => {
              blob.name = filename;
              resolve(blob);
            }, mimeType);
          }
          else {
            resolve(canvas.toDataURL(mimeType));
          }
        };

        image.src = src;
      });
    }

    return (
      <>
        <WrappedComponent
          {...props}
          canvas={{
            resize
          }}
        />
        <canvas style={{ display: "none" }} ref={canvasRef} />
      </>
    );
  };
};

export default withCanvas;
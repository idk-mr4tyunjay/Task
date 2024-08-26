import React, { useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageCropper = ({ onImageCropped }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const imgRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const getCroppedImage = (image, crop) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    });
  };

  const handleCropComplete = async (crop) => {
    if (crop.width && crop.height && imgRef.current) {
      const croppedImage = await getCroppedImage(imgRef.current, crop);
      onImageCropped(croppedImage);
      setCompletedCrop(croppedImage); // Update completedCrop for preview
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageSrc && (
        <ReactCrop
          src={imageSrc}
          crop={crop}
          onChange={setCrop}
          onComplete={handleCropComplete}
          imageRef={imgRef}
          style={{ maxWidth: '100%' }}
        />
      )}
      {completedCrop && (
        <div>
          <h3>Cropped Image</h3>
          <img
            alt="Crop"
            src={completedCrop}
            style={{
              border: '1px solid black',
              maxWidth: '200px', // Adjust as needed
              maxHeight: '200px', // Adjust as needed
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCropper;

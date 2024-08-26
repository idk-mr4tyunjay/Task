import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import Compressor from 'compressorjs';
import 'react-image-crop/dist/ReactCrop.css';

const ImageCropper = ({ onImageCropped }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 });
  const [completedCrop, setCompletedCrop] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
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

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        const fileUrl = URL.createObjectURL(blob);
        new Compressor(blob, {
          quality: 0.8,
          success(result) {
            const reader = new FileReader();
            reader.onloadend = () => {
              resolve(reader.result);
            };
            reader.readAsDataURL(result);
          },
          error(err) {
            console.error('Image compression error:', err);
            reject(err);
          },
        });
      });
    });
  };

  const handleCropComplete = async (crop) => {
    if (crop.width && crop.height) {
      const croppedImage = await getCroppedImage(
        document.querySelector('.ReactCrop__image'),
        crop
      );
      onImageCropped(croppedImage);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageSrc && (
        <ReactCrop
          src={imageSrc}
          crop={crop}
          onChange={newCrop => setCrop(newCrop)}
          onComplete={handleCropComplete}
        />
      )}
    </div>
  );
};

export default ImageCropper;

import React from "react";
import { useOutletContext } from "react-router-dom";

const PhotosPage = () => {
  const { photographerData, selectedCategory } = useOutletContext();

  function getAllPhotoObjects() {
    if (!photographerData?.work_list) return [];
    const allPhotoObjects = [];
    photographerData.work_list.forEach((work) =>
      work.photos.forEach((photoURL) =>
        allPhotoObjects.push({
          url: photoURL,
          category: work.work_type,
        })
      )
    );
    return allPhotoObjects;
  }

  function getFilteredPhotos() {
    const allPhotos = getAllPhotoObjects();

    if (selectedCategory === "all") {
      return allPhotos;
    }

    return allPhotos.filter((photo) => photo.category === selectedCategory);
  }

  const filteredPhotos = getFilteredPhotos();

  const imageCardElements = filteredPhotos.map((photo, index) => (
    <div key={index} className="image-card">
      <img src={photo.url} alt={`${photo.category} ${index}`} />
    </div>
  ));

  return filteredPhotos.length === 0 ? (
    <div className="no-data-div">
      <p>No photos available for the selected category</p>
    </div>
  ) : (
    <div className="photos-container">{imageCardElements}</div>
  );
};

export default PhotosPage;

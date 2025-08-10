import React from "react";
import { useOutletContext } from "react-router-dom";

const VideosPage = () => {
  const { photographerData, selectedCategory } = useOutletContext();

  function getAllVideoObjects() {
    if (!photographerData?.work_list) return [];
    const allVideoObjects = [];
    photographerData.work_list.forEach((work) =>
      work.videos?.forEach((videoURL) =>
        allVideoObjects.push({
          url: videoURL,
          category: work.work_type,
        })
      )
    );
    return allVideoObjects;
  }

  function getFilteredVideos() {
    const allVideos = getAllVideoObjects();

    if (selectedCategory === "all") {
      return allVideos;
    }

    return allVideos.filter((video) => video.category === selectedCategory);
  }

  const filteredVideos = getFilteredVideos();

  const videoCardElements = filteredVideos.map((video, index) => (
    <div key={index} className="video-card">
      <video controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ));

  return filteredVideos.length === 0 ? (
    <div className="no-data-div">
      <p>No videos available for the selected category</p>
    </div>
  ) : (
    <div className="videos-container">{videoCardElements}</div>
  );
};

export default VideosPage;

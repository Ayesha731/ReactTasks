import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import PMPhotographerProfile from "../../components/PMPhotographerProfile/PMPhotographerProfile";
import PMTabs from "../../components/PMTabs/PMTabs";
import PMGalleryContent from "../../components/PMGalleryContent/PMGalleryContent";
import PMLoadingSpinner from "../../components/PMLoadingSpinner/PMLoadingSpinner";
import { getApiWithAuth } from "../../api/api";
import { SEARCH_PHOTOGRAPHER_BY_ID_URL } from "../../api/apiUrls";
import "./PhotographerProfileScreenStyle.css";

const PhotographerProfileScreen = () => {
  const { id } = useParams(); // Get photographer ID from URL
  const navigate = useNavigate();

  const [photographerData, setPhotographerData] = useState(null);
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState(["all"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("portfolio"); // "portfolio" or "packages"

  useEffect(() => {
    const fetchPhotographerDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("Fetching photographer details for ID:", id);

        const response = await getApiWithAuth(
          `${SEARCH_PHOTOGRAPHER_BY_ID_URL}/${id}`
        );

        if (response.success) {
          console.log("Photographer details:", response.data.data);
          setPhotographerData(response.data.data);

          // Extract unique categories from work_list
          if (
            response.data.data.work_list &&
            response.data.data.work_list.length > 0
          ) {
            const uniqueCategories = [
              ...new Set(
                response.data.data.work_list.map((work) => work.work_type)
              ),
            ];
            setCategories(["all", ...uniqueCategories]);
          }
        } else {
          console.error("Error fetching photographer details:", response.data);
          setError("Failed to fetch photographer details");
        }
      } catch (error) {
        console.error("Error:", error);
        setError("Network error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPhotographerDetails();
    }
  }, [id]);

  // Handle Portfolio button click
  const handlePortfolioClick = () => {
    setViewMode("portfolio");
    setActiveTab("photos"); // Reset to photos when switching to portfolio
  };

  // Handle package button click
  const handlePackageClick = () => {
    setViewMode("packages");
  };

  // Handle package selection
  const handlePackageSelect = (packageType) => {
    console.log(`Selected package: ${packageType} for photographer ${id}`);
    navigate(`/checkout?photographerId=${id}&package=${packageType}`);
  };

  // Helper functions to extract data from API response
  const getAllPhotoObjects = () => {
    if (!photographerData?.work_list) return [];
    const allPhotoObjects = [];
    photographerData.work_list.forEach((work) =>
      work.photos?.forEach((photoURL) =>
        allPhotoObjects.push({
          url: photoURL,
          category: work.work_type,
        })
      )
    );
    return allPhotoObjects;
  };

  const getAllVideoObjects = () => {
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
  };

  const getFilteredPhotos = () => {
    const allPhotos = getAllPhotoObjects();
    if (selectedCategory === "all") {
      return allPhotos.map((photo) => photo.url);
    }
    return allPhotos
      .filter((photo) => photo.category === selectedCategory)
      .map((photo) => photo.url);
  };

  const getFilteredVideos = () => {
    const allVideos = getAllVideoObjects();
    if (selectedCategory === "all") {
      return allVideos.map((video) => video.url);
    }
    return allVideos
      .filter((video) => video.category === selectedCategory)
      .map((video) => video.url);
  };

  const getReviews = () => {
    if (photographerData?.reviews) {
      return photographerData.reviews.map((review) => ({
        id: review.id || Math.random(),
        user: review.reviewer_name || review.user || "Anonymous",
        text: review.comment || review.text || "No comment provided",
        avatar: review.avatar || null,
        rating: review.rating || 5,
        time: review.time || "2d ago",
      }));
    }

    // Return empty array - let PMGalleryContent handle fallback
    return [];
  };

  // Prepare data for PMGalleryContent
  const photos = getFilteredPhotos();
  const videos = getFilteredVideos();
  const reviews = getReviews();

  if (loading) {
    return <PMLoadingSpinner text="Loading photographer details..." />;
  }

  if (error && !photographerData) {
    return (
      <div>
        <PMNavbar />
        <PMMainHeroSection>
          <div className="error-container">
            <p>Error: {error}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        </PMMainHeroSection>
      </div>
    );
  }

  return (
    <div>
      <PMNavbar />
      <PMMainHeroSection>
        <div className="porfile-upper-section">
          <PMPhotographerProfile
            image={
              photographerData?.profile_image_url ||
              photographerData?.avatar_url
            }
            name={
              photographerData?.full_name ||
              photographerData?.name ||
              "Unknown Photographer"
            }
            type={photographerData?.work_list?.[0]?.work_type || "Photographer"}
            rating={photographerData?.average_rating || 4.0}
            totalReviews={photographerData?.total_reviews || 0}
            showButtons={false} // Hide default buttons
            showCustomButtons={true} // Show custom buttons
            onPortfolioClick={handlePortfolioClick}
            onPackageClick={handlePackageClick}
          />
        </div>

        <div className="porfile-lower-section">
          {/* Only show tabs when in portfolio mode */}
          {viewMode === "portfolio" && (
            <PMTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
          )}

          {/* Gallery Content with view mode */}
          <PMGalleryContent
            activeTab={activeTab}
            photos={photos}
            videos={videos}
            reviews={reviews}
            selectedCategory={selectedCategory}
            viewMode={viewMode}
            onPackageSelect={handlePackageSelect}
          />
        </div>
      </PMMainHeroSection>
    </div>
  );
};

export default PhotographerProfileScreen;

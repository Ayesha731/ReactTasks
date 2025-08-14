import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import PMPhotographerProfile from "../../components/PMPhotographerProfile/PMPhotographerProfile";
import PMTabs from "../../components/PMTabs/PMTabs";
import PMGalleryContent from "../../components/PMGalleryContent/PMGalleryContent";
import PMLoadingSpinner from "../../components/PMLoadingSpinner/PMLoadingSpinner";
import { getApiWithAuth } from "../../api/api";
import {
  SEARCH_PHOTOGRAPHER_BY_ID_URL,
  GET_PHOTOGRAPHER_PACKAGES_URL,
} from "../../api/apiUrls";
import "./PhotographerProfileScreenStyle.css";

const PhotographerProfileScreen = () => {
  const { id } = useParams(); // Get photographer ID from URL
  const navigate = useNavigate();

  const [photographerData, setPhotographerData] = useState(null);
  const [packagesData, setPackagesData] = useState([]);
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState(["all"]);
  const [loading, setLoading] = useState(true);
  const [packagesLoading, setPackagesLoading] = useState(false); // Separate loading for packages
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("profile");

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

  // Fetch packages when switching to packages view
  const fetchPackages = async () => {
    if (!photographerData?.id) return;

    try {
      setPackagesLoading(true);
      console.log(
        "Fetching packagesss for photographer ID:",
        photographerData.id
      );

      // Correct URL
      const response = await getApiWithAuth(
        `${GET_PHOTOGRAPHER_PACKAGES_URL}/${photographerData.id}`
      );

      console.log(" Photographer Packages data:", response);

      if (response.success && response.data) {
        // Wrap single object in array if backend sends 1 package
        const data = Array.isArray(response.data.data)
          ? response.data.data
          : [response.data.data];
        setPackagesData(data);
      } else {
        setPackagesData([]);
        console.error("No packages found");
      }
    } catch (error) {
      console.error("Packages fetch error:", error);
      setPackagesData([]);
    } finally {
      setPackagesLoading(false);
    }
  };

  // Handle Portfolio button click - show PHOTOS, VIDEOS, REVIEWS tabs + CATEGORY
  const handlePortfolioClick = () => {
    setViewMode("portfolio");
    setActiveTab("photos"); // Reset to photos when switching to portfolio
  };

  // Handle Package button click - show only Choose Package button
  const handlePackageClick = () => {
    setViewMode("packages");
    fetchPackages(); // Fetch packages when switching to packages view
  };

  // Handle package selection
  const handlePackageSelect = (packageType, packageId = null) => {
    console.log(`Selected package: ${packageType} for photographer ${id}`);

    // If we have a packageId from API, use it, otherwise use the type
    const packageParam = packageId
      ? `packageId=${packageId}`
      : `package=${packageType}`;
    navigate(`/checkout?photographerId=${id}&${packageParam}`);
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
            showButtons={true}
            onPortfolioClick={handlePortfolioClick}
            onPackageClick={handlePackageClick}
          />
        </div>

        <div className="porfile-lower-section">
          {/* Always show PMTabs - it will decide what to show based on viewMode */}
          <PMTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            viewMode={viewMode}
          />

          {/* Show packages loading if in packages mode and loading */}
          {viewMode === "packages" && packagesLoading ? (
            <PMLoadingSpinner text="Loading packages..." />
          ) : (
            <PMGalleryContent
              activeTab={activeTab}
              photos={photos}
              videos={videos}
              reviews={reviews}
              selectedCategory={selectedCategory}
              viewMode={viewMode}
              packages={packagesData}
              onPackageSelect={(pkg) => console.log("Selected package", pkg)}
              photographerId={photographerData?.id}
            />
          )}
        </div>
      </PMMainHeroSection>
    </div>
  );
};

export default PhotographerProfileScreen;

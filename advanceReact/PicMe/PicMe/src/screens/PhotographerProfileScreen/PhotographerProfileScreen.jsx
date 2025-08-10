import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PMNavbar from "../../components/PMNavbar/PMNavbar";
import PMMainHeroSection from "../../components/PMMainHeroSection/PMMainHeroSection";
import PMPhotographerProfile from "../../components/PMPhotographerProfile/PMPhotographerProfile";
import PMTabs from "../../components/PMTabs/PMTabs";
import PMGalleryContent from "../../components/PMGalleryContent/PMGalleryContent";
import PMLoadingSpinner from "../../components/PMLoadingSpinner/PMLoadingSpinner";
import PMButton from "../../components/PMButton/PMButton";

import { getApiWithAuth } from "../../api/api";
import { SEARCH_PHOTOGRAPHER_BY_ID_URL } from "../../api/apiUrls";
import "./PhotographerProfileScreenStyle.css";
import ProfileMenuIcon from "../../assets/icons/ProfileMenuIcon";
import PackagesIcon from "../../assets/icons/PackagesIcon";

const PhotographerProfileScreen = () => {
  const { id } = useParams(); // Get photographer ID from URL
  const navigate = useNavigate();

  const [photographerData, setPhotographerData] = useState(null);
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState(["all"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Handle package button click
  const handlePackageClick = () => {
    navigate(`/photographer/${id}/packages`);
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
      }));
    }

    // Fallback dummy reviews if no real data
    return [
      {
        id: 1,
        user: "Sarah K.",
        text: "Amazing photographer! Captured every moment perfectly ⭐⭐⭐⭐⭐",
      },
      {
        id: 2,
        user: "Mike R.",
        text: "Great experience. Highly recommend for weddings!",
      },
      {
        id: 3,
        user: "Lisa M.",
        text: "Professional and creative. Love the results!",
      },
      {
        id: 4,
        user: "John D.",
        text: "Excellent work and very responsive communication.",
      },
      {
        id: 5,
        user: "Anna T.",
        text: "Beautiful photos and great value for money.",
      },
      {
        id: 6,
        user: "David L.",
        text: "Will definitely book again for future events!",
      },
    ];
  };

  // Prepare data for PMGalleryContent
  const photos = getFilteredPhotos();
  const videos = getFilteredVideos();
  const reviews = getReviews();

  // Add fallback photos if no real data
  const fallbackPhotos = [
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
  ];

  const fallbackVideos = [
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1478720568477-b936bb81b2a8?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
  ];

  // Use real data if available, otherwise fallback
  const finalPhotos = photos.length > 0 ? photos : fallbackPhotos;
  const finalVideos = videos.length > 0 ? videos : fallbackVideos;

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
        <div className="profile-detail">
          {" "}
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
              type={
                photographerData?.work_list?.[0]?.work_type || "Photographer"
              }
              rating={photographerData?.average_rating || 4.0}
              totalReviews={photographerData?.total_reviews || 0}
              showButtons={false} // Hide default buttons, we'll add custom ones
            />

            {/* Custom Portfolio and Package buttons */}
            <div className="custom-buttons-container">
              <PMButton varient="fill">
                <ProfileMenuIcon />
                <span>Portfolio</span>
              </PMButton>
              <PMButton varient="outline" onClick={handlePackageClick}>
                <PackagesIcon />
                <span>Package</span>
              </PMButton>
            </div>
          </div>
          <div className="porfile-lower-section">
            <PMTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
            <PMGalleryContent
              activeTab={activeTab}
              photos={finalPhotos}
              videos={finalVideos}
              reviews={reviews}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </PMMainHeroSection>
    </div>
  );
};

export default PhotographerProfileScreen;

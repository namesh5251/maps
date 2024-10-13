import React from "react";
import './profileCard.css'

const ProfileCards = ({ profile, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${profile.name}?`)) {
      onDelete(profile.id); 
    }
  };

  const handleShowOnMap = () => {
    const { latitude, longitude } = profile;
    if (latitude && longitude) {
      window.open(`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}&zoom=13`, '_blank');
    } else {
      alert("Invalid coordinates provided!");
    }
  };

  return (
    <div className="profile">
      <div className="profile-card">
            <img src={profile.photo || "/images/default.jpg"} alt={`${profile.name}'s profile`} />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <button onClick={handleShowOnMap}>Show on Map</button>
            <button onClick={handleDelete} style={{ marginLeft: "10px", color: "red" }}>
              Delete
            </button>
      </div>
      
    </div>
  );
};

export default ProfileCards;

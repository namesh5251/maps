import React from "react";
import ProfileCard from "../ProfileCard/ProfileCards";

const ProfileList = ({ profiles = [], onDelete }) => {
  return (
    <div className="profile-list">
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} onDelete={onDelete} />
        ))
      ) : (
        <p>No profiles available</p>
      )}
    </div>
  );
};

export default ProfileList;

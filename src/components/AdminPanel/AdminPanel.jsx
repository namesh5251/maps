import React, { useState } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import ProfileList from "../profileComponent/ProfileList";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (newProfile) => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
  };

  // Method to delete a profile
  const deleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <ProfileForm onSubmit={addProfile} />
      <ProfileList profiles={profiles} onDelete={deleteProfile} />
    </div>
  );
};

export default AdminPanel;

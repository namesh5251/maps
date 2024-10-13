import React, { useState } from "react";

const ProfileForm = ({ onSubmit }) => {
  const [profile, setProfile] = useState({
    name: "",
    photo: "",
    description: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(profile);
    setProfile({
      name: "",
      photo: "",
      description: "",
      latitude: "",
      longitude: "",
    });
  };

  return (
    <div className="firstdiv">
      <div className="seconddiv">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="photo"
            value={profile.photo}
            onChange={handleChange}
            placeholder="Photo URL"
          />
          <textarea
            name="description"
            value={profile.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <input
            type="text"
            name="latitude"
            value={profile.latitude}
            onChange={handleChange}
            placeholder="Latitude (e.g., 51.505)"
          />
          <input
            type="text"
            name="longitude"
            value={profile.longitude}
            onChange={handleChange}
            placeholder="Longitude (e.g., -0.09)"
          />
          <button type="submit">Add Profile</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;

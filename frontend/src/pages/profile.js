import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from './UserService';

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    UserService.getUserProfile(userId)
      .then(user => setUser(user))
      .catch(error => console.error(error));
  }, [userId]);

  const onPhotoUpload = (event) => {
    const file = event.target.files[0];
    // Implement logic to upload photo to server and update user.photoUrl
  };

  const removePhoto = () => {
    // Implement logic to remove photo from server and update user.photoUrl to null
  };

  const updateProfile = () => {
    // Implement logic to send updated user data to server
  };

  const deleteProfile = () => {
    // Implement logic to delete user profile from server
  };

  return (
    <div>
      {user && (
        <div>
          {/* User Photo */}
          {user.photoUrl && <img src={user.photoUrl} alt="User Photo" />}
          <input type="file" onChange={onPhotoUpload} />
          <button onClick={removePhoto}>Remove Photo</button>

          {/* User Details Form */}
          <form onSubmit={updateProfile}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />

            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" value={user.age} onChange={(e) => setUser({ ...user, age: e.target.value })} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={user.phoneNumber} onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} />

            <button type="submit">Update Profile</button>
          </form>

          {/* Delete Profile Button */}
          <button onClick={deleteProfile}>Delete Profile</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
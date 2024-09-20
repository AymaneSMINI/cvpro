import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCog } from 'react-icons/fa'; // For the settings icon

const Profile = ({ onSave, initialProfileData = {} }) => {
  // Initialize state with the passed initial data or defaults
  const [headerText, setHeaderText] = useState(initialProfileData.headerText || 'Profile Header');
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState(initialProfileData.description || '');

  // Update the state when the initialProfileData changes
  useEffect(() => {
    if (initialProfileData) {
      setHeaderText(initialProfileData.headerText || 'Profile Header');
      setTextValue(initialProfileData.description || '');
    }
  }, [initialProfileData]);

  const handleSave = (e) => {
    e.preventDefault();
    // Trigger the onSave function passed from the parent with the updated profile data
    onSave({
      headerText,
      description: textValue,
    });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          {isEditing ? (
            <input
              type="text"
              className="form-control"
              value={headerText}
              onChange={(e) => setHeaderText(e.target.value)}
              onBlur={toggleEdit}
              autoFocus
            />
          ) : (
            <h5 className="mb-0">{headerText}</h5>
          )}
          <button
            type="button"
            className="btn btn-light"
            onClick={toggleEdit}
          >
            <FaCog />
          </button>
        </div>
        <div className="card-body">
          <form onSubmit={handleSave}>
            <div className="form-group mb-4">
              <label htmlFor="textArea">Description</label>
              <textarea
                className="form-control"
                id="textArea"
                rows="5"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCog } from 'react-icons/fa'; // For the settings icon

const Profile = () => {
  const [headerText, setHeaderText] = useState('Profile Header');
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Saved Description:', textValue);
    // Handle the save logic (e.g., sending the description to an API or saving locally)
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
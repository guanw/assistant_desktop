import React from 'react';
import './Sidebar.css'; // Import your stylesheet

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar content goes here */}
      <div className="sidebar-header">
        <h2>Sidebar template</h2>
      </div>
      <div className="sidebar-body">
        {/* Add your chat items or any other content */}
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
        <p>Item 4</p>
      </div>
    </div>
  );
};

export default Sidebar;

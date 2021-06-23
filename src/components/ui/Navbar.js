import React from "react";
const navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand"> visitante</span>
      <button className="btn btn-danger">
        <i className="fas fa-skull"></i>
        <span> salir </span>
      </button>
    </div>
  );
};

export default navbar;

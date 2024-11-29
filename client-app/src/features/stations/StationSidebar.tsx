import React from 'react';
import './StationSidebar.css';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const StationSidebar: React.FC = () => {
  return (
    <>
    <Header>Metro Station Amenities</Header>
    <br />
    <div className="sidebar">
      {/* Sidebar item for Parking */}
      <div className="sidebar-item">
        <Link to={"/parking"}>
        <img 
          src="/assets/parking.jpeg" 
          alt="Parking" 
        />
        </Link>
        <div className="label">Parking</div>
      </div>
      
      {/* Sidebar item for Bike Stand */}
      <div className="sidebar-item">
        <Link to={"/barrier"}>
        <img 
          src="/assets/barrier.webp" 
          alt="Barrier Free Accessibility" 
        />
        </Link>
        <div className="label">Barrier Free Accessibility</div>
      </div>

      {/* Sidebar item for Emergency Services */}
      <div className="sidebar-item">
        <Link to={"/women"}>
        <img 
          src="/assets/women.jpeg" 
          alt="Women Facility" 
        />
        </Link>
        <div className="label">Women Facility</div>
      </div>
      <div className="sidebar-item">
        <Link to={'/security'}>
        <img 
          src="/assets/security.jpeg" 
          alt="Security" 
        />
        </Link>
        <div className="label">Security</div>
      </div>
    </div>
    </>
  );
};

export default StationSidebar;
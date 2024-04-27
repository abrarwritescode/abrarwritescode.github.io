import React, { useEffect } from 'react';

const Themetoggle = () => {
  const theme = 'light'; // Constant theme set to "light"

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]); // Re-run this effect if theme changes (although it won't change here)

  const handleClick = () => {
    // This function won't be used since the theme is constant "light"
  };

  return (
    <div className="nav_ac" onClick={handleClick}>
      {/* No icon is rendered here */}
    </div>
  );
};

export default Themetoggle;

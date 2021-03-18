import React from 'react';

const LoadingIcon: React.FC = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" fill="none" stroke="#952467" stroke-width="8" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
      </svg>
    </div>
  )
}

export default LoadingIcon

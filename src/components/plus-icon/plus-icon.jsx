import React from 'react';

function PlusIcon() {
  return (
    <div className="plus-container">
      <svg
        className="plus-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <defs>
          <path
            id="a"
            d="M1.122.196l-.926.925a.663.663 0 0 0 0 .943l17.74 17.74c.261.262.682.26.942 0l.925-.925a.663.663 0 0 0 0-.943L2.066.196a.663.663 0 0 0-.943 0z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="4"
            d="M16 3.878v24.244M28.122 16H3.878"
          />
        </g>
      </svg>
    </div>
  );
}

export default PlusIcon;

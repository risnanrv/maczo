import React from 'react'

function ThreeButtons() {
  return (
    <div className="container mt-4">
    <div
      className="row justify-content-center custom-gap"
    >
      <div className="col-md-3 col-10 mb-3">
        <button className="btn btn-primary fw-bold text-white py-3 fs-5 w-100">
          Products
        </button>
      </div>
      <div className="col-md-3 col-10 mb-3">
        <button className="btn btn-primary fw-bold text-white py-3 fs-5 w-100">
          Explore Events
        </button>
      </div>
      <div className="col-md-3 col-10 mb-3">
        <button className="btn btn-primary fw-bold text-white py-3 fs-5 w-100">
          Get in Touch
        </button>
      </div>
    </div>

    {/* Responsive Styles for Gap */}
    <style>
      {`
        .custom-gap {
          gap: 60px;
          margin-top: -30px;
        }
        @media (max-width: 768px) {
          .custom-gap {
            gap: 10px;
            margin-top: -30px;
          }
        }
      `}
    </style>
  </div>
  )
}

export default ThreeButtons

import React from 'react'

function ThreeButtons() {
  return (
    <div className="container mt-4">
    <div
      className="row justify-content-center custom-gap"
    >
      <div className="col-md-3 col-10 mb-3">
        <button className="three-btn  btn-primary fw-bold text-white py-3 fs-5 ">
          Products
        </button>
      </div>
      <div className="col-md-3 col-10 mb-3">
        <button className="three-btn  btn-primary fw-bold text-white py-3 fs-5">
          Explore Events
        </button>
      </div>
      <div className="col-md-3 col-10 mb-3">
        <button className="three-btn btn-primary fw-bold text-white py-3 fs-5">
          Get in Touch
        </button>
      </div>
    </div>

    {/* Responsive Styles for Gap */}
    <style>
      {`
      .three-btn {
       width: 210px;
    height: 55px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
     background-color: black;
    color: white;
    padding: 12px 20px;
    font-size: 16px;
    gap: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s ease-in-out;
  
      }
        .custom-gap {
          gap: 60px;
          margin-top: -30px;
        }
        @media (max-width: 768px) {
          .custom-gap {
            gap: 5px;
            margin-top: -40px;
            margin-left: 47px;
          }
            .btn{
            width: 170px;
        height: 40px;
            }
        }
      `}
    </style>
  </div>
  )
}

export default ThreeButtons

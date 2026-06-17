import React from "react";

export default function Daisyui() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">DaisyUI Theme Test</h1>

      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-">DaisyUI Theme Test</h1>
      <div className="card card-sm bg-base-200 max-w-60 shadow">
        <figure className="hover-gallery">
          <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
          <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
          <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
          <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between">
            daisyUI Hat
            <span className="font-normal">$25</span>
          </h2>
          <p>High Quality classic cap hat with stitch logo</p>
        </div>
      </div>
    </div>
  );
}

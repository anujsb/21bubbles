// import React from "react";
const Products = () => {
  return (
    <div className="h-screen text-black">
      <div className="grid grid-flow-row grid-rows-4 ">
        
        <div className="grid grid-flow-col grid-cols-4 ">
          <div className="col-span-2">1</div>
          <div>2</div>
          <div>3</div>
          <div className="col-span-2">4</div>
        </div>
      </div>
    </div>
  );
};

export default Products;

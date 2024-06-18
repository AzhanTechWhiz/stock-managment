"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import AddProduct from "../../components/AddProduct";
import DisplayProduct from "../../components/DisplayProduct";

import "./globals.css";
import { Product } from "../../types";

const Home: React.FC = () => {
  const [stock, setStock] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center">
        <button onClick={openModal} className="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add New Product
        </button>
      </div>
      <div>
        <AddProduct
          stock={stock}
          setStock={setStock}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      </div>
      <div className="mt-9">{stock.length > 0 && <DisplayProduct stock={stock} />}</div>
    </>
  );
};

export default Home;

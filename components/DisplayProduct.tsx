import React, { useState } from "react";
import { Product } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import AddProduct from "./AddProduct";

type DisplayProductProps = {
  stock: Product[];
};

const DisplayProduct: React.FC<DisplayProductProps> = ({ stock }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const handleDelete = (product: Product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedProduct) {
      console.log(`Deleting product with ID ${selectedProduct.id}`);
      // Add your delete logic here
    }
    setShowDeleteModal(false);
  };

  const closeModal = () => {
    setShowEditModal(false);
    setSelectedProduct(null); // Reset selected product when closing edit modal
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-500">
        Your Current Stock
      </h1>
      <div
        className="overflow-x-auto flex"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <table
          className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg overflow-hidden"
          style={{ width: "60%" }}
        >
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {stock.map((product) => (
              <tr
                key={product.id}
                className="text-sm text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">
                  {product.quantity} {product.unit}
                </td>
                <td className="px-6 py-4">{product.price} Rs</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-transparent"
                      aria-label="Edit"
                    >
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="text-lg text-green-500 mt-1"
                      />
                    </button>
                    <button
                      onClick={() => handleDelete(product)}
                      className="text-lg"
                      aria-label="Delete"
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-500 text-lg"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center"
        style={{ backgroundColor: "rgba(178, 178, 178, 0.281)" }}
        >
          <div className="bg-white rounded-lg p-6 relative w-full max-w-md">
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500">
                Are you sure you want to delete this product?
              </h3>
              <button
                onClick={confirmDelete}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I am sure
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 rounded-lg px-5 py-2.5"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center "
        style={{ backgroundColor: "rgba(178, 178, 178, 0.281)" }}
        >
          <div className="bg-white rounded-lg p-6 relative w-full max-w-md">
           Edit is not working properly !
          </div>
          <button
                onClick={() => setShowEditModal(false)}
                className="ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 rounded-lg px-5 py-2.5"
              >
                Cancel
              </button>
        </div>
      )}
    </div>
  );
};

export default DisplayProduct;

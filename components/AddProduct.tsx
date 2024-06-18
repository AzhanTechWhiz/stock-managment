import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Product } from "../types";

type AddProductProps = {
  stock: Product[];
  setStock: React.Dispatch<React.SetStateAction<Product[]>>;
  isModalOpen?: boolean;
  closeModal: () => void;
};

const AddProduct: React.FC<AddProductProps> = ({
  stock,
  setStock,
  isModalOpen,
  closeModal,
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      quantity: "",
      price: "",
      category: "",
      unit: "pcs",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Product name is required"),
      quantity: Yup.mixed()
        .required("Quantity is required")
        .test("is-valid-quantity", "Invalid quantity", (value) => {
          if (typeof value === "number") return true;
          if (typeof value === "string" && !isNaN(Number(value))) return true;
          return false;
        }),
      price: Yup.number()
        .required("Price is required")
        .positive("Price must be positive"),
      category: Yup.string().required("Category is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const newProductId = stock.length ? stock[stock.length - 1].id + 1 : 1;
      const productToAdd: Product = {
        id: newProductId,
        name: values.name,
        quantity: parseFloat(values.quantity),
        price: parseFloat(values.price),
        category: values.category,
        unit: values.unit,
      };
      setStock([...stock, productToAdd]);
      resetForm();
      closeModal(); // Close the modal after submission
    },
  });

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(178, 178, 178, 0.281)" }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Add a New Product</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter product name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg sm:text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="mt-1 text-sm text-red-500">{formik.errors.name}</p>
            ) : null}
          </div>
          <div>
            <input
              id="category"
              name="category"
              type="text"
              placeholder="Enter category"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
            />
            {formik.touched.category && formik.errors.category ? (
              <p className="mt-1 text-sm text-red-500">
                {formik.errors.category}
              </p>
            ) : null}
          </div>
          <div className="flex flex-row">
            <input
              style={{ width: "86%" }}
              id="quantity"
              name="quantity"
              type="number"
              placeholder="Enter quantity"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ml-4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.quantity}
            />
            <select
              id="unit"
              name="unit"
              className="border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm select-quantity"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.unit}
            >
              <option value="ctn">carton</option>
              <option value="boxes">boxes</option>
              <option value="pcs">pieces</option>
            </select>
          </div>
          {formik.touched.quantity && formik.errors.quantity ? (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.quantity}
            </p>
          ) : null}
          <div>
            <input
              id="price"
              name="price"
              type="number"
              placeholder="Enter price"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
              <p className="mt-1 text-sm text-red-500">{formik.errors.price}</p>
            ) : null}
          </div>
          <div className="flex justify-end space-x-1">
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

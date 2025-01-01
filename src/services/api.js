import axios from "axios";


export const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:9001",
});

const API_BASE_URL = import.meta.env.VITE_API_URL; // Ensure your .env file has VITE_API_URL
//alert(API_BASE_URL)
// Generic function to handle API requests
const apiRequest = async (endpoint, method = "GET", body = null, headers = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (body) {
      options.body = JSON.stringify(body); // Send JSON data
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error ${response.status}: ${errorData.message || response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`API request to ${endpoint} failed:`, error.message);
    throw error; // Rethrow to handle in the calling code
  }
};

// --- User API Functions ---

// Fetch all users
export const fetchUsers = async () => {
  return apiRequest("/users", "GET");
};

// Fetch a single user by ID
export const fetchUserById = async (id) => {
  return apiRequest(`/users/${id}`, "GET");
};

// Create a new user
export const createUser = async (userData) => {
  return apiRequest("/users", "POST", userData);
};

// Update an existing user
export const updateUser = async (id, userData) => {
  return apiRequest(`/users/${id}`, "PUT", userData);
};

// Delete a user
export const deleteUser = async (id) => {
  return apiRequest(`/users/${id}`, "DELETE");
};

// --- Product API Functions ---

// Fetch all products
export const fetchProducts = async () => {
  return apiRequest("/products", "GET");
};

// Fetch a single product by ID
export const fetchProductById = async (id) => {
  return apiRequest(`/products/${id}`, "GET");
};

// Create a new product
export const createProduct = async (productData) => {
  return apiRequest("/products", "POST", productData);
};

// Update an existing product
export const updateProduct = async (id, productData) => {
  return apiRequest(`/products/${id}`, "PUT", productData);
};

// Delete a product
export const deleteProduct = async (id) => {
  return apiRequest(`/products/${id}`, "DELETE");
};

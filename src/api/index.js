import axios from "axios";

const API = axios.create({ baseURL: 'https://camera-ghost.herokuapp.com/' })

API.interceptors.request.use((req) => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  if (token) {
    req.headers.Authorization = `bearer ${token}`;
  }
  return req;
});

//auth
export const createUserApi = (formData) => API.post(`/auth/signup`, formData);
export const loginUserApi = (formData) => API.post(`/auth/login`, formData);

//admin
export const addAdminApi = (email) => API.get(`/auth/admin/${email}`);

//products
export const getProductsApi = (limited) => API.get(`/products?limited=${limited}`);
export const getSingleProductApi = (id) => API.get(`/products/${id}`);
export const addProductsApi = (formData) => API.post(`/products`, formData);
export const deleteProductApi = (id) => API.delete(`/products/${id}`);

//products
export const getOrderApi = () => API.get(`/order`);
export const getSingleUserOrderApi = (userId) => API.get(`/order/${userId}`);
export const addOrderApi = (formData) => API.post(`/order`, formData);
export const updateOrderApi = (id,formData) => API.patch(`/order/${id}`, formData);
export const deleteOrderApi = (id) => API.delete(`/order/${id}`);

//review
export const getReviewsApi = () => API.get(`/review`);
export const addReviewsApi = (formData) => API.post(`/review`, formData);

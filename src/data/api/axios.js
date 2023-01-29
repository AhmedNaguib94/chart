import axios from "axios";

// const navigate = useNavigate();

export const BASE_URL = process.env.REACT_APP_BASE_URL;
const instance = axios.create({
  baseURL: ``,
});

export default instance;

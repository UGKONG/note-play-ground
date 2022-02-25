import axios from "axios";

export default axios.create({
  baseURL: 'https://sanguk-db-default-rtdb.firebaseio.com/playground',
  timeout: 3000
});

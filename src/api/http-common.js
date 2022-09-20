import axios from "axios";
import {base} from './staticData/base'

export default axios.create({
  baseURL: base.url,
});

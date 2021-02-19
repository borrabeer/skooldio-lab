import axios from "axios";

import { GET_DATA, SET_DATA } from "./types";

export const getDatas = () => (dispatch) => {
  axios
    .get("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
    .then((res) => {
      dispatch({
        type: SET_DATA,
        payload: res.data
      })
    });
};
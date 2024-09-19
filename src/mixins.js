import axios from "axios";

export default {
  methods: {
    async $api(url, method, data) {
      return axios({
        method: method,
        url: url,
        data,
      })
        .then((response) => {
          return response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};

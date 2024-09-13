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
          console.log("Response data:", response.data); // 응답 데이터 콘솔에 출력
          return response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};

import request from "@/utils/request";

export const login = (data) => {
  return request({
    methods: "POST",
    url: "api/users/login",
    data,
  });
};

export const register = (data) => {
  return request({
    methods: "POST",
    url: "api/users",
    data,
  });
};
// export const login = (data) => {
//   return request({
//     methods: "POST",
//     url: "api/users/login",
//     data,
//   });
// };

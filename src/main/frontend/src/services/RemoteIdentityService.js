import { https } from "./AxiosConfig";

export const mailContact = async (requestData) => {
  try {
    const response = await https.post("/sendContact", requestData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-XSRF-TOKEN": sessionStorage.getItem("XSRF-TOKEN"),
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return "error";
  }
};

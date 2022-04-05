import axios from "axios";

const api = axios.create({
  baseURL: "https://apialimentadorautomatico.herokuapp.com/"
});

export async function getPix(description, price) {
  try {
    const response = await api.post(
      "pix",
      {
        nome_produto: description,
        valor: price.toFixed(2)
      },
      {
        responseType: "blob"
      }
    );

    return URL.createObjectURL(
      new Blob([response.data], { type: "image/png" })
    );
  } catch (error) {
    console.error(error);
  }
}

async function getJson() {
  try {
    const response = await axios.get("json");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

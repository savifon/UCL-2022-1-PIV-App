import axios from "axios";

const api = axios.create({
  baseURL: "https://apialimentadorautomatico.herokuapp.com/"
});

export async function getPix(description, price) {
  try {
    const response = await api.post("/pix", {
      data: JSON.stringify({ nome_produto: description, valor: price }),
      config: {
        headers: {
          Accept: "apllication/json",
          "Content-Type": "application/json"
        }
      }
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function getJson() {
  try {
    const response = await axios.get("/json");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://pivpix.herokuapp.com/",
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function getPix(description: string, price: number) {
  try {
    const response = await api.post<AxiosResponse>(
      "criar-pagamento",
      {
        nome_produto: description,
        valor: price.toFixed(2)
      }
    );
    
    window.sessionStorage.setItem('pixid', response.data.pix.txid)
    return response.data.qrcode.imagemQrcode
  } catch (error) {
    console.error(error);
  }
}

const data = [
  {
    ticker: "ABEV3",
    price: 16.43,
    lastUpdate: "13/08/2021",
  },
  {
    ticker: "GRND3",
    price: 22.14,
    lastUpdate: "13/08/2021",
  },
];

class PricesController {
  async index(request, response) {
    response.json(data);
  }
}

export default new PricesController();

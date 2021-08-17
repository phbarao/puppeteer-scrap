import puppeteer from "puppeteer";

const stockPortfolio = [
  "ABEV3",
  "BBDC3",
  "CIEL3",
  "GRND3",
  "ITUB3",
  "ODPV3",
  "PETR3",
  "RADL3",
  "VALE3",
  "VVAR3",
  "WEGE3",
];

async function scrap() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (let stock of stockPortfolio) {
    await page.goto(
      `https://www.fundamentus.com.br/detalhes.php?papel=${stock}`
    );

    const result = await page.evaluate(() => {
      const ticker = document.querySelector(".data").innerText;

      const date = document.querySelector(
        "tbody tr:nth-child(2) td:nth-child(4)"
      ).innerText;

      const price = Number(
        document.querySelector(".w3 span").innerText.replace(",", ".")
      );

      return `${ticker}: R$ ${price} (${date})`;
    });

    console.log(result);
  }

  browser.close();
}

scrap();

export default scrap;

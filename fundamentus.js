import puppeteer from "puppeteer";

const scrape = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const assetName = "ITUB3";

  await page.goto(
    `https://www.fundamentus.com.br/detalhes.php?papel=${assetName}`
  );

  const result = await page.evaluate(() => {
    const asset = document.querySelector(".data").innerText;

    const price = Number(
      document.querySelector(".w3 span").innerText.replace(",", ".")
    );

    return `${asset}: R$ ${price}`;
  });

  browser.close();
  return result;
};

scrape().then((value) => {
  console.log(value);
});

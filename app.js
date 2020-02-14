const { Builder, By, Key, until } = require("selenium-webdriver");

links = [244478, 244490].map(sku => {
  return `https://www.livingspaces.com/submit-review?bvdisplaycode=3534-en_us&bvappcode=qa&bvproductid=${sku.toString()}&bvpage=https%3A%2F%2Flivingspaces.ugc.bazaarvoice.com%2Fanswers%2Fsubmit%2F3534-en_us%2Fproduct%2F${sku.toString()}%2Fsubmitquestion.htm%3Fauthsourcetype%3D__AUTHTYPE__%26campaignid%3DBV_QA_BROWSE%26format%3Dembedded%26innerreturn%3Dhttps%253A%252F%252Flivingspaces.ugc.bazaarvoice.com%252Fanswers%252F3534-en_us%252Fproduct%252F${sku.toString()}%252Fquestions.djs%253Fformat%253Dembeddedhtml%26numanswers%3D0%26numquestions%3D0%26return%3Dhttps%253A%252F%252Fwww.livingspaces.com%252Fpdp-krista-grey-accent-chair-${sku.toString()}%26sessionparams%3D__BVSESSIONPARAMS__%26user%3D36992ea5364f3c691178888d68894eba7573657269643d6b786f3679706c6134356834756b6b6f70347278643834753226686f737465643d564552494649454426646174653d3230323030323133&bvcontenttype=QUESTION_SUBMISSION&bvauthenticateuser=false`;
});

for (link in links) {
  console.log(links[link]);
}

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get(links[0]);
    // await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(
      until.elementLocated(By.id("BVFieldQuestionsummaryID")),
      10000
    );
    await driver
      .findElement(By.id("BVFieldQuestionsummaryID"))
      .sendKeys("blahhh");
  } finally {
    // await driver.quit();
  }
})();

import Component from "../src/components/Component";
import { WEBSITE } from "../src/utils/variables";

let component: Component;
describe("Instantiate component", function () {
  this.timeout(0);
  it("Component instantiation", async function () {
    component = await Component.launch();
  });
});

describe("japscan 404 tests", function () {
  this.timeout(0);
  it("Should throw because page is 404", function () {
    return new Promise((resolve, reject) => {
      component
        .createExistingPage(WEBSITE + "/manga/one-piece")
        .then((page) => page.close())
        .catch((error) => reject(error));
      resolve(undefined);
    });
  });
  it("Should not throw because page exists", function () {
    return new Promise((resolve, reject) => {
      component
        .createExistingPage(WEBSITE + "/manga/one-piece/")
        .catch((error) => reject(error));
      resolve(undefined);
    });
  });
});

describe("is a webtoon tests", function () {
  this.timeout(0);
  describe("Not webtoon tests", function () {
    [
      "one-piece",
      "nanatsu-no-taizai",
      "mashle",
      "black-clover",
      "kingdom",
    ].forEach((manga) => {
      it(`Should return false because ${manga} is not a webtoon`, function () {
        return new Promise((resolve, reject) => {
          component.isAWebtoon(manga).then((res) => {
            if (res)
              reject(
                Error(`${manga} is not a webtoon but was detected as a webtoon`)
              );
            else resolve(undefined);
          });
        });
      });
    });
  });
  describe("Is webtoon tests", function () {
    ["tower-of-god", "solo-leveling", "gosu" /* "the-gamer" */].forEach(
      (manga) => {
        it(`Should return true because ${manga} is a webtoon`, function () {
          return new Promise((resolve, reject) => {
            component.isAWebtoon(manga).then((res) => {
              if (!res)
                reject(
                  Error(
                    `${manga} is a webtoon but was detected as not a webtoon`
                  )
                );
              else resolve(undefined);
            });
          });
        });
      }
    );
  });
});
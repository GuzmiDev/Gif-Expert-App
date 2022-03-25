import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fetch", () => {
  test("debe de traer 10 elementos", async () => {
    const cuantosGifs = 10;
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(cuantosGifs);
  });

  test("debe de ser 0 si no se envia argumento", async () => {
    const cuantosGifs = 0;
    const gifs = await getGifs("");

    expect(gifs.length).toBe(cuantosGifs);
  });
});

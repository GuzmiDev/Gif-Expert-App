import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGfis", () => {
  test("Debe de retronrar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch Man")
    );

    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("debe de retornar un arreglo de gifs y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch Man")
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).not.toBeTruthy();
  });
});

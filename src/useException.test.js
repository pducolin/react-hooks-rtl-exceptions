import { renderHook } from "@testing-library/react-hooks";

import {
  useBoom,
  useBoomEffect,
  useAsyncBoom,
  useAsyncBoomEffect,
  useQueryBoom,
  useQueryBoomEffect
} from "./useException";

describe("useException", () => {
  it("useBoom", async () => {
    const { result } = renderHook(() => useBoom());

    expect(result.error).toBeDefined();
  });

  it("useBoomEffect", async () => {
    const { result } = renderHook(() => useBoomEffect());

    expect(result.error).toBeDefined();
  });

  it("useAsyncBoom", async () => {
    const { result } = renderHook(() => useAsyncBoom());

    expect(result.error).toBeDefined();
  });

  it("useAsyncBoom with waitFor", async () => {
    const { result, waitFor } = renderHook(() => useAsyncBoom());

    await waitFor(() => result.current.isDone)

    expect(result.error).toBeDefined();
  });


  it("useAsyncBoomEffect", async () => {
    const { result, rerender } = renderHook(() => useAsyncBoomEffect());
    rerender()
    expect(result.error).toBeDefined();
  });

  it("useQueryBoom", async () => {
    const { result, rerender } = renderHook(() => useQueryBoom());
    rerender()
    expect(result.error).toBeDefined();
  });

  it("useQueryBoomEffect", async () => {
    const { result, rerender } = renderHook(() => useQueryBoomEffect());
    rerender()
    expect(result.error).toBeDefined();
  });
});

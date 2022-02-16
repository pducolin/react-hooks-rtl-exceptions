import { QueryClient } from "react-query";
import { useEffect, useState } from "react";

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function boom() {
  throw new Error("💥");
}

async function asyncBoom() {
  await sleep(1);
  boom();
}

async function queryBoom() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10
      }
    }
  });
  await queryClient.fetchQuery("key", asyncBoom);
}

export const useBoom = () => {
  boom();
};

export const useBoomEffect = () => {
  useEffect(() => {
    boom();
  }, []);
};

/** const [isDone, setIsDone] = useState(false);
 * await asyncBoom();
 * setIsDone(true);
 * return { isDone };
 */
export const useAsyncBoom = async () => {
  await asyncBoom();
};

export const useAsyncBoomEffect = () => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    asyncBoom();
    setIsDone(true);
  }, []);

  return {
    isDone
  };
};

export const useQueryBoom = async () => {
  const [isDone, setIsDone] = useState(false);
  await queryBoom();
  setIsDone(true);

  return {
    isDone
  };
};

export const useQueryBoomEffect = async () => {
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    queryBoom();
    setIsDone(true);
  }, []);

  return {
    isDone
  };
};

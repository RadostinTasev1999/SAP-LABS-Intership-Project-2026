import { useEffect } from "react";
import { useState } from "react";

export const useFetchPriorityList = (url: string) => {
  const [priorityList, setPriorityList] = useState({
    data: [],
    error: { message: "" },
  });

  useEffect(() => {
    const fetchPriorityList = async (url: string) => {
      try {
        const response = await fetch(url);
        const result = await response.json();

        console.log("Result is:", result);

        setPriorityList({
          data: result,
          error: { message: "" },
        });
      } catch (error) {
        setPriorityList({
          data: [],
          error: { message: "Error retrieving priority list" },
        });
      }
    };

    fetchPriorityList(url);
  }, []);

  return {
    priorityList,
  };
};

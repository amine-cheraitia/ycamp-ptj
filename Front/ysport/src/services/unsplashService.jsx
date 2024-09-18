import axios from "axios";

const UNSPLASH_ACCESS_KEY = "-1TRCgKz8KAchgLmu1ofmfiSeYfRpmfe7Fd9vNv1AoE";

export const fetchRandomSportPhotos = async () => {
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: { count: 1, query: "sport" },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching random sport photos", error);
    return [];
  }
};

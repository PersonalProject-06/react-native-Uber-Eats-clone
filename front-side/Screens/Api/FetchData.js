import {API_KEY,URL} from '@env'






 const apiOptions = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getRestaurantsFromYelp = async (city, setRestaurantData,activeTab) => {
  const res = await fetch(`${URL}${city}`, apiOptions);
  const json = await res.json();
  console.log(json);
  return setRestaurantData(
    json.businesses.filter((business) =>
      business.transactions.includes(activeTab.toLowerCase())
    )
  );
};

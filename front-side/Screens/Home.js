import React ,{useState,useEffect}from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../Components/Categories";
import HeaderTabs from "../Components/HeaderTabs/HeaderTabs";
import SearchBar from "../Components/SearchBar";
import RestaurantItem ,{localRestourant} from '../Components/RestaurantItems/RestaurantItem';
import { Divider } from "react-native-elements";
const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";
export default function Home() {
  const [restaurantData,setRestaurantData]=useState(localRestourant)
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar  setCity={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Categories/>
      <RestaurantItem restaurantData={restaurantData}/>
   
        
      </ScrollView>
      <Divider width={1}/>
    </SafeAreaView>
  );
}

import React ,{useState,useEffect}from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../Components/Home/Categories";
import HeaderTabs from "../Components/Home/HeaderTabs/HeaderTabs";
import SearchBar from "../Components/Home/SearchBar";
import RestaurantItem ,{localRestourant} from '../Components/Home/RestaurantItems/RestaurantItem';
import { Divider } from "react-native-elements";
import BottomTabs from "../Components/Home/BottomTabs";
const YELP_API_KEY =
  "OcKQnbEPwZb6ZgfVt7nf5CNvDaBntH_9_MUw5ooAD1xoucfN_toEYMs1cAGwN1_g2CdSBbXhefY4aFdC6EzeOZE9JJ3s20ZIRxlNJuWXWY2G5tNHyJmCty6M_SvOYXYx";
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
      <BottomTabs  />
    </SafeAreaView>
  );
}

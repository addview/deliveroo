import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";
import client from "../sanity";

const FeatureRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id == '03593f8c-f5d4-443b-8a3c-8961a234ab96' ] {
          ...,
          restaurants[] -> {
            ...,
            dishes[] ->,
            type->{
              name
            }
          },
        }[0]
    `
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
        console.log(restaurants[0].name);
      });
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((restaurant) => (
          <ResturantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          ></ResturantCard>
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;

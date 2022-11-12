import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";

const Restaurant = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  return (
    <ScrollView>
      <View>
        <Image
          className="w-full h-56 bg-gray-300 p-4"
          source={{
            uri: urlFor(imgUrl).url(),
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Restaurant;

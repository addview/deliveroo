import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";

const Restaurant = () => {
  const navigation = useNavigation();
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
      <View className="relative">
        <Image
          className="w-full h-56 bg-gray-300 p-4"
          source={{
            uri: urlFor(imgUrl).url(),
          }}
        />
      </View>
      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
      >
        <ArrowLeftIcon size={20} color="#00CCBB"></ArrowLeftIcon>
      </TouchableOpacity>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.3} size={19} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.2} size={19}></MapPinIcon>
              <Text className="text-xs text-gray-500">Nearby ° {address}</Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon
            color="gray"
            opacity={0.4}
            size={19}
          ></QuestionMarkCircleIcon>
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy
          </Text>
          <ChevronRightIcon size={19} color="#00CCBB"></ChevronRightIcon>
        </TouchableOpacity>
      </View>

      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {/* Dishrows */}
      </View>
    </ScrollView>
  );
};

export default Restaurant;

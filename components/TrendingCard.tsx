import { images } from "@/constants/images";
import MaskedView from "@react-native-masked-view/masked-view";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TrendingCard = ({ movie, index }: TrendingCardProps) => {
  return (
    <Link
      href={`/movies/${movie.movie_id}`}
      className="flex mx-4"
      key={movie.movie_id}
      asChild
    >
      <TouchableOpacity className="w-40">
        <Image
          source={{ uri: movie.poster_url }}
          className="w-32 h-40 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-sm" numberOfLines={1}>
          {movie.title}
        </Text>
        <View className="absolute bottom-9 -left-2">
          <MaskedView
            maskElement={
              <Text className="font-bold text-7xl text-white">{index + 1}</Text>
            }
          >
            <Image source={images.rankingGradient} className="size-14" />
          </MaskedView>
        </View>
      </TouchableOpacity>
    </Link>
  );
};
export default TrendingCard;

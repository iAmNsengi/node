import { images } from "@/constants/images";
import MaskedView from "@react-native-masked-view/masked-view";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TrendingCard = ({ movies }: { movies: TrendingMovie[] }) => {
  return (
    <View>
      {movies.map((movie, i) => (
        <Link
          href={`/movies/${movie.movie_id}`}
          asChild
          className="flex flex-row"
        >
          <View>
            <TouchableOpacity className="w-40">
              <Image
                source={{ uri: movie.poster_url }}
                className="w-32 h-40 rounded-lg"
                resizeMode="cover"
              />
              <Text className="text-white text-sm">{movie.title} </Text>
            </TouchableOpacity>
            <View className="absolute bottom-9 left-0">
              <MaskedView
                maskElement={
                  <Text className="font-bold text-6xl text-white">{i + 1}</Text>
                }
              >
                <Image source={images.rankingGradient} className="size-14" />
              </MaskedView>
            </View>
          </View>
        </Link>
      ))}
    </View>
  );
};
export default TrendingCard;

const styles = StyleSheet.create({});

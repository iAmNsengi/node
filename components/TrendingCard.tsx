import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TrendingCard = ({ movies }: { movies: TrendingMovie[] }) => {
  return (
    <View>
      {movies.map((movie) => (
        <Link
          href={`/movies/${movie.movie_id}`}
          asChild
          className="flex flex-col"
        >
          <TouchableOpacity className="w-40">
            <Image source={{ uri: movie.poster_url }} className="w-12 h-20" />
            <Text className="text-white">{movie.title} </Text>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  );
};
export default TrendingCard;

const styles = StyleSheet.create({});

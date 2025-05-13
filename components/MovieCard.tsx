import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  release_date,
  title,
  vote_average,
}: Movie) => {
  console.log(poster_path);

  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placeholder.co/600x400/1a1a1a/fffff.png`,
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-sm"> {title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;

import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SeachBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { updateSearchCount } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading,
    refetch,
    reset,
    error,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        console.log(searchQuery);

        await refetch();
        console.log(movies);

        await updateSearchCount(searchQuery, movies[0]);
      } else reset();
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    const updateSearch = async () => {
      if (movies?.length > 0 && movies?.[0])
        await updateSearchCount(searchQuery, movies[0]);

      updateSearch();
    };
  }, [movies]);

  return (
    <View className="flex-1  bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <View>
            <View className="w-full flex-col justify-center mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-10" />
              <View className="my-10 w-full">
                <SearchBar
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChangeText={(text: string) => setSearchQuery(text)}
                />
              </View>
            </View>
            {loading && (
              <ActivityIndicator
                size={"large"}
                color={"#0000f"}
                className="my-3"
              />
            )}
            {error && (
              <Text className="text-red-700 text-center border border-red-700 p-2 px-5rounded-md">
                Error: {error?.message}
              </Text>
            )}
            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text className="text-white">
                Search results for{"  "}
                <Text className="text-xl text-purple-400 font-bold">
                  {searchQuery}
                </Text>
              </Text>
            )}
          </View>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View>
              <Text>{searchQuery.trim() ? "No movies found" : "Search"} </Text>
            </View>
          ) : null
        }
      />
      <Text>Search</Text>
    </View>
  );
};

export default Search;

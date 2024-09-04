import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const { query } = useLocalSearchParams();
  
  useEffect(() => {
    // refetch();
  }, [query]);

  return (
    <SafeAreaView className="h-full dark:bg-primary">
      <Text>Search</Text>
    </SafeAreaView>
  )
}

export default Search
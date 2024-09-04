import { View, Text, SafeAreaView, FlatList, RefreshControl } from 'react-native'
import React, { useState } from 'react'

const Home = () => {

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={[{ name : 'a'}, { name : 'b' }, { name : 'c'}]}
        keyExtractor={item => item.name}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>
        }}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70,
        }}
        contentOffset={{ x: 0, y: 0 }}
        ListHeaderComponent={() => {
          return <Text>Header</Text>
        }}
        ListEmptyComponent={() => {
          return <Text>Empty</Text>
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  )
}

export default Home
import { Link } from "expo-router";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="flex-1 items-center justify-center">
        <StatusBar barStyle={"default"} />
        <Text className="text-3xl text-white font-plight">Appname</Text>
        <Link href="/home" className="text-blue-500">Go to home</Link>
      </View>
    </SafeAreaView>
  );
}

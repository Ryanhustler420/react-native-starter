import { Link } from "expo-router";
import { StatusBar, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <StatusBar barStyle={"default"} />
      <Text className="text-3xl font-pblack">Appname</Text>
      <Link href="/home" className="text-blue-500">Go to home</Link>
    </View>
  );
}

import { Link } from "expo-router";
import { StatusBar, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <StatusBar barStyle={"default"} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/profile" className="text-blue-500">Go to profile</Link>
    </View>
  );
}

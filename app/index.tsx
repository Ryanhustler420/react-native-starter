import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="dark:bg-primary h-full">
      <ScrollView 
        contentContainerStyle={{ height: '100%' }}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View className="flex-1 items-center justify-center">
          <StatusBar barStyle={"default"} />
          <Text className="text-3xl dark:text-white font-plight">Appname</Text>
          <Link href="/home" className="text-blue-500">Go to home</Link>
          <CustomButton
            title="Home"
            handlePress={() => router.push("/home")}
            containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import { useEffect } from "react";
import { router } from "expo-router";
import Loader from "@/components/Loader";
import { SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {

  useEffect(() => {
    const check = async () => {
      const storedAuthInfo = await AsyncStorage.getItem("userData");
      const isAuthenticated = true;
      if (isAuthenticated) {
        setTimeout(() => router.replace("/(tabs)/home"), 1000);
      } else {
        setTimeout(() => router.replace("/sign-in"), 1000);
      }
    }
    check();
  }, []);

  return (
    <SafeAreaView className="h-full">
      <Loader isLoading />
    </SafeAreaView>
  );
}

import { View, ActivityIndicator, Dimensions, Platform, useColorScheme } from "react-native";

const Loader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const colorScheme = useColorScheme();

  const osName = Platform.OS;
  const screenHeight = Dimensions.get("screen").height;

  if (!isLoading) return null;

  return (
    <View
      className="absolute flex justify-center items-center w-full h-full z-10"
      style={{
        height: screenHeight,
      }}
    >
      <ActivityIndicator
        animating={isLoading}
        color={colorScheme == "dark" ? "#fff" : "#000"}
        size={osName === "ios" ? "large" : 50}
      />
    </View>
  );
};

export default Loader;
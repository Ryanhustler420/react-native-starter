import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'

import panja from "@/assets/images/panja.png";

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyle?: string;
  isLoading?: boolean;
  textStyle?: string;
}

const CustomButton : FC<CustomButtonProps> = ({ title, textStyle, containerStyle, isLoading, handlePress }) => {
  return (
    <TouchableOpacity 
      disabled={isLoading} 
      activeOpacity={.7} 
      onPress={handlePress} 
      className={`overflow-hidden bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>{title}</Text>
      <Image
        source={panja}
        resizeMode='contain'
        className="w-36 h-36 absolute right-3 bottom-3"
      />
      <Image
        source={panja}
        resizeMode='contain'
        className="w-36 h-36 absolute left-3 top-3"
      />
    </TouchableOpacity>
  )
}

export default CustomButton
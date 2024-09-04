import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

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
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
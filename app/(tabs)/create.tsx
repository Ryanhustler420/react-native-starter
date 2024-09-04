import React from 'react'
import { SafeAreaView, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native'

import panja from "@/assets/images/panja.png";

const Create = () => {
  return (
    <SafeAreaView className="h-full">
      <KeyboardAvoidingView 
        className="flex-1"
        keyboardVerticalOffset={100}
        behavior={Platform.OS === 'ios' ? "padding" : undefined}
      >
        <ImageBackground source={panja} className="flex-1" resizeMode='contain'>

        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Create
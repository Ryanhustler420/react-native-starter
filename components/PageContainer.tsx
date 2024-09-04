import React from 'react'
import { View } from 'react-native'

const PageContainer: React.FC<any> = (props) => {
  return (
    <View className="flex-1 px-20">
      {props.children}
    </View>
  )
}

export default PageContainer
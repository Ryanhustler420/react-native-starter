import { View, Text, Image } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
        }}
      >
        <Tabs.Screen 
          name="home" 
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name='home-outline' color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen 
          name="create" 
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name='add-outline' color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen 
          name="profile" 
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name='person-outline' color={color} size={24} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
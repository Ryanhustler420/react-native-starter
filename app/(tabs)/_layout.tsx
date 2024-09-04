import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerTitle: "",
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
        }}
      >
        <Tabs.Screen 
          name="home" 
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name='home-outline' color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen 
          name="create" 
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name='add-outline' color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen 
          name="profile" 
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name='person-outline' color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
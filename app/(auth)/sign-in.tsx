import React, { useCallback, useReducer } from 'react'
import { Text, SafeAreaView, Alert } from 'react-native'

const initialState = { valid: false };
const reducer = (state: any, action: any) => {
  const { result } = action;
  return { ...state, valid: result === undefined };
}

const SignIn = () => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const onHandleInput = useCallback(() => {
    dispatchFormState({ result: undefined });
    Alert.alert("User has signed in");
  }, []);

  return (
    <SafeAreaView>
      <Text>SignIn</Text>
    </SafeAreaView>
  )
}

export default SignIn
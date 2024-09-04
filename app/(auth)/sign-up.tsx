import { useDispatch, useSelector } from "react-redux";
import { signup } from "@/store/actions/authActions";
import { selectAuth } from "@/store/authSlice";
import { AppDispatch } from "@/store/store";
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector(selectAuth);

  useEffect(() => {
    const call = async () => {
      dispatch(signup());
    };
    call();
  }, []);

  return (
    <View>
      <Text>SignUp</Text>
    </View>
  )
}

export default SignUp
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HotelFlatList from "../screens/HotelFlatList";
import Home from "./Home";
import SquareInLoop from "../screens/SquareInLoop";
import RippleEffectAnimation from "../screens/RippleEffectAnimation";
import SquareInsideCircle from "../screens/SquareInsideCircle";
import DoubleTapLikeInstagram from "../screens/DoubleTapLikeInstagram";
import ImageDoubleTap from "../screens/ImageDoubleTap";
import SwipeToDelete from "../screens/SwipeToDelete";
import ScrollViewFromScratch from "../screens/ScrollViewFromScratch";
import FlashMessage from "../screens/FlashMessage";
import { EnteringExisting } from "../screens/EnteringExisting";
import DragAndDrop from "../screens/DragAndDrop";
import Draw from "../screens/Draw";
import PanResponder from "../screens/PanResponderView";
import FacebookLike from "../screens/FacebookLike";
import LogInWithImage from "../screens/LogInWithImage";
import WhatsUpReanimated from "../screens/WhatsUpReanimated";
import ColorPiker from "../screens/ColorPiker";
import PerspectiveMenu from "../screens/PerspectiveMenu";
import DiveInCircle from '../screens/DiveInCircle';
import Bubble from '../screens/Bubble';
import BottomSheet from '../screens/BottomSheet';
import Clock from '../screens/Clock';
import Skeleton from "../screens/Skeleton";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Skeleton" component={Skeleton} />
      <Stack.Screen name="Clock" component={Clock} />
      <Stack.Screen name="BottomSheet" component={BottomSheet} />
      <Stack.Screen name="Bubble" component={Bubble} />
      <Stack.Screen name="DiveInCircle" component={DiveInCircle} />
      <Stack.Screen name="PerspectiveMenu" component={PerspectiveMenu} />
      <Stack.Screen name="ColorPiker" component={ColorPiker} />
      <Stack.Screen name="WhatsUpReanimated" component={WhatsUpReanimated} />
      <Stack.Screen name="LogInWithImage" component={LogInWithImage} />
      <Stack.Screen name="FacebookLike" component={FacebookLike} />
      <Stack.Screen name="PanResponder" component={PanResponder} />
      <Stack.Screen name="Draw" component={Draw} />
      <Stack.Screen name="EnteringExisting" component={EnteringExisting} />
      <Stack.Screen name="DragAndDrop" component={DragAndDrop} />
      <Stack.Screen name="FlashMessage" component={FlashMessage} />
      <Stack.Screen
        name="ScrollViewFromScratch"
        component={ScrollViewFromScratch}
      />
      <Stack.Screen name="HotelFlatList" component={HotelFlatList} />
      <Stack.Screen name="SquareInLoop" component={SquareInLoop} />
      <Stack.Screen
        name="RippleEffectAnimation"
        component={RippleEffectAnimation}
      />
      <Stack.Screen name="SquareInsideCircle" component={SquareInsideCircle} />
      <Stack.Screen
        name="DoubleTapLikeInstagram"
        component={DoubleTapLikeInstagram}
      />
      <Stack.Screen name="ImageDoubleTap" component={ImageDoubleTap} />
      <Stack.Screen name="SwipeToDelete" component={SwipeToDelete} />
    </Stack.Navigator>
  );
}

export default Navigation;

// export default Navigation;

import { Dimensions } from "react-native";

export const WIDTH = Dimensions.get("window").width;
export const WIDTHSCREEN = Dimensions.get("screen").width;
export const HEIGHTSCREEN = Dimensions.get("screen").height;
export const HEIGHT = Dimensions.get("window").height;

export const SHADOW = {
    shadowColor: "#000000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
};
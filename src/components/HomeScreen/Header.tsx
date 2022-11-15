import { Box, Input, Text, useColorModeValue } from "native-base";
import { ImageBackground } from "react-native";

function Header() {
  return (
    <ImageBackground source={require("../../../assets/background.jpg")}>
      <Box alignItems={"center"} px="12" py="8" justifyContent={"center"}>
        <Text
          fontSize={"2xl"}
          noOfLines={2}
          pb={"10"}
          fontWeight={"bold"}
          color={"coolGray.500"}
          textAlign={"center"}
        >
          Check Out All the High Quality Wallpaper's
        </Text>
        <Input
          placeholder="Search Wallpaper"
          rounded="xl"
          fontSize={"md"}
          px="4"
          py="2"
          _focus={{
            borderColor: useColorModeValue("coolGray.200", "coolGray.700"),
            bg: useColorModeValue("coolGray.100", "coolGray.700"),
          }}
          _light={{
            bg: "blueGray.50",
            placeholderTextColor: "blueGray.400",
          }}
          _dark={{
            bg: "blueGray.700",
            placeholderTextColor: "blueGray.50",
          }}
          color={"blueGray.400"}
        />
      </Box>
    </ImageBackground>
  );
}
export default Header;

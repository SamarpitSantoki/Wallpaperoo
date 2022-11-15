import { Box, Center, Divider, Image, Text, VStack } from "native-base";
function Paper() {
  return (
    <Center
      overflow={"hidden"}
      h="48"
      w="175px"
      rounded="3xl"
      style={{
        elevation: 5,
      }}
    >
      <Image
        alt="image base"
        resizeMode="contain"
        source={require("../../../assets/death.png")}
      />
    </Center>
  );
}
export default Paper;

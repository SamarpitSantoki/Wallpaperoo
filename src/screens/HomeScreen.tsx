import { Box, Button, FlatList, useColorMode } from "native-base";
import Header from "../components/HomeScreen/Header";
import Paper from "../components/HomeScreen/Paper";

function HomeScreen() {
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      _dark={{
        bg: "blueGray.900",
      }}
      _light={{
        bg: "blueGray.50",
      }}
      flex={1}
    >
      <Header />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
        renderItem={({ item }) => <Paper key={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingBottom: 10,
          paddingHorizontal: 5,
        }}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      />
    </Box>
  );
}
export default HomeScreen;

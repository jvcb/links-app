import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

export function Categories() {
  return (
    <>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Category name={item.name} icon={item.icon} />}
        keyExtractor={(item) => item.id}
        horizontal
        style={styles.container}
        contentContainerStyle={styles.content}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}
import { Image, StyleSheet, Text, View } from "react-native";

export const GameCard = ({ game }) => {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}>Score: {game.score}</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 10,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    marginTop: 5,
  },
  score: {
    color: "#fff",
  },
  description: {
    color: "#fff",
    marginTop: 5,
  },
});

import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";
import { Logo } from "./Logo";

// Datos de prueba mientras la API no funciona
const mockGames = [
  {
    slug: "the-legend-of-zelda-breath-of-the-wild",
    title: "The Legend of Zelda: Breath of the Wild",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=107&h=147&fit=crop",
    score: 97,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate magni fugit molestias nisi omnis delenitiperferendis facere odio, minima perspiciatis quisquam voluptatem hic ratione. Odio qui tenetur porro labore.",
  },
  {
    slug: "god-of-war",
    title: "God of War",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=107&h=147&fit=crop",
    score: 94,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate magni fugit molestias nisi omnis delenitiperferendis facere odio, minima perspiciatis quisquam voluptatem hic ratione. Odio qui tenetur porro labore.",
  },
  {
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=107&h=147&fit=crop",
    score: 97,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate magni fugit molestias nisi omnis delenitiperferendis facere odio, minima perspiciatis quisquam voluptatem hic ratione. Odio qui tenetur porro labore.",
  },
  {
    slug: "red-dead-redemption-3",
    title: "Red Dead Redemption 2",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=107&h=147&fit=crop",
    score: 97,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate magni fugit molestias nisi omnis delenitiperferendis facere odio, minima perspiciatis quisquam voluptatem hic ratione. Odio qui tenetur porro labore.",
  },
  {
    slug: "red-dead-redemption-4",
    title: "Red Dead Redemption 2",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=107&h=147&fit=crop",
    score: 97,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate magni fugit molestias nisi omnis delenitiperferendis facere odio, minima perspiciatis quisquam voluptatem hic ratione. Odio qui tenetur porro labore.",
  },
  {
    slug: "red-dead-redemption-5",
    title: "Red Dead Redemption 2",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=107&h=147&fit=crop",
    score: 97,
    description: "Western masterpiece",
  },
];

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    // Simulamos una llamada a API
    setTimeout(() => {
      setGames(mockGames);
    }, 500);
  }, []);

  return (
  <View
    style={{
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    }}
  >
    <Logo />
    <FlatList
      data={games}
      keyExtractor={game => game.slug}
      renderItem={({ item }) => <GameCard game={item}/>}
    />
  </View>
);
}

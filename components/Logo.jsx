// Logo.jsx
import { View, Text } from 'react-native';

export function Logo() {
  return (
    <View style={{ 
      width: 'full', 
      height: 50, 
      backgroundColor: '#6366f1', 
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10
    }}>
      <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>🎮 Top Juegos</Text>
    </View>
  );
}
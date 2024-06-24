import 'react-native-gesture-handler';
import Routes from './routes/index';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return <Routes styles={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Altere esta cor para a cor de fundo desejada
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import { StyleSheet,  View } from 'react-native';
import PdfRead from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <PdfRead />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

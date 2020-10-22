import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    titulo: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    titulo: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    titulo: 'Third Item',
  },
];
const respuesta = async () => {
  try {
    let a = await fetch('http://localhost:3000/cases')
    let res = await a.json()
    console.log(res[1])
    return res
  } catch (error) {
    console.log(error)
  }
}
const a = {
  algo: respuesta(),
  read: 'ok'
}
console.log(a)
console.log(DATA)
const Item = ({ titulo }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{titulo}</Text>
  </View>
);

const App = () => {
  respuesta()
  const renderItem = ({ item }) => (
    <Item titulo={item.titulo} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;

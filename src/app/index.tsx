import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '@/components/organisms';
import { colors } from '@/theme/colors';

type Item = {
  id: string;
  title: string;
  done: boolean;
};

export default function HomeScreen() {
  const [text, setText] = useState('');
  const [items, setItems] = useState<Item[]>([]);

  function handleAdd() {
    const title = text.trim();
    if (!title) return;

    setItems((current) => [...current, { id: Date.now().toString(), title, done: false }]);
    setText('');
  }

  return (
    <View style={styles.container}>
      <Header
        value={text}
        onChangeText={setText}
        onAdd={handleAdd}
        createdCount={items.length}
        doneCount={items.filter((item) => item.done).length}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray700,
  },
});

import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.contaner}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2021年4月28日 10:00</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト書体やレイアウトなどを確認するために用います。
          本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>

      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="edit-2"
        onPress={() => { navigation.navigate('MemoEdit'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  ActivityIndicator,
  View,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {addTracks, setupPlayer} from './servicePlay';

function Music() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();
      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks();
      }
      setIsPlayerReady(isSetup);
    }
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#bbb" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Play" color="#777" onPress={() => TrackPlayer.play()} />
        <Button
          title="Pause"
          color="#777"
          onPress={() => TrackPlayer.pause()}
        />
        <Button
          title="Next"
          color="#777"
          onPress={() => TrackPlayer.skipToNext()}
        />
        <Button
          title="Previous"
          color="#777"
          onPress={() => TrackPlayer.skipToPrevious()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#112',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Music;

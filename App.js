/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // send file to server
  const sendFile = async () => {

    console.log('starting')

    // create blob from image

    const uri = 'https://images.unsplash.com/photo-1669557812723-665dff7e92b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';
    const response = await fetch(uri);
    const imgBlob = await response.blob();


    fetch("https://pod-000-1400-06.backblaze.com/b2api/v2/b2_upload_file/ea230fff2fc2af978a400f12/c000_v0001400_t0046", {
      body: imgBlob,
      headers: {
        Authorization: "4_000a3fff2f7a0f20000000005_01a8a189_cd0170_upld_f3Q0ZNHfYw6QuoMXFMWM-q5c2q4=",
        "Content-Type": "image/jpeg",
        "X-Bz-Content-Sha1": "do_not_verify",
        "X-Bz-File-Name": "first-file21",
        "X-Bz-Info-Author": "unknown",
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then((response) => {
      console.log('response2', response)
    }).catch((error) => {
      //check the response
      console.log('error', error)
    })


  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>


          <Image
            style={styles.logo}
            source={{
              uri: 'https://files-test-wiins.s3.us-west-000.backblazeb2.com/jayson-hinrichsen-Wq0b9wxMmgc-unsplash.jpg',
            }}
          />

          <Button title="Send File" onPress={sendFile} />



        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 266,
    height: 258,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

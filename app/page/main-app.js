import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class MainApp extends Component {

  onPress = async () => {
    console.log('starting');

    // create blob from image

    const uri =
      'https://images.unsplash.com/photo-1669557812723-665dff7e92b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';
    const response = await fetch(uri);
    const imgBlob = await response.blob();

    fetch(
      'https://pod-000-1400-06.backblaze.com/b2api/v2/b2_upload_file/ea230fff2fc2af978a400f12/c000_v0001400_t0046',
      {
        body: imgBlob,
        headers: {
          Authorization:
            '4_000a3fff2f7a0f20000000005_01a8a189_cd0170_upld_f3Q0ZNHfYw6QuoMXFMWM-q5c2q4=',
          'Content-Type': 'image/jpeg',
          'X-Bz-Content-Sha1': 'do_not_verify',
          'X-Bz-File-Name': 'first-file21',
          'X-Bz-Info-Author': 'unknown',
        },
        method: 'POST',
      },
    )
      .then(response => response.json())
      .then(response => {
        console.log('response2', response);
      })
      .catch(error => {
        //check the response
        console.log('error', error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Click me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
});

export default MainApp;

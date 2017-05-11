import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  CameraRoll,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  imageGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

class MyCameraRoll extends Component {
  constructor(props){
   super(props);
  this.state= {
      images: [],
      selected:'',
    };

    this.storeImages=this.storeImages.bind(this);
    this.logImageError = this.logImageError.bind(this);
  }

  componentDidMount() {
    const fetchParams = {
      first: 20,
    };
    CameraRoll.getPhotos(fetchParams, this.storeImages, this.logImageError);
  }
  selectImage(uri){
    setState={
      selected:uri,
    }
    console.log('Selected Image:',uri);
  }

  storeImages(data) {
    const assets = data.edges;
    const images = assets.map((asset) => asset.node.image);
    this.setState({
      images: images,
    });
  }

  logImageError(err) {
    console.log(err);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageGrid}>
        { this.state.images.map((image) => {
                  return (
                    <TouchableHighlight onPress={this.selectImage.bind(null, image.uri)}>
                      <Image style={styles.image} source={{ uri: image.uri }} />
                    </TouchableHighlight>
                  );
                })
              }
        </View>
      </ScrollView>
    );
  }

}
export default MyCameraRoll;

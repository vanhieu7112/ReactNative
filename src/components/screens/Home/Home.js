import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';
import Swiper from 'react-native-swiper';
import Collection from './Collection';
// import Category from './Category';
// import TopProduct from './TopProduct';

// const { height } = Dimensions.get('window');
const { width, height } = Dimensions.get('window');
const url = 'http://192.168.1.3/api/images/type/';
const urlProduct = 'http://192.168.1.3/api/images/product/';
export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      types: [],
      topProducts: [],
      visibleSwiper: false
    };
  }
  componentDidMount() {
    fetch('http://192.168.1.3/api/')
      .then(res => res.json())
      .then(resJSON => {
        const { type, product } = resJSON;
        this.setState({ types: type, topProducts: product });
      });
    setTimeout(() => {
      this.setState({
        visibleSwiper: true
      });
    }, 100);
  }

  // static navigationOptions = {
  //   title: 'HOME',
  //   tabBarLabel: 'Home',
  //   tabBarIcon: ({ tintColor }) => (
  //     <Image
  //       source={require('../../imgs/home11.png')}
  //       style={[styles.icon, { tintColor }]}
  //     />
  //   )
  // };


  openListProduct() {
    this.props.navigation.navigate('ListProduct');
  }
  openDetail() {
    this.props.navigation.navigate('ProductDetail', { thamso: 'hieu', tham: '100$' });
  }
  render() {
    const { types, topProducts } = this.state;
    const { navigate } = this.props.navigation;
    const { wrapper, texStyle, imageStyle, scrollwrap, cateTitle } = styles;
    const { containerTopProduct, titleContainer, title,
      body, productContainer, productImage,
      productName, productPrice
    } = styles;
    let swiper = null;
    if (this.state.visibleSwiper) {
      swiper = (<Swiper
        dotColor={'#E0E0E0'}
        activeDotColor={'#34B089'}
        horizontal
        loop={true}
        bounces
        autoplay
        autoplayTimeout={4}
        showsButtons={false}
        removeClippedSubviews={false}
      >
        {types.map(e => (
          <View style={imageStyle} key={e.id}>
            <TouchableOpacity onPress={() => { navigate('ListProduct'); }}>
              <ImageBackground source={{ uri: `${url}${e.image}` }} resizeMode='cover' style={imageStyle} >
                <Text style={cateTitle}>
                  {e.name}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ))}
      </Swiper>);
    } else {
      swiper = <View />;
    }
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#BDBDBD' }}>
        <Collection />
        <View style={wrapper}>
          <View style={{ height: 50, justifyContent: 'center' }}>
            <Text style={texStyle}>LIST OF CATEGORY</Text>
          </View>
          <View style={{ flex: 4 }}>
            {swiper}
          </View>
        </View>
    

        <View style={containerTopProduct}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    <FlatList
                        data={this.state.topProducts}
                        renderItem={({ item }) =>
                            <View>  
                                <TouchableOpacity style={productContainer} onPress={() => { navigate('ProductDetail', { name: item.name, price: item.price, description: item.description, material: item.material, color: item.color, image0: item.images[0], image1: item.images[1] }); }}>
                                    <Image source={{ uri: `${urlProduct}${item.images[0]}` }} style={productImage} />
                                    <Text style={productName}>{item.name.toUpperCase()}</Text>
                                    <Text style={productPrice}>{item.price}$</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        numColumns={2}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
      </ScrollView>
    );
  }
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const productWidth = (width - 60) / 2;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#BDBDBD',
  },
  wrapper: {
    height: height * 0.35,
    backgroundColor: '#FFF',
    margin: 10,
    elevation: 4,
    padding: 10,
    paddingTop: 0,
    // paddingBottom: 5 
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texStyle: {
    fontSize: 20,
    color: '#AFAEAF'
  },
  scrollwrap: {
    backgroundColor: '#f3f3f3',
  },
  cateTitle: {
    fontSize: 17,
    color: '#9A9A9A',
    fontFamily: 'Rubik'
  },
  containerTopProduct: {
    backgroundColor: '#fff',
    margin: 10,
    elevation: 5,
},
titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
},
title: {
    fontSize: 20,
    color: '#D3D3CF'
},
body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingBottom: 0
},
productContainer: {
    marginTop: 0,
    margin: 10,
    width: productWidth,
    elevation: 3,
    paddingBottom: 10,
    marginBottom: 10,
    borderWidth: 0
},
productImage: {
    width: productWidth,
    height: productImageHeight,
},
productName: {
    marginVertical: 5,
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#D3D3CF',
    fontWeight: '500'
},
productPrice: {
    // marginBottom: -10,
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#662F90'
}
});

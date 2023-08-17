import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import WebView from 'react-native-webview';

export default class StarMapScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
         longitude: ' ', latitude: ' ' ,
         starmap: {}
        }
    }

    render() {

    const {longitude, latitude } = this.state;
    const path= https://virtualsky.lco.global/embed/index.html?longitude=
    ${longitude}&latitude=${latitude} & constellations=true&constellationlabels=
    true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&show
    date=false&showposition=false

        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text>
                    Star Map
                </Text>
            </View>
        )
    }

    <View style={styles.mapContainer}>
    <WebView
        style={styles.map}
        region={{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
        }}
    ></WebView> </View>

    <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        latitude='28.704060'
        latitudeTextColor="#ffff"
        onChangeText={(text) => {
            this.setState({
                latitude: 28.704060
            })
        }}
    />

    <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        longitude='77.102493'
        longitudeTextColor="#ffff"
        onChangeText={(text) => {
            this.setState({
                longitude: 77.102493
            })
        }}
    />

        

    



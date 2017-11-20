import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Body, Title } from 'native-base';
import firebase from 'firebase';

class App extends Component {

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyAMLlSwtQ_RMehddB4TSVPrNCZBvIf9h8c",
            authDomain: "reactauth-897c9.firebaseapp.com",
            databaseURL: "https://reactauth-897c9.firebaseio.com",
            projectId: "reactauth-897c9",
            storageBucket: "reactauth-897c9.appspot.com",
            messagingSenderId: "730043224463"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <View>
                <Header>
                    <Body style={{ marginLeft: 5 }} >
                        <Title>Firebase Auth</Title>
                    </Body>
                </Header>
                <Text>Firebase auth</Text>
            </View>
        );
    }
}

export default App;
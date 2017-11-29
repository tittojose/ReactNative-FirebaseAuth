import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Body, Title } from 'native-base';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Input, Button, Content, Text } from 'native-base';
import AppSpinner from './components/common/AppSpinner';

class App extends Component {

    state = { loggedIn: null };

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
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button block
                        style={{ margin: 5 }}
                        onPress={this.onLogoutClicked.bind(this)}>
                        <Text>Logout</Text>
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={{
                        marginTop: 100
                    }}>
                        <AppSpinner />
                    </View>);

        }


    }

    onLogoutClicked() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View>
                <Header>
                    <Body style={{ marginLeft: 5 }} >
                        <Title>Firebase Auth</Title>
                    </Body>
                </Header>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
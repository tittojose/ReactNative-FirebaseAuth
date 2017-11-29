import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import { Input, Button, Content, Text } from 'native-base';
import firebase from 'firebase';
import AppSpinner from './common/AppSpinner';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({
            error: '',
            loading: true
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.createUser.bind(this));
    }

    createUser() {
        console.log('signup called');
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
    }

    onLoginSuccess() {
        console.log('login/signup success');
        this.setState({ error: '', loading: false, email: '', password: '' });
    }

    onLoginFail() {
        console.log('login/signup failed');
        this.setState({ error: 'Auth failed', loading: false, password: '' });
    }

    renderButton() {
        if (this.state.loading) {
            return (<AppSpinner />);
        }

        return (<Button block onPress={this.onButtonPress.bind(this)}>
            <Text>Login</Text>
        </Button>
        );

    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        autoCorrect={false}
                        value={this.state.text}
                        onChangeText={changedText => this.setState({ email: changedText })}
                        placeholder="Username" />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={changedPassword => this.setState({ password: changedPassword })}
                        placeholder="Password" />
                </CardSection>

                <Text>{this.state.error}</Text>

                <CardSection>
                    <Content >

                        {this.renderButton()}

                    </Content>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
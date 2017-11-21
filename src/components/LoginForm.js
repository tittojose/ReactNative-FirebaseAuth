import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import { Input, Button, Content, Text } from 'native-base';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };
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
                <CardSection>
                    <Content >
                        <Button block >
                            <Text>Login</Text>
                        </Button>
                    </Content>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
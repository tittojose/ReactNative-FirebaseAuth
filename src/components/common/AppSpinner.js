import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Spinner } from 'native-base';

const AppSpinner = () => {
    return (
        <View style={styles.spinnerStyle}>
            <Spinner  color='blue'/>
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default AppSpinner;
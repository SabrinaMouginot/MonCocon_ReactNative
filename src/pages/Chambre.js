import React from 'react';
import { View, Text, Button } from 'react-native';

const Chambre = ({ navigation }) => {
    return (
        <View>
            <Text>Chambre</Text>
            <Button title="Voir la Bibliothèque" onPress={() => navigation.navigate('Liste')} />
        </View>
    );
};

export default Chambre;

// import React from 'react';
// import { View, Text } from 'react-native';

// const Liste = ({ navigation }) => {
//     return (
//         <View>
//             <Text>Liste</Text>
//         </View>
//     );
// };

// export default Liste;


import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Liste = () => {
    // Exemple de données pour la liste
    const [items, setItems] = useState([
        { id: '1', name: 'Livre A', checked: false },
        { id: '2', name: 'Livre B', checked: false },
        { id: '3', name: 'Livre C', checked: false },
    ]);

    // Fonction pour gérer le changement d'état des checkbox
    const toggleCheckbox = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    // Composant pour afficher chaque élément de la liste
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => toggleCheckbox(item.id)}
        >
            <View style={styles.checkbox}>
                {item.checked && <View style={styles.checked} />}
            </View>
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ma Liste</Text>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

// Styles pour le composant
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checked: {
        width: 12,
        height: 12,
        backgroundColor: '#000',
    },
    text: {
        fontSize: 16,
    },
});

export default Liste;

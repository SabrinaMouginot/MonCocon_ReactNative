import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const GestionListe = () => {
    // État de la liste
    const [liste, setListe] = useState([
        { id: '1', text: 'Élément 1' },
        { id: '2', text: 'Élément 2' },
    ]);

    // État pour le texte d'ajout/modification
    const [nouveauTexte, setNouveauTexte] = useState('');
    const [idEnCours, setIdEnCours] = useState(null); // ID de l'élément à modifier (si applicable)

    // Ajouter une ligne
    const ajouterLigne = () => {
        if (nouveauTexte.trim() === '') {
            return;
        }

        if (idEnCours) {
            // Modifier un élément existant
            const nouvelleListe = liste.map((item) =>
                item.id === idEnCours ? { ...item, text: nouveauTexte } : item
            );
            setListe(nouvelleListe);
            setIdEnCours(null); // Réinitialiser après modification
        } else {
            // Ajouter un nouvel élément
            setListe([...liste, { id: Date.now().toString(), text: nouveauTexte }]);
        }
        setNouveauTexte(''); // Réinitialiser le champ
    };

    // Supprimer une ligne
    const supprimerLigne = (id) => {
        const nouvelleListe = liste.filter((item) => item.id !== id);
        setListe(nouvelleListe);
    };

    // Préparer la modification
    const preparerModification = (item) => {
        setNouveauTexte(item.text);
        setIdEnCours(item.id);
    };

    return (
        <View style={styles.container}>
            {/* Liste affichée */}
            <FlatList
                data={liste}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.text}</Text>
                        <TouchableOpacity
                            style={styles.editButton}
                            onPress={() => preparerModification(item)}
                        >
                            <Text style={styles.buttonText}>Modifier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => supprimerLigne(item.id)}
                        >
                            <Text style={styles.buttonText}>Supprimer</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            {/* Formulaire d'ajout/modification */}
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Ajouter/modifier un élément"
                    value={nouveauTexte}
                    onChangeText={(text) => setNouveauTexte(text)}
                />
                <Button title={idEnCours ? 'Modifier' : 'Ajouter'} onPress={ajouterLigne} />
            </View>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    itemText: {
        fontSize: 16,
        flex: 1,
    },
    editButton: {
        marginRight: 10,
        padding: 5,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    deleteButton: {
        padding: 5,
        backgroundColor: '#dc3545',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    },
    form: {
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#ffffff',
    },
});

export default GestionListe;

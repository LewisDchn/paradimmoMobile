import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Price from './Price';



/**
 * Cette méthode récupère les informations de toutes les propriétées dans la base de donnée
 * @returns View
 * retourne la liste de toutes les propriétées
 */
const Property = ({route}) => {
    var details = route.params.data.item;
    return (
        <View style={styles.baseContainer}>
            <View style={styles.container}>
                <Image style={styles.propertyCaroussel} source={require('../assets/images/maisonExterieur.jpg')} />
                <Text style={styles.propertyType}>Maison à vendre</Text>
                <Text style={styles.surfaceMetrage}>5 pièces - 130m²</Text>
                <Text style={styles.surfaceMetrage}>{details.city}</Text>
                <Text style={styles.surfaceMetrage}>ref: {details.reference}</Text>
                <Text style={styles.propertyPrice}><Price data={details.price} /></Text>
                <View>
                    <Text style={styles.propertyDescription}>
                        {details.description}
                    </Text>
                </View>
                <View style={styles.criteriaPropertyList}>
                    <Text style={styles.criteriaPropertyOne}>Construit en 1900</Text>
                    <Text style={styles.criteriaPropertyOne}>Construit en 1900</Text>
                    <Text style={styles.criteriaPropertyOne}>Construit en 1900</Text>
                    <Text style={styles.showMoreCriteriaButton }>Voir plus</Text>
                </View>
                <Text style={styles.energeticTitle}>Bilan énergétique</Text>
                <View style={styles.energeticLine}>
                    <View style={ styles.energeticLineDescription }>
                        <Text style={ styles.energeticLineDescription }>Consommation énergétique</Text>
                    </View>
                    <View style={ styles.energeticLineNote }>
                        <Text style={ styles.energeticLineNoteText }>A</Text>
                    </View>
                </View>
                <View style={styles.energeticLine}>
                    <View style={ styles.energeticLineDescription }>
                        <Text style={ styles.energeticLineDescription }>Emission GES</Text>
                    </View>
                    <View style={ styles.energeticLineNote}>
                        <Text style={ styles.energeticLineNoteText }>A</Text>
                    </View>
                </View>
                <View>
                    <Image style={ styles.propertyMap } source={require('../assets/images/exempleMap.jpg')} />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    baseContainer: {
        backgroundColor: "#157347",
        paddingTop: 24,
    },
    container: {
		minHeight: "97%",
		backgroundColor: "#fff",
        paddingTop: 15,
        paddingLeft: 8,
        paddingRight: 8,
    },
    propertyCaroussel: {
        maxHeight: '15%',
        maxWidth: '98%',
        borderRadius: 20,
    },
    propertyType: {
        fontSize: 20,
        marginTop: 15,
    },
    surfaceMetrage: {
        color: '#157347',
        fontWeight: 'bold',
    },
    propertyPrice: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
    },
    propertyDescription: {
        marginTop: 10,
    },
    criteriaPropertyList: {
        backgroundColor: '#157347',
        borderRadius: 20,
        marginTop: 15,
    },
    criteriaPropertyOne: {
        backgroundColor: '#FFFFFF',
        padding: 5,
        margin: 20,
        marginBottom: 0,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
    },
    showMoreCriteriaButton: {
        textAlign: 'right',
        marginRight: 20,
        marginTop: 5,
        color: '#FFFFFF',
        fontSize: 15
    },
    energeticTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 15,
    },
    energeticLine: {
        flexDirection: 'row',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
    },
    energeticLineDescription: {
        flexDirection: 'row',
        flex: 5,
        margin: 5,
        fontSize: 20,
    },
    energeticLineNote: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#157347',
        borderRadius: 8,
    }, 
    energeticLineNoteText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    propertyMap: {
        maxWidth: '100%',
        maxHeight: 200,
        marginTop: 30,
        borderRadius: 20,
    }
});

export default Property;
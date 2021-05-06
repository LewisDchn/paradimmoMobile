import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

/**
 * Cette méthode récupère les informations de toutes les propriétées dand la base de donnée
 * @returns View
 * retourne la liste de toutes les propriétées
 */
const Property = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://no.api.paradimmo.manusien-ecolelamanu.fr/public/property', {
            method :'GET',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    })
    return (
        <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Text>prix = {item.price}, {item.address}</Text>
                )}
            />
        )}
        </View>
    );
}

export default Property;
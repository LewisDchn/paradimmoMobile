import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const Profil = () => {
    const [isLoading, setLoading] = useState(true);
	const [dataProfile, setData] = useState([]);

	useEffect(() => {
		fetch("http://no.api.paradimmo.manusien-ecolelamanu.fr/public/user/1", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);
    console.log(data);
    return (
        <ScrollView>
            <View style={styles.baseContener}>
                <View style={styles.couverture}>
                    <Image style={styles.couvertureImg} source={require('../assets/images/couverture.jpg')} />
                    <Image style={styles.profilPhoto} source={require('../assets/images/profilPhoto.jpg')} />
                </View>
                <View style={styles.contenu}>
                    <Text style={styles.profilName}>Elena FISHER</Text>
                    <View style={styles.fastDescription}>
                        <View style={styles.align}>
                            <FontAwesome name="map-marker" size={20} color="black" />
                            <Text style={styles.city}>Amiens</Text>
                        </View>
                        <Text style={styles.address}>135 rue zanzibarre, 80 000</Text>
                        <Text style={styles.phone}>03 69 85 32 01</Text>
                        <Text style={styles.phone}>06 56 21 98 74</Text>
                        <View style={styles.align} style={styles.spaceBetween}>
                            <Text style={styles.mail}>jeanbonfleuri@gmail.com</Text>
                            <TouchableOpacity style={styles.contactButton}>
                                <Text style={styles.contactButtonText}>Contacter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    align: {
        flexDirection: 'row',
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    couverture: {
        maxHeight: '30%',
    },
    couvertureImg: {
        maxWidth: '100%',
        maxHeight: 150,
    },
    profilPhoto: {
        elevation: 8,
        marginTop: -125,
        maxHeight: 100,
        maxWidth: 100,
        borderRadius: 100,
        alignSelf: "center",
    },
    contenu: {
        marginTop: -50,
    },
    profilName: {
        textAlign: 'center',
        fontSize: 30,
    },
    fastDescription: {
        margin: '7%',
    },
    city: {
        marginLeft: '5%',
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
    address: {
        marginBottom: 10,
    },
    phone: {
        marginBottom: 10,
        fontWeight: 'bold',
    },
    contactButton: {
        elevation: 8,
        backgroundColor: "#157347",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    contactButtonText: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})
export default Profil;
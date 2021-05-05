import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Icon from 'react-native-ionicons';


const Home = () => {
    return (
        <View style={styles.baseContainer}>
            <Image style={styles.logo} source={require('../assets/logo-text.png')} />
            <View style={[styles.container, { flexDirection: 'row' }]}>
                <View style={styles.quotes}>

                </View>
                <View style={styles.opinion}>
                    <Text style={styles.textOpinion}>Avis clients</Text>
                </View>
                <View style={styles.recentEmail}>
                    <Icon ios="ios-add" android="md-add" style={styles.numberMail} />
                    <Text style={styles.textRecentEmail}>Derniers E-mails</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    baseContainer: {
        backgroundColor: '#157347',
        flex: 1,
        padding: 15,
    },
    logo: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        marginTop: 20
    },
    container: {
        minHeight: '75%',
        backgroundColor: '#fff',
        borderRadius: 30,
    },
    opinion: {
        flex: 0.5,
        backgroundColor: '#f5f5f5',
        shadowColor: "black",
        height: '25%',
        borderRadius: 30,
        margin: 20,
    },
    recentEmail: {
        flex: 0.5,
        backgroundColor: '#30a25e',
        shadowColor: "black",
        height: '25%',
        borderRadius: 30,
        margin: 20,
    },
    textRecentEmail: {
        alignSelf: 'center',
        marginTop: 10,
        color: '#fff',
        fontWeight: 'bold',

    },
    numberMail: {
        alignSelf: 'flex-end',
        position: 'absolute',
    },
    textOpinion: {
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    }
});
export default Home;
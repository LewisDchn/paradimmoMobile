import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendars from "./calendars";
import Agendas from "./agendas";

const Home = () => {
    return (
        <View style={styles.baseContainer}>
            <Image style={styles.logo} source={require('../assets/images/logo-text.png')} />
            <ScrollView style={styles.container}>
                <View style={[styles.quotes, { flexDirection: 'row' }]}>
                    <FontAwesome name="quote-left" size={20} color="black" />
                    <Text style={styles.textQuotes}>Tout est possible à qui ose, travail et n'abandonne jamais. -Xavier Dolan-</Text>
                    {/* <Text style={styles.autorsQuotes}>-Xavier Dolan-</Text> */}
                    <FontAwesome name="quote-right" size={20} color="black" />
                </View>
                <View style={{ backgroundColor: '#b6c1cd', width: '90%', height: 2, alignSelf: 'center', marginTop: 15 }}></View>
                <View style={[styles.firstContainer, { flexDirection: 'row' }]}>
                    <View style={styles.opinion}>
                        <Text style={styles.textOpinion}>Avis clients</Text>
                    </View>
                    <View style={styles.recentEmail}>
                        <FontAwesome style={styles.logoEmail} name="envelope" size={24} color="white" />
                        <Text style={styles.textRecentEmail}>Derniers E-mails
                        </Text>
                    </View>
                </View>
                <View style={styles.scdContainer}>
                    <View style={styles.calendar}>
                        <Calendars />
                    </View>
                    {/* <View style={styles.agenda}>
                        <Agendas />
                    </View> */}
                </View>
                <View style={[styles.thirdContainer, { flexDirection: 'row' }]}>
                    <View style={styles.rdv}>
                        <View style={styles.firstRdv}>
                            <Text style={styles.textRdv}>Prochain RDV</Text>
                        </View>
                    </View>
                    <View style={styles.recentProperty}>
                        <Image style={styles.imageRecentProperty} source={require('../assets/images/maison1.jpg')} />
                        <FontAwesome style={styles.logoProperty} name="compass" size={24} color="white" />
                        <Text style={styles.textRecentProperty}>Image propriété</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
     // haut de page ----------------------
    baseContainer: {
        backgroundColor: "#157347",
        flex: 1,
        padding: 15,
    },
    logo: {
        alignSelf: "center",
        width: 100,
        height: 100,
        marginTop: 20,
    },
    // 1er conteneur blanc-----------------------
    container: {
        // minHeight: '75%',
        backgroundColor: "#fff",
        borderRadius: 30,
        resizeMode: "cover",
    },
    // citation-----------------------------
    quotes: {
        marginTop: 20,
        alignSelf: "center",
    },
    textQuotes: {
        flex: 0.8,
        alignItems: "center",
    },
    //  Avis et dernier mail ---------------
    firstContainer: {
        height: 200,
        resizeMode: "cover",
    },
    opinion: {
        flex: 0.5,
        backgroundColor: "#f5f5f5",
        shadowColor: "black",
        // height: '25%',
        borderRadius: 30,
        margin: 10,
        resizeMode: "cover",
        overflow: "hidden",
    },
    textOpinion: {
        alignSelf: "center",
        marginTop: 10,
        fontWeight: "bold",
    },
    recentEmail: {
        // flexDirection: "row",
        flex: 0.5,
        backgroundColor: "#30a25e",
        shadowColor: "black",
        // height: '25%',
        borderRadius: 30,
        margin: 10,
    },
    textRecentEmail: {
        // alignSelf: "center",
        marginLeft: 10,
        marginTop: 10,
        color: "#fff",
        fontWeight: "bold",
    },
    logoEmail: {
        paddingRight: 10,
        alignSelf: "flex-end",
        position: "absolute"
    },
    // 2eme conteneur calendrier et agenda ---------------------------------
    scdContainer: {
        flex: 1
    },
    calendar: {
        // flex: 1,
        // alignSelf: "center",
        // backgroundColor: '#30a25e',
        shadowColor: "black",
        borderRadius: 30,
        marginBottom: 20,
    },
    agenda: {
        // alignSelf: "center",
        // backgroundColor: '#30a25e',
        shadowColor: "black",
        borderRadius: 30,
        marginBottom: 20,
    },
    // 3 eme conteneur -------------------------------
    thirdContainer: {
        marginTop: 30,
        height: 200,
    },
    rdv: {
        flex: 0.5,
        backgroundColor: "#f5f5f5",
        shadowColor: "black",
        // height: '25%',
        borderRadius: 30,
        margin: 10,
        resizeMode: "cover",
        overflow: "hidden",
    },
    firstRdv: {
        height: "40%",
        backgroundColor: "#30a25e",
        borderRadius: 30,
        borderBottomRightRadius: 0,
    },
    textRdv: {
        alignSelf: "center",
        marginTop: 10,
        color: "#fff",
        fontWeight: "bold",
    },
    recentProperty: {
        // flexDirection: "row",
        flex: 0.5,
        backgroundColor: "#30a25e",
        shadowColor: "black",
        // height: '25%',
        borderRadius: 30,
        margin: 10,
    },
    textRecentProperty: {
        // alignSelf: "center",
        marginLeft: 10,
        // marginTop: 10,
        color: "#fff",
        fontWeight: "bold",
    },
    imageRecentProperty: {
        alignSelf: "center",
        borderRadius: 30,
        width: 160,
        height: 100,
    }
});
export default Home;

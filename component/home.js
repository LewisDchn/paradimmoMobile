import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, Badge,} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Agendas from "./agenda";
import Price from './Price';



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
                        {/* <Badge value="99+" status="error" /> */}
                        </Text>
                    </View>
                </View>
                <View style={styles.scdContainer}>
                    <ScrollView style={styles.agenda}>
                        <Agendas />
                    </ScrollView>
                </View>
                <View style={[styles.thirdContainer, { flexDirection: 'row' }]}>
                    <View style={styles.rdv}>
                        <View style={styles.firstRdv}>
                            <Text style={styles.textRdv}>Prochain RDV</Text>
                        </View>
                    </View>
                    <View style={styles.recentProperty}>
                        <Image style={styles.imageRecentProperty} source={require('../assets/images/maison1.jpg')} />
                        
                        <Text style={styles.textRecentProperty}><FontAwesome style={styles.logoProperty} name="compass" size={24} color="black" /> Amiens</Text>
                        <Text style={styles.taro}></Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

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
        // flex:1,
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
        shadowColor: '#000',
        shadowOffset: { width: 20, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 5,
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
        shadowColor: '#000',
        shadowOffset: { width: 20, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 5,
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
        flex: 1,
        // overflow: "hidden"
    },
    calendar: {
        // flex: 1,
        // alignSelf: "center",
        // backgroundColor: '#30a25e',
        shadowColor: "black",
        borderRadius: 30,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 20, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 5,
        overflow:"hidden"
    },
    agenda: {
        //alignSelf: "center",
        // backgroundColor: '#30a25e',
        // flex:1,
        shadowColor: "black",
        borderRadius: 30,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 20, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 5,
        // overflow:"hidden"
    },
    // 3eme conteneur ---------------------------------------------------
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
        shadowColor: '#000',
        shadowOffset: { width: 20, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 5,
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
        backgroundColor: "#f5f5f5",
        shadowColor: "black",
        // height: '25%',
        borderRadius: 30,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 20, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 5,
    },
    imageRecentProperty: {
        alignSelf: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: 158,
        flex: 0.6,
        // height: 90,
    },
    textRecentProperty: {
        alignSelf: "center",
        // marginLeft: 5,
        color: "black",
        fontWeight: "bold",
    },
    taro: {
        alignSelf: "center"
    }
});
export default Home;

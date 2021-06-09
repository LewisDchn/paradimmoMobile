import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image, Buttond } from 'react-native';

const Price = ({data, decimal=false}) => {
    var decimal = decimal ? 2 : 0;
    var option = {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: decimal, 
        maximumFractionDigits: decimal,
    }
    var price = new Intl.NumberFormat("fr-FR", option

    ).format(data);
    price = price.substr(1, price.length);
    return(
        <Text>{price} €</Text>
    );
}
export default Price;
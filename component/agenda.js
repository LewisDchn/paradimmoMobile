import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';
import { Rdv } from './rdv'
// import Typography from './Typography';
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";


const Agendas = ({route}) => {
  const [items, setItems] = useState();
  const [day, setDay] = useState(new Date())
  LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    today: 'Aujourd\'hui'
  };
  LocaleConfig.defaultLocale = 'fr';
  useEffect(() => {
    Rdv()
      .then(data => {
        loadItems(data)
      })

  }, [])
  const loadItems = (agenda) => {
    console.log(agenda)
    for (let i = -5; i < 5; i++) {
      var date = new Date
      var strTime = date.toISOString().split('T')[0];
      if (!agenda[strTime]) {
        agenda[strTime] = [];
        const numItems = Math.floor(Math.random() * 3 + 1);
        for (let j = 0; j < numItems; j++) {
          agenda[strTime].push({
            name: 'Rdv de ' + agenda[0].startHour + ' à ' + agenda[0].endHour + ' #' + j,
            height: Math.max(50, Math.floor),
          });
        };
      };
    }
    const newItems = {};
    Object.keys(agenda).forEach((key) => {
      newItems[key] = agenda[key];
    });
    setItems(newItems);
  };


  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="L" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <Agenda
      items={items}
      loadItemsForMonth={loadItems}
      selected={Date}
      renderItem={renderItem}
      firstDay={1}
    />
  );
};

export default Agendas;
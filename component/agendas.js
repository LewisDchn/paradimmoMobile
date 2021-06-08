import React from "react";
import { View } from "react-native";
import { Agenda } from "react-native-calendars";

const Agendas = () => {
    return (
<Agenda
    // La liste des éléments qui doivent être affichés dans l'agenda. Si vous voulez rendre l'élément comme une date vide 
    // la valeur de la clé de date doit être un tableau vide []. S'il n'existe aucune valeur pour la clé de date, il est 
    // considéré que la date en question n'est pas encore chargée 
    items={{
        '2021-06-22': [{ name: 'item 1 - any js object' }],
        '23/06/2021': [{ name: ' item 2 - any js object ', height: 80 }],
        '2021-06-24': [],
        '2021-06-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
    }}
    // Rappel qui est appelé lorsque les éléments d'un certain mois devraient être chargé (le mois est devenu visible) 
    loadItemsForMonth={(month) => { console.log('trigger items loading') }}
    // Rappel qui se déclenche lorsque le calendrier est ouvert ou fermé 
    onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
    // Rappel qui est appelé le jour press 
    onDayPress={(day) => { console.log('day pressed') }}
    // Rappel qui est appelé lorsque le jour change tout en faisant défiler la liste de l'agenda 
    onDayChange={(day) => { console.log('jour changé') }}
    // Jour 
    // selected={}
    // Date minimum pouvant être sélectionnée, les dates antérieures à minDate seront grisées. Par défaut = undefined 
    minDate={'2020-01-01'}
    // Date maximum pouvant être sélectionnée, les dates après maxDate seront grisées. Valeur par défaut= undefined 
    maxDate={'2023-01-01'}
    // Nombre maximal de mois autorisé pour faire défiler vers le passé.{50}
    //  Nombre maximal de mois autorisés à défiler vers le futur. Valeur par défaut = 50 
    futureScrollRange={50}
    // Spécifiez comment chaque élément doit être rendu dans l'agenda
    renderItem={(item, firstItemInDay) => { return (<View />); }}
    // Spécifiez comment chaque date doit être rendue. jour peut être indéfini si l'élément n'est pas le premier ce jour-là.
    renderDay={(day, item) => { return (<View />); }}
    // Spécifie comment le contenu de date vide sans élément doit être rendu.
    renderEmptyDate={() => { return (<View />); }}
    // Spécifie à quoi le bouton d'agenda doit ressembler à
    renderKnob={() => { return (<View />); }}
    // Spécifiez ce qui doit être rendu à la place de ActivityIndicator
    renderEmptyData={() => { return (<View />); }}
    // Spécifiez votre fonction de comparaison d'éléments pour augmenter les performances
    rowHasChanged={(r1, r2) => { return r1.texte !== r2.text }}
    // Cacher le bouton de la molette. Valeur par défaut= false 
    hideKnob={true}
    // Par défaut, les dates de l'agenda sont marquées si elles comportent au moins un élément, mais vous pouvez le remplacer si nécessaire
    markedDates={{
        '2012-05-16': {selected: true, marked: true},
        '2012-05-17': {marked: true},
        '2012-05-18': {disabled: true}
        }}
    // Si désactivéByDefault = {true} dates marquées comme non désactivé sera activé. Default = false
    disabledByDefault={true}
    // Si fourni, un RefreshControl standard sera ajouté pour la fonctionnalité "Pull to Refresh". Assurez-vous également de régler correctement l'hélice de rafraîchissement.
    onRefresh={() => console.log('refreshing ...')}
    // Définissez ceci sur true en attendant de nouvelles données à partir d'une actualisation.
    Refreshing={false}
    // Ajoutez un composant RefreshControl personnalisé, utilisé pour fournir une fonctionnalité d'extraction pour actualiser le ScrollView.
    refreshControl={null}
    // Thème du thème de l' agenda
    theme={{
        // ...calendarTheme,
        agendaDayTextColor: 'yellow',
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
        agendaKnobColor: 'blue'
    }}
// Style de style de conteneur d'agenda = {{}}
/> 
    );
};
export default Agendas;
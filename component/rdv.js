/**
 * La méthode affiche les rdv
 * @returns View
 */
export const Rdv = async() => await fetch("http://no.api.paradimmo.manusien-ecolelamanu.fr/public/agenda", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
            },
        })
            .then((response) => {return response.json()})
    
// Nøgleordet "class adresse" starter en constructor, som tillader os
// - at definere en type (linje 6 ) og et set af metoder samlet på et sted.
//Nedenstående kodning er lavet med udgangspunkt i eksemplet fra side 102 i "Eloquent Javascript"

class Address {
    constructor(zipcode, street, streetnumber, city) {
        this.zipcode = zipcode;
        this.street = street;
        this.streetnumber = streetnumber;
        this.city = city;
    }
}

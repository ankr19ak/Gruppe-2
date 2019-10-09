// Nøgleordet "class adresse" starter en constructor, som tillader os
// - at definere en type (linje 6 ) og et set af metoder samlet på et sted.
//Nedenstående kodning er lavet med udgangspunkt i eksemplet fra side 102 i "Eloquent Javascript"

class adresse {
    constructor(postnummer, vej, nummer, by) {
        this.postnummer = postnummer;
        this.vej = vej;
        this.nummer = nummer;
        this.by = by;
    }
}

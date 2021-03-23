export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllBooks() {
        return this.getResource(`/books/`);
    }
    
    getBook(id) {
        return this.getResource(`/books/${id}/`);
    }
    
    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }
    
    async getCharacter (id) {
        const charcter = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(charcter);
    }
    
    getAllHouses() {
        return this.getResource(`/houses/`);
    }
    
    getHouse(id) {
        return this.getResource(`/houses/${id}/`);
    }

   
     
    isSet (data) 
    {
        if (data){
            return data
        }else{
            return "sorry no data :("
        }
    }

    _transformCharacter(char) {
        return{
            name: this.isSet(char.name), 
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)
        }
    }
    _transformHouse(house){
        return{
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            titles: house.overlord,
            ancestralWepons: house.ancestralWepons
        }
    }

    _transformBook(book){
        return{
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released,
           
        }
    }
}
function language(name, country){
    this.name = name;
    this.country = country;
}


var Hindi = new language('Hindi', 'India');


class language1{
    constructor(name, country){
        this.name = 'English';
        this.country = country
    }
    
}

var Hindi = new language1('Hindi', 'India');

class Mage extends language1{
    constructor(name,country, city){
        super(name,country)
        this.name = name;
        this.country= country
        this.city = city
    }
}


var test1 = new Mage('Test1','England','London')





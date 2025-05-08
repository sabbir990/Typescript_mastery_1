{

    const formatString = (stringValue : string, booleanValue? : boolean) : string => {
        if(typeof booleanValue === "undefined" || booleanValue === true){
            return stringValue.toUpperCase()
        }else{
            return stringValue.toLowerCase()
        }
    }


    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        const filteredItems = items.filter(item => {
            if(item.rating >= 4.0){
                return item
            }
        })

        return filteredItems
    }


    function concatenateArrays<T>(...arrays: T[][]) : T[] {
        const fullArray : T[] = []
        arrays.map((array : T[]) => {
            array.map((singleItem) => {
                fullArray.push(singleItem)
            })
        })

        return fullArray;
    }


    class Vehicle {
        private make : string;
        private year : number;

        constructor(make : string, year : number){
            this.make = make;
            this.year = year
        }

        getInfo(){
            console.log(`Make : ${this.make}, Year : ${this.year}`)
        }
    }

    class Car extends Vehicle{
        private model : string;

        constructor(make : string, year : number, model : string){
            super(make, year);
            this.model = model;
        }

        getModel(){
            console.log(`Model : ${this.model}`)
        }
    }

    const car = new Car("Toyota", 2020, "Corolla")

    car.getInfo()
    car.getModel()


    function processValue(value: string | number): number{
        if(typeof value === "string"){
            return value.length
        }

        else if(typeof value === "number"){
            return value * 2
        }

        return 0;
    }


    interface Product {
        name : string;
        price : number;
    }

    function getMostExpensiveProduct (products : Product[]) : Product | null {

        if(products.length < 1){
            return null;
        }

        const productPrices : number[] = []

        products.map((product) => {
            productPrices.push(product.price)
        })

        const mostPriceyProduct : Product | null = products.find(product => {
            return product.price === Math.max(...productPrices)
        }) || null

        return mostPriceyProduct
    }


    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
      
    function getDayType(day: Day): string {
        if(day === 6){
            return "Weekend"
        }

        return "Weekday"
    }


    const squareAsync = async(n : number) : Promise<number> => {
        const squarePromise : Promise<number> = new Promise((resolve, reject) => {
            if(n < 0){
                reject()
            }else{
                resolve(n * n)
            }
        })

        return squarePromise
    }

}
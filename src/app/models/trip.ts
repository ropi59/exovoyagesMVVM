import { compileNgModule } from '@angular/compiler';
/**
 * Modèle de données pour un voyage
 */
export class Trip {

    private city: String;
    private date: Date;
    private passengers: number;
    //private localeHours: Date;
    private myDate = new Date();

    //Liste de voyages
    //private trips: Trip[] = [];


    constructor(city: String, date: Date, passengers: number /**localeHours: Date*/) {
        this.city = city;
        this.date = date;
        this.passengers = passengers;
        //this.localeHours = localeHours;
    }

    //GETTERS
    // getTrips():Trip[] {
    //     return this.trips;
    // }

    getCity():String {
        return this.city;     
    }

    getDate():Date {
        return this.date;
    }

    getPassengers():number {
        return this.passengers;
    }

    // getLocaleHours():Date {
    //     return this.localeHours;
    // }

    //SETTERS

    /**
     * Vérifie que la ville n'est pas nulle
     * @param city 
     */
    setCity(city:String) {
        if (this.city != null){
            this.city = city;
        }else {
            console.log("Ville non donnée");
            throw new Error("Ville non donnée");
        }
    }

    /**
     * Vérifie que la date est bien postérieure à la date du jour
     * @param date 
     */
    setDate(date:Date) {
        if (date.getTime() > this.myDate.getTime()){
            this.date = date;
        }else {
            console.log("La date doit être postérieure à la date du jour");
            throw new Error("La date doit être postérieure à la date du jour");
        }
        
    }

    /**
     * Vérifie que le nombre de passagers est positif 
     * et au moins égal à 1
     * @param passengers 
     */
    setPassengers(passengers:number) {
        if (passengers >= 1){
            this.passengers = passengers;
        }else {
            console.log("Nombre de passagers invalide");
            throw new Error("Nombre de passagers invalide");
        }
    }

    // setLocalHours(localeHours: Date) {
    //     this.localeHours = localeHours;
    // }

    // addTrips(trip: Trip):void {
    //     this.trips.push(trip);
    // }

    public createTrip(city: string, date: Date, passengers: number):Trip {
        return new Trip(city, date,passengers);
        
    }
}

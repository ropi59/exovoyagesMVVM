import { Trip } from "./trip";

export class TripList {

    private tripList: Trip[];

    constructor(tripList: Trip[]) {
        this.tripList = tripList;
    }

    public getList(): Array<Trip> {
        return this.tripList;
    }

    public setLit(newList: Trip[]): void {
        this.tripList = newList;
    }

    public addToTripList(newTrip: Trip): void {
        this.tripList.push(newTrip);
    }
}

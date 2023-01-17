import { TripList } from './../../models/trip-list';
import { Trip } from './../../models/trip';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-trip-creation',
  templateUrl: './trip-creation.component.html',
  styleUrls: ['./trip-creation.component.scss']
})
export class TripCreationComponent {

  /**
   * Lie le modèle à la vue
   */
  public voyage: Trip;
  public triplist: TripList;
  public planner: FormGroup;
  public destination: String;
  public date: Date;
  public passengers: number;
  

  constructor(){
    this.voyage = new Trip("",new Date("01/01/1900"),1);
    this.destination = this.voyage.getCity();
    this.date = this.voyage.getDate();
    this.passengers = this.voyage.getPassengers();
    this.triplist = new TripList([]);
    this.planner = new FormGroup({
      city: new FormControl(""),
      date: new FormControl(Date),
      passengers: new FormControl(Number)
    });
    
  }

  public valider():void {
    let newTrip = this.voyage.createTrip(this.planner.controls['city'].value, 
                          this.planner.controls['date'].value, 
                          this.planner.controls['passengers'].value 
    )
    this.triplist.addToTripList(newTrip);
    console.log(this.triplist)
  }

}

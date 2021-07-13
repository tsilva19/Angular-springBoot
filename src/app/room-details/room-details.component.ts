import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id!: number;
  room: Room = new Room;
  submitted=false;

  constructor(private roomService: RoomService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoom(this.id)
    .subscribe(data =>{
      console.log(data)
      this.room = data;
    }, error => console.log(error))
  }

  list(){
    this.router.navigateByUrl('rooms');
  }

}

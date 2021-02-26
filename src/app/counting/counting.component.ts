import { Component } from '@angular/core';

@Component({
    selector: 'app-count',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})

export class CountComponent{
    count : number = 0;
    countNumber(){
        this.count += 1;
    }
}
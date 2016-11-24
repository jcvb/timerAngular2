import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'countdown',
	templateUrl: 'countdown.component.html',
	styleUrls: ['countdown.component.css']
})
export class CountdownComponent{
	
	@Input() seconds: number;
	
	intervalId : number;
	
	@Output() complete: EventEmitter<any> = new EventEmitter();

	constructor() {
		this.intervalId = setInterval(() => this.tick(),1000);
	}

	private tick(): void {
		if ( --this.seconds < 0 ) {
			clearTimeout(this.intervalId);
			this.complete.emit(null);
		}
	}

}
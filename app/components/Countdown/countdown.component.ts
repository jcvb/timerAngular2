import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'countdown',
	templateUrl: 'countdown.component.html',
	styleUrls: ['countdown.component.css'],
	encapsulation: ViewEncapsulation.Emulated
})
export class CountdownComponent{
	
	@Input() seconds: number;
	
	intervalId : number;
	
	@Output() complete: EventEmitter<any> = new EventEmitter();
	@Output() progress: EventEmitter<number> = new EventEmitter();

	constructor() {
		this.intervalId = window.setInterval(() => this.tick(),1000);
	}

	private tick(): void {
		if ( --this.seconds < 1 ) {
			clearTimeout(this.intervalId);
			this.complete.emit(null);
		}
	}

}
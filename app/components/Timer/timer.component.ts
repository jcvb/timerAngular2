import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'timer',
    templateUrl: 'timer.component.html',
    styleUrls: ['timer.component.css']
})
export class TimerComponent {
	minutos: number;
	segundos: number;
	isPaused: boolean;
	buttonLabel: string;

	constructor(){
		this.reserTimer();
		setInterval(() => this.tick(),1000);
	}


	private reserTimer(): void {
		this.minutos = 24;
		this.segundos = 60;
		this.buttonLabel = 'Empezar';
		this.togglePause();
	}

	private tick(): void {
		if  ( !this.isPaused ) {
			this.buttonLabel = 'Detener';

			if ( --this.segundos < 0 ){
				this.segundos = 59;
				if ( --this.minutos < 0 ){
					this.reserTimer();
				}
			}
		}
	}

	private togglePause(): void {
		this.isPaused = !this.isPaused;
		if ( this.minutos < 24 ||  this.segundos < 60 ) {
			this.buttonLabel = this.isPaused ? 'Reanudar' : 'Detener';	
		}
	}

	onCountdownCompleted(): void {
		//alert('Tiempo acabado');
	}
}


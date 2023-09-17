import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "primeraMaj"
})
export class PrimeraMajPipe implements PipeTransform {
	transform(value: string): string {
		return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
	} 
}

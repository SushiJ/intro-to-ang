import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { type Car } from "../car";

@Component({
	selector: "app-listing",
	standalone: true,
	imports: [CommonModule],
	template: `
      <article class="listing">
        <button (click)="saveNewCar(listItem)">Save car</button>
        <div class="image-parent">
          <img class="product-image" src="https://placehold.co/100x100" />
        </div>
        <section class="details">
          <p class="title">{{ listItem.make }} {{ listItem.model }}</p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span>{{ listItem.year }}</span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span>{{listItem.transmission}}</span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span>{{listItem.miles}}</span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span>{{listItem.price}}</span>
          </p>
        </section>
      </article>
`,
	styles: "",
})
export class ListingComponent {
	@Input({
		required: true,
	})
	listItem!: Car;

	@Output() saveCarEvent = new EventEmitter<Car>();

	saveNewCar(value: Car) {
		this.saveCarEvent.emit(value);
	}
}

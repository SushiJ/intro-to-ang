import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	template: `
<h1>If you are reading this...</h1>
<p>Things have worked out well! 🎉</p>
  {{userName}}
<ol>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ol>
  `,
	styles: "li {list-style-type: upper-roman}",
})
export class AppComponent {
	userName = "uchiha";
}

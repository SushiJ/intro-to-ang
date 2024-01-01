import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [ReactiveFormsModule],
	template: `
    <article>
      <h1>Blog Post</h1>
      <form name="blogForm" [formGroup]="myForm" (ngSubmit)="handleFormSubmit()">
        <section>
          <label for="title">Post Title</label>
          <input type="text" id="title" formControlName="title"/>

          <label for="body">Post Body</label>
          <textarea name="" id="body" cols="30" rows="10" formControlName="body"></textarea>
        </section>
        <button type="submit">Submit Post</button>
      </form>
    </article>
  `,
	styles: [],
})
export class AppComponent {
	myForm = new FormGroup({
		title: new FormControl(""),
		body: new FormControl(""),
	});

	handleFormSubmit() {
		this.postBlog(
			this.myForm.value.title as string,
			this.myForm.value.body as string,
		);
	}

	postBlog(title: string, body: string) {
		console.log(`Posting blog titles ${title}, with the contents ${body}.`);
	}
}

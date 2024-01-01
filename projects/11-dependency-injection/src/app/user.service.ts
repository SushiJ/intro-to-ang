import { Injectable } from "@angular/core";
import { data, User } from "./data";

@Injectable({
	providedIn: "root",
})
export class UserService {
	private userData: User[] = data;

	getUserData(): Promise<User[]> {
		return new Promise((resolve) => {
			resolve(this.userData);
		});
	}
}

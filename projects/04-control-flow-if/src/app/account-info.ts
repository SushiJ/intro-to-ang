export type AccountInfo = {
	name: string;
	membershipStatus: "silver" | "gold" | "platinum";
	validThru: string;
	CVV: string;
};

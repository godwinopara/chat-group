export const users = [
	{
		id: 1,
		name: "Kate Chopin",
		status: "active",
		email: "godwinopara62@gmail.com",
		phone: "08068130793",
	},
	{
		id: 2,
		name: "Christiana Opara",
		status: "active",
		email: "christianagodwin@gmail.com",
		phone: "08033707849",
	},
	{
		id: 3,
		name: "Kelechi Opara",
		status: "offline",
		email: "kelebs4luv10@gmail.com",
		phone: "08164338997",
	},
	{
		id: 4,
		name: "Karin Chopin",
		status: "active",
		email: "karinchopin@gmail.com",
		phone: "080337777333",
	},
];

export const channels = [
	{
		name: "RANDOM",
		description: "This channel is for jokes and everything else.",
		members: [1, 3, 4],
		initial: "R",
		messages: [
			{
				content: "I can't wait to start the software development bootcamp",
				time: "today 10:45am",
				user: 4,
			},
		],
	},
	{
		name: "FRONT-END DEVELOPERS",
		description: "The channel for all frontend developers",
		members: [1, 3],
		initial: "FD",
		messages: [
			{
				content: "Learning html was really fun",
				time: "today 10:45am",
				user: 1,
			},
		],
	},
	{
		name: "BACK-END DEVELOPERS",
		description: "The channel for all backend developers",
		members: [1, 3, 2],
		initial: "BD",
		messages: [
			{
				content: "Learning NodeJs was really fun",
				time: "today 11:45am",
				user: 3,
			},
		],
	},

	{
		name: "WELCOME",
		description: "The channel For new member",
		members: [1, 2, 3, 4],
		initial: "W",
		messages: [
			{
				content: "glad to be here",
				time: "today 11:45am",
				user: 1,
			},
			{
				content: "feels great to be here",
				time: "today 11:45am",
				user: 3,
			},
			{
				content: "glad to be here",
				time: "today 11:45am",
				user: 2,
			},
			{
				content: "Can wait to connect",
				time: "today 11:45am",
				user: 4,
			},
		],
	},
];

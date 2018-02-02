const Db={
	"robotics":{
		options:['Death Race','Robo Race','Robo Soccer','Maze Runner',
			'Puck Collect','Metal Hunt'	
		],
        content:'Will robots inherit the earth?'
    },
    "coding":{
    	options:['Hackathon','Capture the Flag','NITD Programming League',
    		'Clash of Codes','Blank Coding','Machine Learning Challenge',
    		'Code Golf','Sudoku Quiz','Reverse Coding'

    	],
        content:'Talk is cheap. Show me the code.'
    },
    "informal":{
    	options:['Who is the boss','Bull Ride','Twister'],
        content:'None of us is as smart as all of us.'
    },
    misc:{
    	options:['Virtual Stock Market','Paintball','NITD Expo'],
        content:'Mystery keeps us awake.'
    },
    'DeathRace':{
        intro:"For all RC car lovers, we provide a big platform to prove yourself as the champion among all the RC Car drivers. If you love RC cars and have excellence in driving cars then drive through the toughest path filled up by high bumps, sharpest turns and high ramps to fly you in air and grab huge prizes.",
        ps:"You have to design a RC car with given technical specifications and drive it on a track full of obstacles and traps.",
        team:3,
        win:'The car with the maximum points at the end of the race wins the round.',
        rules:[
                'Maximum participants per team = 3',
                'Each round will last for a maximum of 5 minutes in which the participants have to cover the track.',
                'Limited car size (25 cm width x 25 cm length x 20 cm height).',
                'Cars can have weapon like mechanisms to hit or push other cars like high torqued industrial motors, protective armour sheets etc.',
                "Participants can hit each other's cars. They can push opponent's car into trap while avoiding it themselves.",
                'The organizers reserve the right to change the rules as they deem fit.'
        ]
    },
    'ROBO RACE':{
        intro:'Enough trash talk. Let the robo do the running." Robots compete in a race to prove their speed. The bot to cross the finish line first emerges as victor.',
        ps:'You have to design a RC car with given technical specifications and drive it on a track with obstacles and traps.',
        team:3,
        win:'The car with the maximum points at the end of the race wins the round.',
        rules:[
                '1. Maximum participants per team = 3',
                '2. Each round will last for a maximum of 5 minutes in which the participants have to cover the track',
                '3. Limited car size (25 cm width x 25 cm length x 20 cm height)',
                '4. The organizers reserve the right to change the rules as they deem fit.'

        ]
    },
    '3. ROBO SOCCER ':{
        intro:'Robo soccer confronts the sheer and intensified tryst of the football lovers with robomaniacs. The love for the game just got technically amplified with the circuits and steel fighting for the precious prize. Infiltrate your robot with the soccer skill, it just might be the striker you need.',
        ps:'',
        team:3,
        win:'The team scoring the maximum goals in a round will win that round.',
        rules:[
            '1. Each round will last for 2 minutes.',
            '2. Maximum participants per team = 3.',
            '3. Robots must be manually controlled.',
            '4. Bots should not use more than 12v power supply and only one supply for whole system. You cannot use parallel batteries for generating higher power.',
            "5. No bot can remain inactive for more than 1 min in arena exceeding which will result in disqualification. By in-activity we mean-not able to take open ball to opponent's half.",
            "6. If your bot is designed for capturing that ball then you can do so for not more than 5 sec. And interval between successive captures must be 10 secs.",
            "7. No physical intervention in the arena would be tolerated. This would lead to direct disqualification.",
            "8. Bots should be controlled be designated controller/manual switching and not by physical pushing or pulling.",
            "9. Any kind of weapon that are intentionally added to harm the opponent would not be accepted.",
            "10. Dimensions of bot must follow below mentioned criteria-(30cm x 30cm x 15cm)",
            "11. Weight of bot must not exceed 900g under any circumstance. Weight of external power source would not be considered in weight of bot.",
            "12. Organisers are bound to disqualify any team breaking the rules.",
        ]   
    },
    '4. MAZE RUNNER':{
        intro:"If you're going to decipher a hidden code from a complex set of different mazes, I'm pretty sure you need a Sherlock’s brain running the show.",
        ps:'',
        team:0,
        win:'',
        rules:[
            
        ]
    },
    // 'DeathRace':{
    //     intro:'',
    //     ps:'',
    //     team:0,
    //     win:'',
    //     rules:[
            
    //     ]
    // }
}
// Db.e=events
export default Db; 
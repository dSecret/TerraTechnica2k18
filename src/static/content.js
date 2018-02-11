const Db={
	"robotics":{
        title:"ROBOTICS",
		options:['DEATH RACE','ROBO RACE','ROBO SOCCER','MAZE RUNNER',
			'PUCK COLLECT','METAL HUNT'	
		],
        content:'Will robots inherit the earth?'
    },
    "coding":{
        title:"CODING",
    	options:['HACKATHON','CAPTURE THE FLAG','NITD PROGRAMMING LEAGUE',
    		'CLASH OF CODES','BLANK CODING','MACHINE LEARNING CHALLENGE',
    		'CODE GOLF','SUDOKU QUIZ','REVERSE CODING'

    	],
        content:'Talk is cheap. Show me the code.'
    },
    "informal":{
        title:"INFORMAL",
    	options:['WHO IS THE BOSS','BULL RIDE','TWISTER'],
        content:'None of us is as smart as all of us.'
    },
    "misc":{
        title:"MISCELLANEOUS",
    	options:['VIRTUAL STOCK MARKET','PAINTBALL','NITD EXPO'],
        content:'Mystery keeps us awake.'
    },
    'DEATH RACE':{
        intro:"For all RC car lovers, we provide a big platform to prove yourself as the champion among all the RC Car drivers. If you love RC cars and have excellence in driving cars then drive through the toughest path filled up by high bumps, sharpest turns and high ramps to fly you in air and grab huge prizes.",
        intropoints:[],
        ps:"You have to design a RC car with given technical specifications and drive it on a track full of obstacles and traps.",
        team:3,
        win:'The car with the maximum points at the end of the race wins the round.',
        rules1:[
                'Maximum participants per team = 3',
                'Each round will last for a maximum of 5 minutes in which the participants have to cover the track.',
                'Limited car size (25 cm width x 25 cm length x 20 cm height).',
                'Cars can have weapon like mechanisms to hit or push other cars like high torqued industrial motors, protective armour sheets etc.',
                "Participants can hit each other's cars. They can push opponent's car into trap while avoiding it themselves.",
                'The organizers reserve the right to change the rules as they deem fit.'
        ],
        rules2:[]
    },
    'ROBO RACE':{
        intro:'Enough trash talk. Let the robo do the running." Robots compete in a race to prove their speed. The bot to cross the finish line first emerges as victor.',
        intropoints:[],
        ps:'You have to design a RC car with given technical specifications and drive it on a track with obstacles and traps.',
        team:3,
        win:'The car with the maximum points at the end of the race wins the round.',
        rules1:[
                'Maximum participants per team = 3',
                'Each round will last for a maximum of 5 minutes in which the participants have to cover the track',
                'Limited car size (25 cm width x 25 cm length x 20 cm height)',
                'The organizers reserve the right to change the rules as they deem fit.'

        ],
        rules2:[]
    },
    'ROBO SOCCER ':{
        intro:'Robo soccer confronts the sheer and intensified tryst of the football lovers with robomaniacs. The love for the game just got technically amplified with the circuits and steel fighting for the precious prize. Infiltrate your robot with the soccer skill, it just might be the striker you need.',
        intropoints:[],
        ps:'',
        team:3,
        win:'The team scoring the maximum goals in a round will win that round.',
        rules1:[
            'Each round will last for 2 minutes.',
            'Maximum participants per team = 3.',
            'Robots must be manually controlled.',
            'Bots should not use more than 12v power supply and only one supply for whole system. You cannot use parallel batteries for generating higher power.',
            "No bot can remain inactive for more than 1 min in arena exceeding which will result in disqualification. By in-activity we mean-not able to take open ball to opponent's half.",
            "If your bot is designed for capturing that ball then you can do so for not more than 5 sec. And interval between successive captures must be 10 secs.",
            "No physical intervention in the arena would be tolerated. This would lead to direct disqualification.",
            "Bots should be controlled be designated controller/manual switching and not by physical pushing or pulling.",
            "Any kind of weapon that are intentionally added to harm the opponent would not be accepted.",
            "1Dimensions of bot must follow below mentioned criteria-(30cm x 30cm x 15cm)",
            "1Weight of bot must not exceed 900g under any circumstance. Weight of external power source would not be considered in weight of bot.",
            "1Organisers are bound to disqualify any team breaking the rules.",
        ],
        rules2:[]   
    },
    'MAZE RUNNER':{
        intro:"If you're going to decipher a hidden code from a complex set of different mazes, I'm pretty sure you need a Sherlock’s brain running the show.",
        intropoints:["The robot should be autonomous, not manual.",
        "No damage should be made by a bot to the arena or to other's team bot in any manner.",
        "Bots should not be disassembled until the results are declared.",
        "When a team is called, they must report within five minutes.",
        "Two restarts are allowed in the final round.",
        "In case of a restart, the bot will be started from the starting point (origin).",
        "The organizers reserve the right to change the rules as they deem fit.",
        "Teams can make minor changes to their bots between consecutive rounds but any major change would lead to disqualification." ],

        ps:'',
        team:2,
        win:'',
        rules1:["Time limit 3 min.",
        "Two restarts are allowed in this round.",
        "In case of a restart, the bot will be started from the starting point (origin).",
        "No reorientation is permitted during the run.",
        "Single hand touch of robots is only allowed during run in case robot goes out of arena.",
        "For every restart in the race 20 points will be deducted.",
        "For every checkpoint cleared you will get 10 points and completion of path will give you additional 100 points.",
        "The bot will start from the starting point and following a path confined by walls, it will reach the end point."],
        rules2:["For every checkpoint cleared you will get 10 points and completion of path will give you additional 100 points.",
        "Time limit 5 min.",
        "Two restarts are allowed in the final round.",
        "In case of a restart, the bot will be started from the starting point (origin).",
        "No reorientation is permitted during the run.",
        "For every restart in the race 20 points will be deducted",
        "There will be intruder bots on your path if they are able to catch you before you finish the maze you will have to start from the last checkpoint with 20 points deduction."]
    },
    'PUCK COLLECT':{
    	intro:"TerraTechnica'18 is back with its dais ready for young and ardent minds to exhibit their innovation in designing and to prove their mettle in the RIDE under technology. Let's not waste any more time in awaiting the opportunity, just get busy in availing it. Enter the field of robo-mech war, with your bots ready to collect their assigned pucks and leave the place with excitement of triumph over opponents. Come, conquer and savour victory!!",
    	intropoints:[],
    	ps:'Two Remote Controlled robots compete. 10 pucks of each assigned colour are distributed randomly on the Arena. The aim is to collect all pucks of the assigned colour and carry them to the own home base.',
    	team:2,
    	win:'',
    	rules1:["Max Size of robot can be 30 x 30 CM.",
    	"Participants can use any wireless technology for remote control.",
    	"Robot must not physically separate into pieces.",
    	"Participants are allowed to buy robotic gripper or build their own (preferred).",
    	"Each round will last for 2 minutes.",
    	"The team collecting the maximum pucks will win the round.",
    	"The participants must not deliberately hit their opponent’s bot, doing so will lead to disqualification."],
    	rules2:[]
    },
    'METAL HUNT':{
    	intro:'The event objective is to find the maximum number of metal pieces in a given location by using metal detector in provided time duration. The metal pieces will be placed inside the soil with maximum depth of 10 cms. All teams will find the metal pieces at the same time and the team which gets maximum number of metal pieces in the provided time duration will be awarded as winner.',
    	intropoints:[],
    	ps:'',
    	team:3,
    	win:'The team which manages to find the maximum number of metal peices (specifically designed for the event) within the designated time will be declared the winner.',
    	rules1:["Participants must start and finish between the time alloted for the event.",
    	"Metal detector must be fully functional.",
    	"Participants are supposed to remain within boundaries of campus during conduction of event.",
    	"Participants would be liable for fine in case of any damage caused to property of NIT Delhi."],
    	rules2:[]
    },
    'HACKATHON':{
    	intro:'"Walking on water and developing software from a specification are easy if both are frozen." Hackathon is an onsite mobile app building competition where we give you an opportunity to design and develop your own mobile or even web app, show off your skills to win the battle and be the master of web world.',
    	intropoints:[],
    	ps:'Your team will be required to build an app from scratch, based on the given theme. With two days to make it, you and your team can code all day and seek learning resources as well, so participate whether or not you know how to make an app or not. The submissions will then be judged on a number of criteria and the best will be declared the winner.',
    	team:5,
    	win:'',
    	rules1:["Your team will be required to create an application.",
    	"The app can be for any platform, or even a web app. The only requirement is that it should be mobile compatible.",
    	"Hackathon will be a two day event, during which you can code your app. It is to be built from scratch, but you can use free libraries in your code",
    	"Your submissions will be judged on a number of criteria, and the best will be chosen as the winner."],
    	rules2:[]
    },
    'CAPTURE THE FLAG':{
    	intro:'CTF is an event which provides a platform for participants to work out on real world scenarios like malware analysis ¸pretesting , system administration.  The game is played in team of four players where each team is provided with a real world scenario along with an system where they need to seek out a solution which promotes next level. Each level is associated with different kind of scenario of increasing difficulty. This allows the participants to apply various concepts and techniques to reach a solution. The game is entirely based on Command line interface. The team is given secured access to a system to analyse, execute instructions to find the flag. The games assumes players to have knowledge in computer engineering such as files, networking, various tools of system administration. The game duration is estimated to be around 3hrs.',    	intropoints:[],
    	ps:'',
    	team:0,
    	win:'',
    	rules1:[],
    	rules2:[]
    },
    'NITD PROGRAMMING LEAGUE':{
    	intro:'“Truth can only be found in one place: the code.”  Robert C. Martin minced no words while he made that statement. For those who think themselves as the problem solvers and all the code freaks out there, Terra Technica’18 is back with a platform for you to prove your mettle. This could be the event that gives you that confidence to code which could change your life forever.',
    	intropoints:[],
    	ps:'This is a competitive programming event. There will be a set of questions, and participants will be required to write programs to solve them (in C, C++ or Java), which will be judged by an online judge. The team which solves the maximum number of questions in least time will be declared as the winner.',
    	team:3,
    	win:'',
    	rules1:["•	 Your team will be required to write programs to solve the given problems, which will then have to be submitted to an online judge.",
    	"Your programs can be written in any language.",
    	"There will be a runtime limit for each problem. Your solution should pass all the hidden test data within that time limit to receive the accepted verdict.",
    	"The winner will be declared on the basis of number of questions solved. If number of questions solved is same, the winner will be the team who solves the problems in least amount of time.",
    	"There will be a time penalty for each wrong submission to the online judge, but not for compilation error.",
    	"Team will have no access to cellphones.",
    	"Taking help of any kind will result in immediate disqualification."],
    	rules2:[]
    },
    'CLASH OF CODES':{
    	intro:'Outwit, outplay, outlastGet ready for your chance to glory, where you would have to unleash your coding skills but, you would win only if you outlast your competitors.It’s an opportunity to boast your coding skills, but you can’t entirely rely on them…..May the odds always be in your favour.',
		intropoints:[],
    	ps:'',
    	team:1,
    	win:'',
    	rules1:["Participants will be asked to submit one player code for a given game.",
    	"Before 7 days of the starting of fest one online portal will be opened where participants will improve their algorithm by playing with other’s code.",
    	"On the day of event, there will be offline knock out matches.", "•	The one who will win the final knock-out match will be the winner.",
    	"Rest will be notified on online portal."],
    	rules2:[]
    },
    'BLANK CODING':{
    intro:'Got good hands in Coding? Ever thought of writing the codes with MONITOR OFF? Sounds challenging?',
    intropoints:["Individual Event",
    "The allowed language is C and compiler turbo C /dev c++ /code blocks",
    "Consists of two rounds",
    "The Judge’s decision is final"],
    ps:'',
    team:1,
    win:'',
    rules1:["A simple code with syntax error will be given on paper.",
    "Participants have to correct the errors on paper and type the code with MONITOR SWITCHED OFF.",
    "Ten minutes will be given to type and correct the code.",
    "Based on the results of first round the participants will be selected for second round."],
    rules2:["Only problem statement will be provided.",
    "Participants need to type the code in TURBO C with MONITORS SWITCHED OFF.",
    "Twenty minutes will be given to each participant.",
    "Winners will be announced based on the results of compilation and execution."]	
    },
    'MACHINE LEARNING CHALLENGE':{
    	intro:'With the promising spurge in job demand in data science and machine learning currently and years to come, this is probably the best time to take up data science as a career. Hard to believe ?You would have recently come across innumerable online or offline courses ads launched by colleges and universities on data science. Why would it be ? Because, this demand is real. Companies are convinced that data analysis and predictive analysis can help them make better decision. This challenge will help and encourage beginners to acquire the practical skill sets required by a data scientist. Focus will remain more on learning, writing more code and acquiring understanding of how it works.',
    	intropoints:[],
    	ps:'',
    	team:0,
    	win:'',
    	rules1:["Your output will be evaluated only for 50% of the test data while the contest is running. Once the contest is over, output for the remaining 50% of the data will be evaluated and the final rank will be awarded",
    	"You will have to upload your output on the problem page in the format given in the problem statement. In addition to your output, you will also have to submit your source and other files in .zip or .tar compressed archive.",
    	"The total number of submission allowed by a participant is 1000. The maximum number of submission a participant can make in a day is 10.",
    	"You can use any tools or libraries for building your solution. There is no restriction on the tools that you can use.",
    	"You can only participate only as an individual.",
    	"In order to claim prize, your leaderboard score must be reproducible from your code files."],
    	rules2:[]
    },
    'CODE GOLF':{
    	intro:"CodeGolf is a competitive coding challenge for all the geeks out there, but what makes it different is, you have to code short to fetch more marks. Lesser you code, better you score. Though what's priceless is solving interesting problems and the thrill of competition. To deal with it, you require a level patience and skill that escapes ordinary programmers. Are you ready?",
    	intropoints:[],
    	ps:'',
    	team:2,
    	win:'',
    	rules1:["Your team will be required to write programs to solve the given problems, which will then have to be submitted to an online judge.",
    	"Shorter the code, Higher will be the score.",
    	"Your programs can be written in any language.",
    	"There will be a runtime limit for each problem. Your solution should pass all the hidden test data within that time limit to receive the accepted verdict",
    	"The winner will be declared on the basis of total score.",
    	"There will be a time penalty for each wrong submission to the online judge, but not for compilation error.",
    	"Team will have no access to cell phones.",
    	"Taking help of any kind will result in immediate disqualification."],
    	rules2:[]
    },
    'REVERSE CODING':{
    	intro:"Think you know everything about programming? Well there are many ways to go, let’s see which one you pick. This event looks for the real star that stands up to the ability of creativity and logic. So, be ready to storm out not just by switching systems but switching your brains into the all new arena.",
    	intropoints:[],
    	ps:'The difference between general competitive programming competition and reverse coding is that you will not be given the exact question statement but you will be provided with some set of sample inputs and outputs which will be sufficient enough to guess the problem and then you have to submit a code for your guessed problem. Interesting... right?',
    	team:3,
    	win:'',
    	rules1:["This is a team event. There can be 1-3 members in a team.",
    	"Your team will be required to guess the problem with help of given input and output set and write program to solve the problems, which will then have to be submitted to an online judge.",
    	"Your programs can be written in one of either C, C++ or Java language.",
    	"There will be a runtime limit for each problem. Your solution should pass all the hidden test data within that time limit to receive the accepted verdict.",
    	"The winner will be declared on the basis of number of questions solved. If number of questions solved is same, the winner will be the team who solves the problems in least amount of time",
    	"There will be a time penalty for each wrong submission to the online judge, but not for compilation error.",
    	"Team will have no access to cellphones.",
    	"Taking help of any kind will result in immediate disqualification."],
    	rules2:[]
    },
    'VIRTUAL STOCK MARKET':{
    	intro:'Always cherished striking gold, trading at Dalal Street/Nasdaq? Think you can grab opportunities and make most of out of the dynamic stock market? Are you that smart investor who can buy right and sell right? Do you believe that the Stock Market is where you belong? BRACE YOURSELF. Here comes the simulation of it i.e. VIRTUAL STOCK MARKET game presented by TerraTechnica in association with MoneyPot. It is an exciting opportunity to show your investment skills and win prizes by playing this game.',
    	intropoints:["VSM is a multiplayer game which is conducted online. The start time, time of declaration of winners, and other similar details can be found on the online portal.", "2.	Participants interested need to login to TerraTechnica website and can play this game when it will be put live. Participants need to bring their own laptops.", "3.	Every participant is given some amount of money(dummy) before he/she starts playing the game i.e. the balance of each participant is credited with a particular amount initially.", "4.	Here, you can buy and sell dummy shares of various companies.", "5.	The company listings would be according to BSE(Bombay Stock Exchange).", "6.	Participants can view the number of shares and price of each share for every company. (Note: The information would not be real and it is only for the sake of playing game)", "7.	Participants can now choose for which company they would like to invest. This can be done by buying the shares of that company.", "8.	Every time a participant buys shares of a particular company, corresponding amount would be deducted from his/her balance.", "9.	Participants could also sell their shares, which they own, at current price of the shares.", "10.	The rate of shares of a particular company is decided according to the growth/decline of the company in Stock Market, news pertaining to that company etc.", "11.	The rates will be fluctuating in between the game and would be visible to all the participants.", "12.	Participants could also view the growth of company from the period when the game started in form of graphs which would help them decide which company's share to buy.", "13.	Participants will be provided with the new statistics and can plan accordingly", "14.	The participant with highest balance at the end of the game will be the winner of VSM.", "15.	The final balance of each participant would be calculated by summing the price value of all the shares the participant owns and the money(amount) that he has."],
    	ps:'',
    	team:1,
    	win:'',
    	rules1:["Every participant is allowed to play the game with single login identity. Participants found playing the game with multiple logins would be disqualified.",
    	"Participants can not buy more than a particular amount of shares of a particular company which would be fixed by the game developer team and would be conveyed to all the participants at start of the game."],
    	rules2:[]
    },
    'WHO IS THE BOSS':{
    	intro:'This is not for the faint-hearted, the fearful, and the anxious. This is the game of leaders and of prestige. Each must prove their mettle, to ascertain their managerial skills to the edge of the humanely possible. You have to generate the greatest yield from the resources provided. You are the CEO of your own company, and must dare to take calculated risks in a simulated environment with surreal avenues and manage your way through the intricacies of logic.',
    	intropoints:[],
    	ps:'The event consists of 3 rounds in total, the first round which will be a general aptitude test will be open for all. Selected participants from each round will proceed to the next round. The second round will be where the participants will be separated into teams and a game will be played amongst these teams that will test their resource management skills. The third round will consist of a group discussion and further interviews with a panel of judges.',
    	team:1,
    	win:'',
    	rules1:["This event is open to all college students free of cost.",
    	"The competition is open for individual participants and not as group/team from any college.",
    	"Participants need to carry valid ID Cards of their respective educational institutes.",
    	"The selection for main round will be purely based on the elimination conducted before main event.",
    	"The decision of Event Managers shall be treated as final and binding on all. ",
    	"They have rights to verify identity of participants if required."],
    	rules2:[]
    },
    'BULL RIDE':{
    	intro:'Getting on this raging mechanical bull needs courage but staying on it as it raves around is better said than done.',
    	intropoints:[],
    	ps:'',
    	team:1,
    	win:'',
    	rules1:[],
    	rules2:[]
    },
    'PAINTBALL':{
    	intro:'Want a good excuse to shoot your classmates? Come along for a session with paintball',
    	intropoints:[],
    	ps:'',
    	team:1,
    	win:'',
    	rules1:[],
    	rules2:[]
    },
    'TWISTER':{
    	intro:'Think you are flexible? Think again. This fun game needs you to bend over yourself and stay like that till all your friends collapse.',
    	intropoints:[],
    	ps:'',
    	team:1,
    	win:'',
    	rules1:[],
    	rules2:[]
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
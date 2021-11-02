var pokeArray = [
    {
        name:"Bulbasaur",dexNumber:1, type1:"Grass", type2:"Poison", image:"images/001.png", color1:"rgb(77, 255, 100)", color2:"#900bdd",
        pokeInfo:"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger"
    },
    {
    name:"Ivysaur", dexNumber:2, type1:"Grass", type2:"Poison", image:"images/002.png", color1:"rgb(77, 255, 100)", color2:"#900bdd",
    pokeInfo:"When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
    },
    {
    name:"Venusaur", dexNumber:3, type1:"Grass", type2:"Poison", image:"images/003.png", color1:"rgb(77, 255, 100)", color2:"#900bdd",
    pokeInfo:"Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
    },
    {
    name:"Charmander", dexNumber:4, type1:"Fire", type2:"", image:"images/004.png", color1:"rgb(221, 90, 50)",
    pokeInfo:"It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
    },
    {    
    name:"Charmeleon", dexNumber:5, type1:"Fire", type2:"", image:"images/005.png", color1:"rgb(221, 90, 50)",
    pokeInfo:"It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws."
    },
    {
    name:"Charizard", dexNumber:6, type1:"Fire", type2:"Flying", image:"images/006.png", color1:"rgb(221, 90, 50)", color2:"linear-gradient(0deg, rgba(165,163,190,1) 49%, rgba(253,253,255,1) 53%, rgba(0,212,255,1) 100%);",
    pokeInfo:"It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."
    },
    {
    name:"Squirtle", dexNumber:7, type1:"Water", type2:"", image:"images/007.png", color1:"#2372f1",
    pokeInfo:"When it retracts its long neck into its shell, it squirts out water with vigorous force."
    },
    {
    name:"Wartortle", dexNumber:8, type1:"Water", type2:"", image:"images/008.png", color1:"#2372f1",
    pokeInfo:"It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old."
    },
    {
    name:"Blastoise", dexNumber:9, type1:"Water", type2:"", image:"images/009.png", color1:"#2372f1",
    pokeInfo:"It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell."
    },
    {
    name:"Caterpie", dexNumber:10, type1:"Bug", type2:"", image:"images/010.png", color1:"rgb(12, 122, 12)",
    pokeInfo:"For protection, it releases a horrible stench from the antenna on its head to drive away enemies."
    },
    {
    name:"Metapod", dexNumber:11, type1:"Bug", type2:"", image:"images/011.png", color1:"rgb(12, 122, 12)",
    pokeInfo:"It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack."
    },
    {
    name:"ButterFree", dexNumber:12, type1:"Bug", type2:"Flying", image:"images/012.png", color1:"rgb(12, 122, 12)", color2:"linear-gradient(0deg, rgba(165,163,190,1) 49%, rgba(253,253,255,1) 53%, rgba(0,212,255,1) 100%);",
    pokeInfo:"In battle, it flaps its wings at great speed to release highly toxic dust into the air."
    },
    {
    name:"Weedle", dexNumber:13, type1:"Bug", type2:"Poison", image:"images/013.png", color1:"rgb(12, 122, 12)", color2:"#900bdd",
    pokeInfo:"Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves."
    },
    {
    name:"Kakuna", dexNumber:14, type1:"Bug", type2:"Poison", image:"images/014.png", color1:"rgb(12, 122, 12)", color2:"#900bdd",
    pokeInfo:"Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy."
    },
    {
    name:"Beedrill", dexNumber:15, type1:"Bug", type2:"Poison", image:"images/015.png", color1:"rgb(12, 122, 12)", color2:"#900bdd",
    pokeInfo:"It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly."
    },
    {
    name:"Pidgey", dexNumber:16, type1:"Normal", type2:"Flying", image:"images/016.png", color1:"darkgray", color2:"linear-gradient(0deg, rgba(165,163,190,1) 49%, rgba(253,253,255,1) 53%, rgba(0,212,255,1) 100%);",
    pokeInfo:"Very docile. If attacked, it will often kick up sand to protect itself rather than fight back"
    },
    {
    name:"Pidgeotto", dexNumber:17, type1:"Normal", type2:"Flying", image:"images/017.png", color1:"darkgray", color2:"linear-gradient(0deg, rgba(165,163,190,1) 49%, rgba(253,253,255,1) 53%, rgba(0,212,255,1) 100%);",
    pokeInfo:"This Pokémon is full of vitality. It constantly flies around its large territory in search of prey."
    },
    {
    name:"Pidgeot", dexNumber:18, type1:"Normal", type2:"Flying", image:"images/018.png", color1:"darkgray", color2:"linear-gradient(0deg, rgba(165,163,190,1) 49%, rgba(253,253,255,1) 53%, rgba(0,212,255,1) 100%);",
    pokeInfo:"This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons."
    },
    {
    name:"Rattata", dexNumber:19, type1:"Normal", type2:"", image:"images/019.png", color1:"darkgray",
    pokeInfo:"Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area."
    },
    {
    name:"Raticate", dexNumber:20, type1:"Normal", type2:"", image:"images/020.png", color1:"darkgray",
    pokeInfo:"Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey."
    }]
    const getAllPokemon = () =>{
        return pokeArray;
    } 
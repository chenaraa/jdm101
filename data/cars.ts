import type { Car } from "@/lib/types";

// ---------------------------------------------------------------------------
// JDM101 Car Database
// To add a new car: copy an existing object below, change every field, and
// add it to the array. The slug becomes the URL: /cars/your-slug-here
// See README.md → "Adding a new car" for the full guide.
// ---------------------------------------------------------------------------

export const cars: Car[] = [
  {
    slug: "nissan-skyline-gtr-r32",
    name: "Nissan Skyline GT-R R32",
    shortName: "R32 GT-R",
    chassisCode: "BNR32",
    engineCode: "RB26DETT",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1989–1994",
    engine: "2.6L twin-turbo inline-6 (RB26DETT)",
    horsepower: "276 hp (gentlemen's agreement rating; 300+ hp actual)",
    torque: "260 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "AWD",
    weight: "~3,000 lbs",
    zeroToSixty: "~4.7 seconds",
    aspiration: "Twin-Turbo",
    bodyStyle: "2-door coupe",
    overview:
      "The R32 is the car that resurrected the GT-R name after a 16-year hiatus, and it did so by demolishing everything in its path. Built around the ATTESA E-TS all-wheel-drive system and the legendary RB26DETT straight-six, it turned Nissan's mid-size coupe into a touring-car weapon.",
    history:
      "Nissan revived the GT-R badge for the R32 generation specifically to dominate Group A touring car racing, and it worked almost too well — the R32 won every Japanese Touring Car Championship race it entered and swept Australia's Bathurst 1000, earning it the nickname 'Godzilla' from Wheels magazine after it destroyed the local competition.",
    whyFamous:
      "Godzilla's reputation was built on a nearly unbeaten factory racing record and a road car that could out-corner exotics costing three times as much, thanks to its AWD system and rear-wheel steering (HICAS). It became the benchmark that every subsequent GT-R was measured against.",
    strengths: [
      "Legendary RB26DETT is famously over-built and can handle huge power with the right supporting mods",
      "ATTESA E-TS AWD gives confidence-inspiring grip in the wet and on track",
      "Genuine motorsport pedigree — the most dominant touring car of its era",
      "Relatively affordable entry point into GT-R ownership compared to R33/R34"
    ],
    weaknesses: [
      "Interior feels dated and cheaply built by modern standards",
      "Heavier and less agile than the Silvia or AE86 for pure driver's-car feel",
      "Ceramic turbos on early cars are fragile at high boost",
      "Values have risen sharply, so 'cheap' is relative now"
    ],
    commonProblems: [
      "Cracked ceramic turbine wheels on stock turbos under hard use",
      "Failing coolant hoses and aging rubber throughout the engine bay",
      "ATTESA AWD transfer case wear if fluid isn't maintained",
      "Rust in rear quarters and floor pans on humid-climate cars"
    ],
    modPotential:
      "Enormous. The RB26 platform can reliably support 500–600 whp on stock internals with a turbo and fuel system upgrade, and built engines have gone well past 1,000 hp in drag and time-attack builds.",
    buyingGuide:
      "Look for full service history, verify the ceramic turbos haven't been cracked, check for rust in the rear arches, and confirm the ATTESA system engages properly on a test drive. Import compliance varies by country, so check eligibility (in the US, R32s became import-legal starting in 2019 under the 25-year rule).",
    popularity:
      "One of the most sought-after JDM icons worldwide, cemented further by its role in Fast & Furious and countless racing games.",
    funFacts: [
      "The 'Godzilla' nickname came from an Australian motoring journalist after the R32 dominated Bathurst",
      "The RB26DETT's factory power rating was capped at 276 hp due to a Japanese manufacturers' gentlemen's agreement, though real output was higher",
      "Nissan built a limited Nismo homologation special with a larger front splitter and stiffer suspension"
    ],
    tags: ["r32", "bnr32", "rb26", "rb26dett", "godzilla", "skyline", "gtr"]
  },
  {
    slug: "nissan-skyline-gtr-r33",
    name: "Nissan Skyline GT-R R33",
    shortName: "R33 GT-R",
    chassisCode: "BCNR33",
    engineCode: "RB26DETT",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1995–1998",
    engine: "2.6L twin-turbo inline-6 (RB26DETT)",
    horsepower: "276 hp (gentlemen's agreement rating)",
    torque: "271 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "AWD",
    weight: "~3,400 lbs",
    zeroToSixty: "~4.8 seconds",
    aspiration: "Twin-Turbo",
    bodyStyle: "2-door coupe",
    overview:
      "The R33 is the often-overlooked middle child of the R-series GT-Rs, criticized in period for gaining weight, but it quietly became the first production car to break the 8-minute barrier at the Nürburgring — a fact that still surprises people today.",
    history:
      "Launched in 1995, the R33 refined the R32's chassis with a stiffer body and improved ATTESA-ETS Pro AWD system, and a modified R33 (the Nismo 400R) became a cult favorite even though it was never officially sold.",
    whyFamous:
      "Its Nürburgring lap record run in 1995 proved the platform's engineering credentials at a time when most people wrote it off as a heavier, softer R32, and the ultra-rare Nismo 400R variant became one of the most coveted GT-Rs ever built.",
    strengths: [
      "Stiffer chassis than the R32 gives more predictable, planted handling at speed",
      "Same tough RB26DETT engine platform with huge tuning headroom",
      "Improved ATTESA-ETS Pro AWD system reacts faster than the R32's",
      "Currently the most affordable of the R-series GT-Rs"
    ],
    weaknesses: [
      "Noticeably heavier than the R32, dulling some of the agility enthusiasts loved",
      "Less motorsport pedigree than the R32 or R34 in the public imagination",
      "Same aging electronics and turbo fragility concerns as other RB26 cars",
      "Parts availability can be trickier for the less common Nismo 400R"
    ],
    commonProblems: [
      "Same ceramic turbo cracking risk as the R32 under sustained boost",
      "Cracked or brittle plastic interior trim with age",
      "AWD transfer case and rear diff wear if maintenance is neglected",
      "Rust around the fuel filler and rear arches on poorly stored cars"
    ],
    modPotential:
      "Shares the RB26DETT's huge tuning ceiling with the R32 and R34 — bolt-on turbo upgrades comfortably push 500+ whp, and the stronger chassis handles the extra power well on track.",
    buyingGuide:
      "Because the R33 is less hyped than its siblings, it's easier to find well-kept, lightly modified examples. Prioritize a car with documented RB26 service history and verify the ATTESA system and rear diff aren't leaking or notchy.",
    popularity:
      "Underrated relative to the R32 and R34 but gaining respect as enthusiasts rediscover its Nürburgring credentials and rarity of the 400R.",
    funFacts: [
      "In 1995 a modified R33 became the first production car ever to lap the Nürburgring Nordschleife in under 8 minutes",
      "Only 44 examples of the Nismo 400R were ever built",
      "The R33 introduced the Skyline's first factory-fitted six-speed-ready gearbox internals for future models"
    ],
    tags: ["r33", "bcnr33", "rb26", "nismo 400r", "skyline", "gtr"]
  },
  {
    slug: "nissan-skyline-gtr-r34",
    name: "Nissan Skyline GT-R R34",
    shortName: "R34 GT-R",
    chassisCode: "BNR34",
    engineCode: "RB26DETT",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1999–2002",
    engine: "2.6L twin-turbo inline-6 (RB26DETT)",
    horsepower: "276 hp (gentlemen's agreement rating; well over 320 hp actual)",
    torque: "289 lb-ft",
    transmission: "6-speed manual",
    drivetrain: "AWD",
    weight: "~3,400 lbs",
    zeroToSixty: "~4.4 seconds",
    aspiration: "Twin-Turbo",
    bodyStyle: "2-door coupe",
    overview:
      "The R34 is the GT-R most people picture when they hear the name — a tighter, more focused evolution of the R33 with a factory multi-function display, a stronger six-speed gearbox, and a starring role in Paul Walker's collection and Fast & Furious lore.",
    history:
      "Nissan shortened the wheelbase versus the R33 for sharper handling and added the now-iconic 'multi-function display' that showed live boost, oil temp, and lap timer data. Its film appearances and its use as a homologation base for Super GT racing turned it into the poster car of an entire generation.",
    whyFamous:
      "Beyond its handling and the RB26's tuning reputation, the R34's global fame was supercharged by 2 Fast 2 Furious, Gran Turismo, and its status as one of the last GT-Rs never officially sold new in the United States — making it forbidden fruit for an entire generation of American enthusiasts.",
    strengths: [
      "Sharper, more direct chassis feel than the R33 thanks to a shorter wheelbase",
      "Factory multi-function display was ahead of its time for driver data",
      "Six-speed Getrag gearbox handles more power than earlier 5-speeds",
      "Unmatched cultural cachet and film/game recognition worldwide"
    ],
    weaknesses: [
      "Extremely expensive today — prices have climbed into six figures for clean examples",
      "Heavily counterfeited history and cloned VIN/paperwork issues in some markets",
      "Same turbo and cooling-system fragility as earlier RB26 cars",
      "Grey-market import legality and cost vary a lot by country"
    ],
    commonProblems: [
      "Cracking ceramic turbine wheels on stock twin turbos at high boost",
      "Aging engine bay rubber (hoses, gaskets) prone to failure",
      "Rear differential and ATTESA transfer case wear",
      "Rising values have led to an active market for cloned or misrepresented cars — verify provenance carefully"
    ],
    modPotential:
      "The RB26 in the R34 responds to the same proven recipe as its siblings — bigger turbos, fuel system, and supporting mods routinely make 600+ whp, with fully built engines exceeding 1,000 hp in drag and time-attack applications.",
    buyingGuide:
      "Verify chassis number, service records, and accident history through a specialist inspection — R34 GT-Rs are now valuable enough to attract fraud. Confirm whether the car is a V-Spec, V-Spec II, or M-Spec, since equipment and collector value differ significantly between trims.",
    popularity:
      "Arguably the single most iconic JDM car in the world, driven by pop culture, motorsport history, and genuine engineering respect.",
    funFacts: [
      "The R34 was never sold new in the United States, making it a symbol of forbidden-fruit JDM culture for years before 25-year import eligibility began in 2024",
      "Nissan built a limited Z-tune version through Nismo with a stroked, hand-built RB26 producing well over 500 hp",
      "Paul Walker's R34 from 2 Fast 2 Furious helped cement the car's status in car culture outside Japan"
    ],
    tags: ["r34", "bnr34", "rb26", "z-tune", "skyline", "gtr", "fast and furious"]
  },
  {
    slug: "nissan-skyline-gtr-hakosuka",
    name: "Nissan Skyline GT-R KPGC10 (Hakosuka)",
    shortName: "Hakosuka GT-R",
    chassisCode: "KPGC10",
    engineCode: "S20",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1970–1971",
    engine: "2.0L inline-6 (S20, DOHC 24-valve)",
    horsepower: "160 hp",
    torque: "132 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~2,350 lbs",
    zeroToSixty: "~8 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door coupe",
    overview:
      "The Hakosuka ('boxy Skyline' in Japanese enthusiast slang) is the original GT-R, the car that started a 50-year dynasty. Its Prince-derived S20 engine, born from a racing partnership, made it the giant-killer of Japanese touring car racing in the early 1970s.",
    history:
      "Developed by the former Prince Motor Company team after its merger with Nissan, the Hakosuka's S20 engine descended directly from the R380 race car. It won 33 consecutive races in Japanese touring car competition, a streak that built the GT-R legend from scratch.",
    whyFamous:
      "It's the genesis point for every GT-R that followed — the DNA of 'a race-bred engine in a practical body' that defines the nameplate traces straight back to this car's unmatched early-70s racing streak.",
    strengths: [
      "Historic significance as the first-ever GT-R",
      "S20 engine is a genuine race-derived unit with a glorious high-rev character",
      "Light weight makes it exceptionally responsive for its era",
      "Iconic, boxy styling with flared rear fenders is instantly recognizable"
    ],
    weaknesses: [
      "Extremely rare and expensive — among the most valuable classic JDM cars in existence",
      "Parts sourcing is a specialist-only endeavor",
      "No power steering, ABS, or modern safety equipment",
      "Vintage electrics and fuel systems need constant attention"
    ],
    commonProblems: [
      "Rust is endemic to surviving examples after five decades",
      "S20 engines are difficult and costly to rebuild correctly",
      "Finding date-correct, unmolested original parts is very difficult",
      "Many surviving cars have been heavily restored, so originality varies widely"
    ],
    modPotential:
      "Most surviving cars are preserved or restored to original spec rather than modified, since collector value depends heavily on originality — modification is far more common on tribute or race-replica builds.",
    buyingGuide:
      "This is a six-figure collector car in good condition; buyers should engage marque specialists to verify chassis numbers, engine matching, and restoration quality before purchase.",
    popularity:
      "Revered by purists and historians as the foundational GT-R, with a smaller but deeply passionate following compared to the more accessible R32–R34.",
    funFacts: [
      "The 'Hakosuka' nickname literally means 'box Skyline', describing its boxy 1970s styling",
      "Its racing streak of 33 consecutive wins remains one of the most dominant runs in Japanese motorsport history",
      "The S20 engine shares its architecture with the racing engine from the Prince R380 prototype"
    ],
    tags: ["hakosuka", "kpgc10", "s20", "skyline", "gtr", "classic"]
  },
  {
    slug: "nissan-skyline-gtr-kenmeri",
    name: "Nissan Skyline GT-R KPGC110 (Kenmeri)",
    shortName: "Kenmeri GT-R",
    chassisCode: "KPGC110",
    engineCode: "S20",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1973",
    engine: "2.0L inline-6 (S20, DOHC 24-valve)",
    horsepower: "160 hp",
    torque: "130 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~2,500 lbs",
    zeroToSixty: "~8 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door coupe",
    overview:
      "Named after an advertising campaign featuring a couple called 'Ken and Mary,' the KPGC110 arrived just as the 1973 oil crisis and tightening emissions rules were killing the appetite for high-strung performance cars in Japan.",
    history:
      "Nissan built only 197 examples of the GT-R version before pulling the plug entirely, as fuel prices and emissions regulations made the thirsty, high-revving S20 engine commercially unviable — leaving the nameplate dormant for 16 years until the R32 revived it.",
    whyFamous:
      "Its extreme rarity — fewer than 200 built — combined with its bridge-in-history role between the original Hakosuka and the R32 revival makes it one of the most collectible Japanese cars ever produced.",
    strengths: [
      "Among the rarest production GT-Rs ever made",
      "Same race-bred S20 engine as the Hakosuka",
      "Distinctive early-70s styling with flared arches and a ducktail spoiler",
      "Represents a pivotal, poignant moment in GT-R history"
    ],
    weaknesses: [
      "Astronomically rare and expensive, effectively unobtainable for most enthusiasts",
      "Same vintage-engineering compromises as the Hakosuka",
      "Almost impossible to source date-correct replacement parts",
      "Very limited specialist knowledge base compared to more common classics"
    ],
    commonProblems: [
      "Rust and age-related deterioration after five decades",
      "Extremely scarce original parts",
      "S20 engine rebuilds require rare expertise",
      "Verifying authenticity is difficult given the tiny production run and high forgery incentive"
    ],
    modPotential:
      "Virtually never modified given its rarity and collector status; preservation and correct restoration are valued far more than performance upgrades.",
    buyingGuide:
      "This is a museum-piece purchase best handled through recognized classic Nissan specialists and auction houses, with rigorous provenance verification given how few exist.",
    popularity:
      "A holy grail for serious JDM historians and collectors, even if it's less recognized by name among casual enthusiasts than the Hakosuka or R32–R34.",
    funFacts: [
      "Only 197 GT-R versions of the Kenmeri were ever built before Nissan discontinued it",
      "Its nickname comes from a Nissan ad campaign, not the car itself",
      "The GT-R nameplate went dormant for 16 years after this car until the 1989 R32"
    ],
    tags: ["kenmeri", "kpgc110", "s20", "skyline", "gtr", "classic", "rare"]
  },
  {
    slug: "nissan-skyline-gtr-r35",
    name: "Nissan GT-R R35",
    shortName: "R35 GT-R",
    chassisCode: "R35",
    engineCode: "VR38DETT",
    manufacturer: "Nissan",
    country: "Japan",
    years: "2007–2024",
    engine: "3.8L twin-turbo V6 (VR38DETT)",
    horsepower: "480–600+ hp (varies by model year/trim)",
    torque: "430–481 lb-ft",
    transmission: "6-speed dual-clutch automatic",
    drivetrain: "AWD",
    weight: "~3,800 lbs",
    zeroToSixty: "~2.9 seconds",
    aspiration: "Twin-Turbo",
    bodyStyle: "2-door coupe",
    overview:
      "The R35 dropped the Skyline name and became simply 'GT-R,' a hand-built supercar-fighter engineered with help from Nissan's Nürburgring test program. It swapped the RB26 inline-6 for a hand-assembled VR38DETT V6 paired to a rear-mounted dual-clutch transaxle.",
    history:
      "Launched globally in 2007 (unlike its predecessors, sold new in the US and Europe from the start), the R35 was built to embarrass exotics at a fraction of the price, repeatedly posting Nürburgring lap times that rivaled cars costing four times as much.",
    whyFamous:
      "It proved a Japanese-engineered, launch-control-equipped daily driver could out-accelerate six-figure European supercars straight from the factory, and its continuous run of updates (Nismo, Track Edition, and more) kept it competitive for nearly two decades.",
    strengths: [
      "Genuinely supercar-humbling performance straight from the factory",
      "Officially imported and sold new in the US, unlike prior GT-Rs",
      "ATTESA AWD and dual-clutch gearbox make it devastatingly easy to drive fast",
      "Nissan continued developing it for 17 model years, so late cars are far more refined"
    ],
    weaknesses: [
      "Heavy and less mechanically 'raw' feeling than older RB26-powered GT-Rs",
      "Expensive to maintain and repair, especially the transmission and VR38 engine",
      "Firm ride and road noise on rougher pavement",
      "Some enthusiasts feel it lost the analog character of the R32–R34"
    ],
    commonProblems: [
      "Transmission wear and costly repairs if driven hard without proper warm-up",
      "Expensive OEM parts and specialist-only servicing",
      "Front differential and transfer case wear over high-mileage use",
      "Turbo and cooling system stress under aggressive tuning"
    ],
    modPotential:
      "The VR38DETT responds extremely well to tuning — bolt-on upgrades and ECU tuning push 700+ hp, and fully built engines with larger turbos have exceeded 1,500 hp in competition builds.",
    buyingGuide:
      "Because it was sold new worldwide, R35s are far easier to buy and finance than earlier GT-Rs. Check for documented transmission and clutch service, verify it hasn't been tuned beyond what the drivetrain can handle, and prioritize dealer or specialist-maintained cars.",
    popularity:
      "A modern icon that brought the GT-R name to a global audience who never experienced the R32–R34 era, and it remains a benchmark performance car today.",
    funFacts: [
      "Each VR38DETT engine is hand-assembled by a single technician, a practice called 'Takumi' craftsmanship",
      "Nissan repeatedly revised the R35's suspension and aero after early customer track cars uncovered real-world weaknesses the factory hadn't seen",
      "The Nismo version lapped the Nürburgring in under 7 minutes 20 seconds"
    ],
    tags: ["r35", "gt-r", "vr38", "nissan gtr", "godzilla"]
  },
  {
    slug: "nissan-silvia-s13",
    name: "Nissan Silvia S13",
    shortName: "S13 Silvia",
    chassisCode: "S13",
    engineCode: "SR20DET / CA18DET",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1988–1994",
    engine: "2.0L turbo inline-4 (SR20DET, later cars)",
    horsepower: "205 hp (SR20DET)",
    torque: "203 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~2,600 lbs",
    zeroToSixty: "~6.5 seconds",
    aspiration: "Turbo",
    bodyStyle: "2-door coupe",
    overview:
      "The S13 Silvia (sold in some markets as the 240SX with a different engine) is where modern drift culture largely took root — a light, balanced, RWD coupe with a chassis that rewards a driver willing to slide it.",
    history:
      "Nissan built the S13 as a stylish, affordable sports coupe, but it found its true calling in Japan's grassroots drift scene of the late 1980s and 1990s, where drivers like Keiichi Tsuchiya used similar chassis to popularize what would become professional drifting.",
    whyFamous:
      "Its perfect blend of light weight, RWD balance, and a swappable SR20DET engine made it the default canvas for drift builds worldwide, a reputation cemented by countless drift videos, games, and its starring role in JDM car culture.",
    strengths: [
      "Ideal weight distribution and chassis balance for RWD driving and drifting",
      "SR20DET engine is compact, tunable, and easy to swap into other chassis",
      "Huge aftermarket support for suspension, drift, and engine parts",
      "Relatively affordable and simple mechanically compared to newer platforms"
    ],
    weaknesses: [
      "Interior and build quality feel basic even for the era",
      "Clean, unmodified examples are getting hard to find after decades of drift builds",
      "Factory brakes and suspension are dated by modern standards",
      "US market cars (240SX) came with a KA24DE non-turbo four, not the SR20DET"
    ],
    commonProblems: [
      "Timing chain guide wear on high-mileage SR20DET engines",
      "Rust in the rear quarters and floor pans on humid or salted-road cars",
      "Worn subframe bushings from repeated drift use",
      "Abused examples with hidden collision or chassis damage from drift culture"
    ],
    modPotential:
      "Nearly limitless — the S13 is one of the most modified chassis in the world, with a mature aftermarket for turbo upgrades, coilovers, angle kits, and full engine swaps (RB25, SR20, LS-series V8, and more).",
    buyingGuide:
      "Inspect carefully for drift-related chassis damage, rust, and non-factory welds, and verify whether the engine is a matching-numbers SR20DET or a swap — this significantly affects value and reliability expectations.",
    popularity:
      "A cornerstone of global drift culture and one of the most recognizable entry points into JDM ownership for enthusiasts on a budget.",
    funFacts: [
      "The US-market 240SX shared the S13 body but came with the KA24DE engine instead of the SR20DET",
      "The S13 is one of the most common platforms used in Formula Drift competition",
      "Its coupe and hatchback body styles were both offered, with the hatch nicknamed the '180SX' in some configurations"
    ],
    tags: ["s13", "silvia", "sr20det", "240sx", "drift"]
  },
  {
    slug: "nissan-silvia-s14",
    name: "Nissan Silvia S14",
    shortName: "S14 Silvia",
    chassisCode: "S14",
    engineCode: "SR20DET",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1993–1998",
    engine: "2.0L turbo inline-4 (SR20DET)",
    horsepower: "217–220 hp",
    torque: "202 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~2,750 lbs",
    zeroToSixty: "~6.2 seconds",
    aspiration: "Turbo",
    bodyStyle: "2-door coupe",
    overview:
      "The S14 grew the S13 formula into a longer, wider, more grown-up coupe with a stronger SR20DET and a stiffer chassis, trading a little of the S13's flickability for more stability at speed.",
    history:
      "Introduced in 1993, the S14 refined the Silvia's proportions and updated the SR20DET with better internals, arriving just as Japan's tuning and drift scenes were exploding in popularity through magazines and early motorsport events.",
    whyFamous:
      "It became a favorite of both grip and drift enthusiasts thanks to its stiffer chassis and stronger factory power output, and its clean, understated styling has aged into a modern classic look.",
    strengths: [
      "Stiffer, more planted chassis than the S13 at higher speeds",
      "Stronger factory SR20DET internals than early S13 units",
      "Still light and RWD, keeping the platform's drift and grip appeal",
      "Cleaner, more modern styling that has aged well"
    ],
    weaknesses: [
      "Longer wheelbase makes it slightly less flickable than the S13 in tight drift situations",
      "Less common in some export markets than the S13/240SX",
      "Same aging electrics and interior plastics as other 90s Nissans",
      "Facelifted 'Kouki' front-end parts can be pricier due to demand"
    ],
    commonProblems: [
      "Timing chain tensioner wear on higher-mileage SR20DET engines",
      "Rust in rear arches and trunk floor on poorly stored examples",
      "Worn rear subframe bushings from spirited or drift use",
      "Aftermarket wiring from past turbo/engine swaps causing electrical gremlins"
    ],
    modPotential:
      "Excellent — the SR20DET responds well to bolt-on turbo upgrades, and the chassis accepts the same wide range of suspension, swap, and aero modifications the S13 does.",
    buyingGuide:
      "Look for the desirable late 'Kouki' facelift front clip, verify chassis straightness given the car's drift-culture popularity, and check SR20DET compression and boost history before buying.",
    popularity:
      "Extremely popular in drift and stance communities, with clean, low-mileage examples now commanding real collector premiums.",
    funFacts: [
      "The S14 was sold in North America as the 240SX with the non-turbo KA24DE, mirroring the S13's export strategy",
      "Nissan offered a factory Autech version with unique aero and a limited production run",
      "The S14's chassis code lives on in drift media as one of the most-filmed platforms in Japan's Ebisu Circuit drift events"
    ],
    tags: ["s14", "silvia", "sr20det", "240sx", "drift", "kouki"]
  },
  {
    slug: "nissan-silvia-s15",
    name: "Nissan Silvia S15",
    shortName: "S15 Silvia",
    chassisCode: "S15",
    engineCode: "SR20DET",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1999–2002",
    engine: "2.0L turbo inline-4 (SR20DET)",
    horsepower: "247–276 hp (Spec R)",
    torque: "203–202 lb-ft",
    transmission: "6-speed manual (Spec R)",
    drivetrain: "RWD",
    weight: "~2,670 lbs",
    zeroToSixty: "~5.9 seconds",
    aspiration: "Turbo",
    bodyStyle: "2-door coupe",
    overview:
      "The S15 is the final and most refined Silvia — shorter, lighter, and sharper than the S14, with a ball-bearing turbo SR20DET in Spec R form and a six-speed gearbox that makes it the most complete factory package in the lineage.",
    history:
      "Nissan tightened the Silvia's dimensions for the S15 and gave the top Spec R trim a genuinely sporting six-speed manual and revised turbo, but it was never officially exported to the US or Europe, which fueled its grey-market mystique for years.",
    whyFamous:
      "Widely considered the best-balanced and most driver-focused Silvia ever made, it became the darling of the JDM import and drift scenes precisely because it was forbidden fruit in major markets for two decades.",
    strengths: [
      "Best factory chassis balance and steering feel in the Silvia lineage",
      "Spec R's ball-bearing turbo SR20DET and 6-speed gearbox are genuinely sporty from the factory",
      "Shorter wheelbase than the S14 makes it more agile for drift and autocross",
      "Now import-legal in the US under the 25-year rule, driving fresh demand"
    ],
    weaknesses: [
      "Never sold new in the US, so grey-market and import cars can carry paperwork complications",
      "Values have climbed sharply since import eligibility began",
      "Same turbo and timing-chain wear concerns as other SR20DET cars",
      "Clean, unmodified Spec R examples are increasingly hard to find"
    ],
    commonProblems: [
      "Timing chain and tensioner wear at higher mileages",
      "Turbo wear on high-boost tuned examples",
      "Rust in rear arches on cars from humid climates",
      "Odometer and import-history verification issues on grey-market cars"
    ],
    modPotential:
      "Just as strong as the S13/S14 — the SR20DET platform, aftermarket parts catalog, and drift community support make big power and full suspension overhauls straightforward.",
    buyingGuide:
      "Confirm genuine JDM import documentation, check whether it's a Spec S or the more desirable Spec R, and inspect for accident or drift damage given the car's popularity in motorsport use.",
    popularity:
      "One of the most hyped and desired 25-year-import JDM cars in the US market today, alongside the R34 GT-R.",
    funFacts: [
      "The S15 was never officially sold in North America, making it one of the most anticipated 25-year JDM imports",
      "It appeared prominently in the Fast & Furious franchise and numerous racing games, boosting its Western fame despite never being sold there new",
      "Nissan offered a factory drift-oriented 'D1' variant developed with input from Japan's D1 Grand Prix series"
    ],
    tags: ["s15", "silvia", "spec r", "sr20det", "drift"]
  },
  {
    slug: "nissan-300zx-z32",
    name: "Nissan 300ZX Z32",
    shortName: "300ZX (Z32)",
    chassisCode: "Z32",
    engineCode: "VG30DETT",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1989–2000",
    engine: "3.0L twin-turbo V6 (VG30DETT)",
    horsepower: "300 hp (Twin Turbo)",
    torque: "283 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~3,400 lbs",
    zeroToSixty: "~5.2 seconds",
    aspiration: "Twin-Turbo",
    bodyStyle: "2-door coupe/targa",
    overview:
      "The Z32-generation 300ZX was Nissan's flagship grand tourer of the early 90s — a swoopy, technologically loaded coupe with a twin-turbo V6, available four-wheel steering, and pop-up headlights that defined an era.",
    history:
      "Launched in 1989 to critical acclaim (winning multiple international 'Car of the Year' style awards), the Z32 pushed Nissan's engineering further than any prior Z-car with features like Super HICAS rear steering and a T-top roof option.",
    whyFamous:
      "It proved a Japanese grand tourer could match European rivals on technology and refinement while still delivering serious straight-line performance, and its timeless wedge styling still turns heads decades later.",
    strengths: [
      "Twin-turbo VG30DETT delivers strong, smooth power with genuine tuning potential",
      "Advanced-for-its-era features like four-wheel steering and adjustable suspension",
      "Comfortable, GT-oriented ride quality for long-distance driving",
      "Iconic early-90s styling that has aged gracefully"
    ],
    weaknesses: [
      "Complex engine bay makes even routine maintenance labor-intensive (notoriously must pull the engine for some jobs)",
      "Heavier and less nimble than smaller sports coupes of its era",
      "Electronics and vacuum-actuated systems can be failure-prone with age",
      "Timing belt service is costly given the tight engine bay packaging"
    ],
    commonProblems: [
      "Timing belt and water pump failures if service intervals are skipped",
      "Vacuum line and boost control degradation causing turbo issues",
      "Failing T-top seals leading to water leaks",
      "Aging wiring harness connectors causing electrical faults"
    ],
    modPotential:
      "Strong — the VG30DETT responds well to boost and fuel system upgrades, with built engines and larger turbos capable of significant power gains, though the tuning community is smaller than for the Skyline or Supra.",
    buyingGuide:
      "Get a pre-purchase inspection focused on timing belt history and turbo condition given the notoriously tight engine bay, and budget for specialist labor costs on future maintenance.",
    popularity:
      "A beloved but slightly under-the-radar JDM icon, respected by enthusiasts for its technology and styling even if it doesn't get the hype of the Skyline or Supra.",
    funFacts: [
      "The Z32's engine bay is so tightly packaged that some jobs, like replacing rear spark plugs, require removing the front subframe or engine",
      "It was one of the first Japanese cars to feature a factory in-dash CD changer as an available option",
      "Motor Trend and other outlets praised its handling as class-leading upon release"
    ],
    tags: ["300zx", "z32", "vg30dett", "fairlady z", "twin turbo"]
  },
  {
    slug: "nissan-180sx",
    name: "Nissan 180SX",
    shortName: "180SX",
    chassisCode: "RPS13",
    engineCode: "SR20DET",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1989–1998",
    engine: "2.0L turbo inline-4 (SR20DET)",
    horsepower: "205 hp",
    torque: "203 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~2,600 lbs",
    zeroToSixty: "~6.5 seconds",
    aspiration: "Turbo",
    bodyStyle: "2-door hatchback",
    overview:
      "Essentially a Silvia in a sleeker hatchback body with fixed-in-place pop-up headlights, the 180SX shares the S13's beloved SR20DET/RWD combination while adding practicality and a distinct silhouette drift fans instantly recognize.",
    history:
      "Sold exclusively in Japan alongside the coupe-bodied Silvia, the 180SX gained its own cult following for its hatchback versatility and became a mainstay of Japan's drift scene through the 1990s and 2000s.",
    whyFamous:
      "Its pop-up headlights and hatchback practicality gave it a distinct identity from the Silvia coupe, and it became one of the definitive cars of early D1 Grand Prix-era drifting.",
    strengths: [
      "Same proven SR20DET/RWD chassis combo as the Silvia S13",
      "Hatchback body adds practicality for a daily-driven project car",
      "Deep aftermarket support shared with the S13 platform",
      "Distinct pop-up headlight styling stands out from the coupe Silvia"
    ],
    weaknesses: [
      "Never officially sold outside Japan, so import sourcing and paperwork take extra effort",
      "Popularity in drift culture means many surviving cars are heavily modified or worn out",
      "Same aging SR20DET wear items as other S13-era cars",
      "Rust-prone in humid or salted-road climates like all cars of this era"
    ],
    commonProblems: [
      "Timing chain and tensioner wear at higher mileage",
      "Rust in rear hatch seals and floor pans",
      "Worn subframe bushings from drift use",
      "Non-factory wiring from past engine swaps"
    ],
    modPotential:
      "Shares the S13 Silvia's huge tuning ceiling — turbo upgrades, coilovers, angle kits, and full engine swaps are all well-supported by the aftermarket.",
    buyingGuide:
      "Because it was JDM-only, verify import paperwork and inspect carefully for drift-related chassis stress or hidden rust, especially around the rear subframe.",
    popularity:
      "A drift-scene favorite worldwide, especially popular in import communities that prize its distinct hatchback look over the more common Silvia coupe.",
    funFacts: [
      "The 180SX kept pop-up headlights even after the Silvia coupe moved to fixed lights in later generations",
      "It's frequently seen in Japanese drift media and events at tracks like Ebisu Circuit",
      "Enthusiasts sometimes swap S15 Silvia front ends onto 180SX bodies, known as an 'onevia' conversion"
    ],
    tags: ["180sx", "sr20det", "silvia", "drift", "hatchback"]
  },
  {
    slug: "nissan-fairlady-z-s30",
    name: "Nissan Fairlady Z S30",
    shortName: "Fairlady Z (S30)",
    chassisCode: "S30",
    engineCode: "L24 / L28",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1969–1978",
    engine: "2.4L–2.8L inline-6 (L24/L28)",
    horsepower: "150–170 hp",
    torque: "146–177 lb-ft",
    transmission: "4/5-speed manual",
    drivetrain: "RWD",
    weight: "~2,300 lbs",
    zeroToSixty: "~8 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door coupe",
    overview:
      "Known as the Datsun 240Z in export markets, the original S30 Fairlady Z is the car that proved Japan could build a genuinely great sports car — a long-hood, short-deck GT with European-inspired styling and a price a fraction of a Jaguar E-Type.",
    history:
      "Launched in 1969, the S30 became a runaway sales success in the US as the Datsun 240Z, out-selling every European sports car in its class and establishing Nissan/Datsun as a serious performance brand in the West for the first time.",
    whyFamous:
      "It single-handedly changed Western perceptions of Japanese cars, proving they could combine beautiful styling, strong performance, and genuine reliability at an accessible price — a formula many credit with kickstarting the entire JDM performance car movement.",
    strengths: [
      "Gorgeous, timeless long-hood/short-deck styling",
      "Light weight and simple mechanicals make it an engaging, analog drive",
      "Strong classic car community and parts support worldwide",
      "Historically significant as Nissan's first global performance icon"
    ],
    weaknesses: [
      "Nearly 50 years old now, so rust and wear are major concerns on unrestored cars",
      "No power steering or modern safety equipment",
      "Values for clean original examples have risen substantially",
      "Finding genuinely unmodified survivors is increasingly difficult"
    ],
    commonProblems: [
      "Rust in the floor pans, hatch area, and frame rails is extremely common",
      "Aging carburetors need regular tuning and rebuilding",
      "Deteriorated wiring harnesses from age",
      "Worn suspension bushings and steering components on unrestored cars"
    ],
    modPotential:
      "A huge and mature restomod scene exists — everything from mild carburetor and suspension upgrades to full LS-swap and modern EFI conversions is well documented and supported.",
    buyingGuide:
      "Rust is the single biggest risk — inspect frame rails, floor pans, and the hatch area closely, and prioritize cars with documented restoration history over 'barn find' projects unless you're prepared for extensive rust repair.",
    popularity:
      "A beloved classic on both sides of the Pacific, with a passionate restoration and restomod community keeping the model alive over 50 years later.",
    funFacts: [
      "It was sold as the Datsun 240Z in the US and outsold every rival sports car in its segment for years",
      "Its styling was influenced by European GT cars like the Jaguar E-Type, but at a fraction of the price",
      "The S30 laid the foundation for every Z-car that followed, up through the current Nissan Z"
    ],
    tags: ["s30", "fairlady z", "240z", "datsun", "classic"]
  },
  {
    slug: "nissan-pulsar-gti-r",
    name: "Nissan Pulsar GTI-R",
    shortName: "Pulsar GTI-R",
    chassisCode: "RNN14",
    engineCode: "SR20DET",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1990–1994",
    engine: "2.0L turbo inline-4 (SR20DET)",
    horsepower: "227 hp",
    torque: "210 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "AWD",
    weight: "~2,650 lbs",
    zeroToSixty: "~5.4 seconds",
    aspiration: "Turbo",
    bodyStyle: "3-door hatchback",
    overview:
      "A homologation-special hot hatch built to satisfy Group A rally rules, the Pulsar GTI-R crammed the SR20DET and an AWD system into a small three-door body, creating a pocket rocket with genuinely unhinged performance for its size.",
    history:
      "Nissan built the GTI-R specifically to go rallying, and while it never achieved the same competitive success as its Lancer Evo and Impreza rivals, its raw specs — a turbocharged, AWD hatchback with supercar-slaying acceleration figures — made it an instant cult car.",
    whyFamous:
      "It's remembered as one of the wildest homologation hot hatches of the era, offering AWD/turbo performance that rivaled far more expensive sports cars in a package the size of an economy car.",
    strengths: [
      "SR20DET plus AWD gives explosive, all-weather acceleration",
      "Compact size makes it extremely agile and fun on tight roads",
      "Genuine motorsport homologation pedigree",
      "Shares tuning parts compatibility with the wider SR20DET community"
    ],
    weaknesses: [
      "Cramped interior and spartan equipment even by early-90s hatchback standards",
      "Rare and increasingly hard to find in unmodified condition",
      "Engine bay is notoriously tight, complicating maintenance",
      "Never sold outside Japan and a handful of other markets, limiting parts support in some regions"
    ],
    commonProblems: [
      "Overheating issues due to a cramped engine bay with poor airflow",
      "Timing chain wear common to SR20DET engines",
      "AWD system wear if fluids aren't properly maintained",
      "Rust in rear wheel arches on humid-climate examples"
    ],
    modPotential:
      "Good — being SR20DET-powered, it shares much of the Silvia/180SX tuning catalog, though its tight engine bay makes big turbo builds more challenging to package.",
    buyingGuide:
      "These are rare finds; verify AWD system health, check for cooling system upgrades given known overheating issues, and expect to pay a premium for genuinely unmodified survivors.",
    popularity:
      "A cult favorite among SR20DET and rally enthusiasts, less widely known than the Silvia but treasured by those who understand its homologation-special pedigree.",
    funFacts: [
      "The GTI-R briefly held records as one of the quickest accelerating hatchbacks in the world at launch",
      "It was Nissan's answer to homologation rally hatches like the Lancer Evolution and Celica GT-Four",
      "Its engine bay is so tight that some owners cut cooling vents into the hood to combat overheating"
    ],
    tags: ["pulsar", "gti-r", "sr20det", "rally", "hot hatch"]
  },
  {
    slug: "nissan-laurel-c33",
    name: "Nissan Laurel C33",
    shortName: "Laurel C33",
    chassisCode: "C33",
    engineCode: "RB20DET / RB20DE",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1988–1993",
    engine: "2.0L turbo inline-6 (RB20DET)",
    horsepower: "185 hp",
    torque: "173 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~2,950 lbs",
    zeroToSixty: "~7.5 seconds",
    aspiration: "Turbo",
    bodyStyle: "4-door sedan",
    overview:
      "A four-door RWD sedan sharing its RB-series engine family with the Skyline, the Laurel C33 became an unlikely drift and grip icon thanks to its balanced chassis and roomy body that made it a favorite for grassroots motorsport and family-friendly performance in equal measure.",
    history:
      "Positioned as a comfortable executive sedan, the C33 Laurel's RWD layout and available turbocharged RB20DET quietly made it a favorite of Japanese drift and grip circle enthusiasts who wanted Skyline-adjacent performance with four-door practicality.",
    whyFamous:
      "It found unexpected fame in drift culture as an affordable, roomy alternative to the Silvia, and it's recognized as one of the classic underdog picks among RWD Nissan sedans of the era.",
    strengths: [
      "RWD layout with a turbocharged RB engine shares DNA with the Skyline",
      "Four-door practicality makes it a genuinely usable daily/project car combo",
      "Comparatively affordable versus coupe-bodied RWD Nissans of the era",
      "Solid, well-balanced chassis for grip and drift use"
    ],
    weaknesses: [
      "Heavier than the Silvia, blunting outright performance",
      "Less aftermarket support than SR20DET or later RB26 platforms",
      "Never officially exported to most Western markets",
      "Interior and trim show their age more than sportier siblings"
    ],
    commonProblems: [
      "Rust in the rear arches and floor pans on humid-climate examples",
      "Aging turbo and cooling components typical of RB20DET engines",
      "Worn suspension bushings on high-mileage cars",
      "Electrical gremlins from decades-old wiring"
    ],
    modPotential:
      "Solid — the RB20DET responds to the same tuning fundamentals as other RB-series engines, and some owners swap in RB25 or RB26 engines for a significant power boost.",
    buyingGuide:
      "Since it's JDM-only, confirm clean import paperwork, check for rust in typical problem areas, and verify whether the engine is original or a later RB swap, which affects both value and reliability.",
    popularity:
      "A cult favorite in drift and grip communities as a practical, affordable alternative to more famous RWD Nissans, though far less known to the general public.",
    funFacts: [
      "It shares its RB20DET engine family with early Skyline models, giving it genuine motorsport-adjacent DNA",
      "Its four-door practicality has made it a favorite for grassroots drift events that want an unconventional car",
      "Later Laurel generations continued the RWD/turbo formula into the mid-2000s"
    ],
    tags: ["laurel", "c33", "rb20det", "sedan", "drift"]
  },
  {
    slug: "nissan-stagea-wgnc34",
    name: "Nissan Stagea WGNC34",
    shortName: "Stagea (WGNC34)",
    chassisCode: "WGNC34",
    engineCode: "RB25DET / RB26DETT",
    manufacturer: "Nissan",
    country: "Japan",
    years: "1996–2001",
    engine: "2.5L turbo inline-6 (RB25DET) or 2.6L twin-turbo (RB26DETT, 260RS)",
    horsepower: "280 hp (RB26DETT 260RS)",
    torque: "260 lb-ft",
    transmission: "5-speed manual / 4-speed automatic",
    drivetrain: "AWD",
    weight: "~3,500 lbs",
    zeroToSixty: "~5.5 seconds",
    aspiration: "Twin-Turbo",
    bodyStyle: "5-door wagon",
    overview:
      "Nicknamed the 'Godzilla wagon,' the Stagea is essentially an R33 Skyline in station-wagon clothing, going as far as offering a genuine RB26DETT twin-turbo AWD variant that could keep pace with a real GT-R while hauling cargo.",
    history:
      "Nissan built the Stagea to compete in Japan's booming station-wagon market of the 1990s, but the halo 260RS variant — built in cooperation with Autech and using the actual GT-R drivetrain — turned it into a genuine sleeper performance icon.",
    whyFamous:
      "The idea of a practical family wagon with an actual GT-R engine and AWD system captured enthusiasts' imaginations, making the 260RS one of the most sought-after sleeper JDM cars in existence.",
    strengths: [
      "260RS variant uses the genuine RB26DETT and GT-R-derived AWD system",
      "Wagon practicality combined with genuine sports-sedan performance",
      "Strong sleeper appeal — looks like a family car, performs like a GT-R",
      "Shares tuning knowledge and parts with the R33/R34 Skyline platform"
    ],
    weaknesses: [
      "The rare 260RS variant is expensive and hard to find in good condition",
      "Lesser trims with the RB25DET are less desirable to enthusiasts",
      "Heavier than the Skyline coupe due to wagon body",
      "JDM-only, so import sourcing and verification take extra diligence"
    ],
    commonProblems: [
      "Same RB26/RB25 wear items as Skyline models — turbo and cooling system age concerns",
      "AWD transfer case and diff wear if maintenance is neglected",
      "Rust in rear wagon body sections on poorly stored cars",
      "Non-genuine 260RS clones exist in the market — verify carefully"
    ],
    modPotential:
      "As strong as the Skyline it's based on — the RB26DETT in the 260RS accepts the same proven turbo, fuel, and built-engine upgrade path.",
    buyingGuide:
      "Verify genuine 260RS documentation carefully, since clones with swapped engines exist; check AWD system health and typical RB-series wear items during inspection.",
    popularity:
      "A beloved sleeper/wagon icon among hardcore JDM enthusiasts, prized specifically because it looks nothing like the performance car it actually is.",
    funFacts: [
      "The 260RS designation refers to its factory-quoted power output paired with 'RS' for its sporting intent",
      "It was developed in partnership with Autech, Nissan's in-house tuning and special-vehicles division",
      "Its combination of a wagon body and GT-R running gear makes it one of the ultimate 'sleeper' JDM cars"
    ],
    tags: ["stagea", "wgnc34", "260rs", "rb26", "wagon", "sleeper"]
  },
  {
    slug: "toyota-supra-mk4",
    name: "Toyota Supra MK4",
    shortName: "MK4 Supra",
    chassisCode: "JZA80",
    engineCode: "2JZ-GTE",
    manufacturer: "Toyota",
    country: "Japan",
    years: "1993–2002",
    engine: "3.0L twin-turbo inline-6 (2JZ-GTE)",
    horsepower: "276 hp (JDM rating; 320 hp export)",
    torque: "318–330 lb-ft",
    transmission: "6-speed manual (Getrag)",
    drivetrain: "RWD",
    weight: "~3,400 lbs",
    zeroToSixty: "~4.6 seconds",
    aspiration: "Twin-Turbo",
    bodyStyle: "2-door coupe",
    overview:
      "The MK4 Supra is arguably the single most famous engine-and-chassis combination in tuning history: a fundamentally over-engineered 2JZ-GTE block that has proven capable of surviving four-figure horsepower numbers with the right supporting parts.",
    history:
      "Toyota built the MK4 as its halo sports car, using a stiff, purpose-built chassis and the now-legendary 2JZ-GTE, and it quickly became a fixture of drag racing, time attack, and street tuning scenes worldwide, later amplified massively by its starring role in the original Fast & Furious.",
    whyFamous:
      "Its over-built iron-block 2JZ-GTE became folklore in tuning circles for surviving enormous boost and power increases on largely stock internals, and Paul Walker's orange MK4 in the first Fast & Furious cemented it in pop culture forever.",
    strengths: [
      "2JZ-GTE is famously over-engineered and can reliably handle huge power increases",
      "Stiff, well-balanced RWD chassis with genuine supercar-slaying potential",
      "Six-speed Getrag manual is a durable, desirable gearbox",
      "Massive cultural cachet from motorsport, tuning, and film history"
    ],
    weaknesses: [
      "Values have skyrocketed, pricing many enthusiasts out of clean examples",
      "Popularity has led to a large number of abused, wrecked, or cloned cars on the market",
      "Interior feels dated and utilitarian for a flagship sports coupe",
      "Twin-sequential turbo setup is complex and can be costly to service"
    ],
    commonProblems: [
      "Deteriorating factory turbo hoses and vacuum lines with age",
      "Rear main seal and valve cover gasket oil leaks on higher-mileage engines",
      "Aftermarket tuning shortcuts (poor wiring, mismatched parts) on modified examples",
      "Widespread cloning of lower trims to look like the desirable twin-turbo six-speed"
    ],
    modPotential:
      "About as high as it gets in the tuning world — the 2JZ-GTE reliably handles 500–600 whp on stock internals with turbo and fuel upgrades, and built examples have exceeded 1,500–2,000 hp in drag racing.",
    buyingGuide:
      "Verify VIN, engine, and transmission numbers match factory records given rampant cloning of lesser trims, get a compression and boost leak-down test, and budget significantly more than a decade ago — MK4 Supra prices have risen dramatically.",
    popularity:
      "One of the most famous and valuable JDM cars in the world, driven by an unmatched combination of engineering reputation and pop-culture fame.",
    funFacts: [
      "The 2JZ-GTE's iron block and forged internals are legendary for surviving extreme power increases with minimal internal upgrades",
      "Paul Walker's orange MK4 Supra from the original Fast & Furious remains one of the most recognizable movie cars ever",
      "Toyota fitted the top trim with sequential twin turbos, where a small turbo spools first for low-end response before the second turbo joins in"
    ],
    tags: ["supra", "mk4", "jza80", "2jz", "2jz-gte", "fast and furious"]
  },
  {
    slug: "toyota-ae86-corolla",
    name: "Toyota AE86 Corolla Levin/Trueno",
    shortName: "AE86",
    chassisCode: "AE86",
    engineCode: "4A-GE",
    manufacturer: "Toyota",
    country: "Japan",
    years: "1983–1987",
    engine: "1.6L inline-4 (4A-GE, DOHC 16-valve)",
    horsepower: "128 hp",
    torque: "108 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~2,300 lbs",
    zeroToSixty: "~8.5 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door coupe / 3-door hatchback",
    overview:
      "Immortalized by the manga and anime Initial D, the AE86 is a lightweight, RWD economy coupe whose 50/50 weight balance and revvy 4A-GE engine made it a legendary mountain-pass and drift training car despite modest power figures.",
    history:
      "Toyota built the AE86 as an affordable sporty Corolla variant just as the industry was shifting most economy cars to front-wheel drive, making it one of the last cheap, light, RWD coupes of its kind — a combination that turned it into a grassroots motorsport favorite in Japan's touge (mountain pass) scene.",
    whyFamous:
      "Initial D turned the AE86 into a global icon, but its fame is backed by genuine substance: near-perfect weight distribution and simple RWD mechanicals make it one of the purest, most rewarding cheap sports cars ever built.",
    strengths: [
      "Excellent 50/50 weight balance for a genuinely communicative, playful chassis",
      "Light weight makes even its modest power feel lively",
      "Simple, easy-to-work-on mechanicals with huge parts availability",
      "Massive cultural cachet from Initial D and grassroots touge/drift culture"
    ],
    weaknesses: [
      "Modest factory power by modern standards, needing bolt-ons or a swap to feel quick",
      "Values have risen sharply thanks to Initial D fame, especially for Trueno (pop-up headlight) versions",
      "Many surviving cars have been drifted or raced hard and show wear",
      "Basic factory brakes and suspension need upgrading for serious track use"
    ],
    commonProblems: [
      "Rust in rear quarters, hatch area, and floor pans on unprotected cars",
      "Worn timing belt and valve train components on neglected 4A-GE engines",
      "Chassis fatigue and stress from decades of spirited or drift driving",
      "Aftermarket wiring issues from past engine swaps or turbo conversions"
    ],
    modPotential:
      "Very strong given its simplicity and cult status — common upgrades range from built 4A-GE engines and ITBs to full turbo or larger-displacement swaps, all backed by a mature Initial D-driven aftermarket.",
    buyingGuide:
      "Rust and prior drift/track abuse are the biggest risks; inspect the chassis carefully, verify Levin (fixed headlight) vs. Trueno (pop-up headlight) body style since values differ, and expect Initial D fame to have inflated prices significantly.",
    popularity:
      "One of the most beloved and instantly recognizable JDM cars in the world, with a fame level disproportionate to its modest factory specs, entirely earned through motorsport culture and media.",
    funFacts: [
      "The Trueno's pop-up headlights and the Levin's fixed headlights are the easiest way to tell the two versions apart",
      "Initial D's protagonist famously drove a Trueno delivering tofu on mountain roads, which turned the car into a global cultural symbol",
      "The 4A-GE engine was co-developed with Yamaha, known for its high-revving, race-bred character"
    ],
    tags: ["ae86", "corolla", "levin", "trueno", "4age", "initial d", "hachiroku"]
  },
  {
    slug: "toyota-mr2-sw20",
    name: "Toyota MR2 SW20",
    shortName: "MR2 (SW20)",
    chassisCode: "SW20",
    engineCode: "3S-GTE",
    manufacturer: "Toyota",
    country: "Japan",
    years: "1989–1999",
    engine: "2.0L turbo inline-4 (3S-GTE)",
    horsepower: "245 hp (Turbo, later revisions)",
    torque: "224 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~2,900 lbs",
    zeroToSixty: "~5.5 seconds",
    aspiration: "Turbo",
    bodyStyle: "2-door mid-engine coupe/targa",
    overview:
      "Toyota's answer to the mid-engine sports car formula, the SW20 MR2 borrowed styling cues that led some to nickname it the 'poor man's Ferrari,' pairing genuine mid-engine handling dynamics with an available turbocharged 3S-GTE.",
    history:
      "Toyota developed the SW20 as a more powerful, more serious successor to the original MR2, and while early cars earned a reputation for tricky snap-oversteer at the limit, revised suspension geometry in later model years significantly improved its manners.",
    whyFamous:
      "Its mid-engine layout, Ferrari-esque styling, and turbocharged performance made it a genuine budget alternative to exotic sports cars, and Initial D also featured it prominently, adding to its cult following.",
    strengths: [
      "True mid-engine weight distribution gives genuinely exotic handling characteristics",
      "Turbo 3S-GTE offers strong performance and real tuning potential",
      "Distinct, low-slung styling that still turns heads today",
      "Relatively affordable route into mid-engine sports car ownership"
    ],
    weaknesses: [
      "Early (Gen 1) cars have a reputation for snap oversteer if pushed carelessly at the limit",
      "Mid-engine layout makes some maintenance jobs more involved than front-engine cars",
      "Interior space and everyday practicality are limited",
      "Clean, unmodified examples are increasingly scarce"
    ],
    commonProblems: [
      "Head gasket failures on the 3S-GTE if cooling system isn't well maintained",
      "Timing belt service is critical and interval-sensitive",
      "Rear subframe and suspension bushing wear affecting handling feel",
      "Electrical gremlins in the pop-up headlight motors"
    ],
    modPotential:
      "Strong — the 3S-GTE takes well to bolt-on turbo and fuel upgrades, and the mid-engine chassis is a favorite for track-day and time-attack builds once suspension geometry is dialed in.",
    buyingGuide:
      "Confirm timing belt and head gasket service history, verify whether it's an early Gen 1 (snappier handling) or later Gen 2 (revised suspension), and check for rust around the rear subframe mounts.",
    popularity:
      "A cult classic among mid-engine sports car fans, respected for offering genuine exotic-adjacent handling dynamics at a fraction of Ferrari or Porsche prices.",
    funFacts: [
      "Its styling was frequently compared to the contemporary Ferrari 348, earning it the 'poor man's Ferrari' nickname",
      "Toyota revised the SW20's suspension geometry multiple times during its production run specifically to tame its oversteer reputation",
      "It appeared in Initial D as a formidable rival car, boosting its profile among enthusiasts outside Japan"
    ],
    tags: ["mr2", "sw20", "3sgte", "mid-engine", "turbo"]
  },
  {
    slug: "toyota-chaser-jzx100",
    name: "Toyota Chaser JZX100",
    shortName: "Chaser (JZX100)",
    chassisCode: "JZX100",
    engineCode: "1JZ-GTE",
    manufacturer: "Toyota",
    country: "Japan",
    years: "1996–2001",
    engine: "2.5L twin-turbo inline-6 (1JZ-GTE)",
    horsepower: "276 hp (JDM rating)",
    torque: "268 lb-ft",
    transmission: "5-speed manual / 4-speed automatic",
    drivetrain: "RWD",
    weight: "~3,300 lbs",
    zeroToSixty: "~5.8 seconds",
    aspiration: "Twin-Turbo",
    bodyStyle: "4-door sedan",
    overview:
      "A four-door executive sedan hiding a genuine sports-car engine, the JZX100 Chaser paired the tough, tunable 1JZ-GTE with a comfortable RWD sedan body, making it a beloved 'sleeper' among Japan's drift and grip circle scenes.",
    history:
      "Toyota marketed the Chaser as a sporty alternative to the Crown and Mark II for businessmen who wanted a bit more performance, but its RWD layout and 1JZ-GTE engine quietly turned it into a favorite among drifters and grip drivers who wanted four doors and real power.",
    whyFamous:
      "It became the definitive 'businessman's sleeper' — a car that looked like an ordinary sedan but shared its engine architecture with the Supra, and it developed a devoted following in Japanese drift culture for exactly that reason.",
    strengths: [
      "1JZ-GTE shares much of the tuning DNA and reputation for toughness with the 2JZ-GTE",
      "RWD sedan layout offers genuine sleeper appeal and four-door practicality",
      "Comfortable, well-equipped interior compared to sportier coupes of the era",
      "Strong drift and grip community support in Japan"
    ],
    weaknesses: [
      "Less international recognition than the Supra despite sharing engine architecture",
      "Never officially exported to most Western markets, complicating sourcing",
      "Heavier than coupe-bodied RWD rivals like the Silvia",
      "Popularity in drift culture means many examples have hard mileage"
    ],
    commonProblems: [
      "Common 1JZ-GTE wear items like aging vacuum lines and turbo seals",
      "Rust in rear arches and floor pans on humid-climate cars",
      "Suspension bushing wear from drift or grip use",
      "Non-genuine or heavily modified drivetrains on drift-oriented examples"
    ],
    modPotential:
      "Excellent — the 1JZ-GTE is nearly as tunable as the 2JZ-GTE, with big turbo and built-engine setups common in drift and grip builds, and some owners even swap in the larger 2JZ-GTE.",
    buyingGuide:
      "Verify import documentation since it's JDM-only, check typical 1JZ-GTE wear items, and inspect for chassis stress given its popularity as a drift car in Japan.",
    popularity:
      "A cult darling among drift and grip enthusiasts who appreciate its sleeper status, though it remains less globally famous than its Supra sibling.",
    funFacts: [
      "The 1JZ-GTE shares core architecture with the Supra's 2JZ-GTE, just in a smaller displacement",
      "It's a favorite car in Japanese drift media specifically because of its unassuming four-door sedan looks",
      "The JZX100 platform also underpins the similarly loved Toyota Mark II and Cresta of the same era"
    ],
    tags: ["chaser", "jzx100", "1jz", "1jz-gte", "sedan", "sleeper", "drift"]
  },
  {
    slug: "toyota-celica-gt-four",
    name: "Toyota Celica GT-Four",
    shortName: "Celica GT-Four",
    chassisCode: "ST185 / ST205",
    engineCode: "3S-GTE",
    manufacturer: "Toyota",
    country: "Japan",
    years: "1986–1999",
    engine: "2.0L turbo inline-4 (3S-GTE)",
    horsepower: "255 hp (ST205)",
    torque: "224 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "AWD",
    weight: "~3,100 lbs",
    zeroToSixty: "~5.9 seconds",
    aspiration: "Turbo",
    bodyStyle: "2-door coupe",
    overview:
      "Toyota's World Rally Championship homologation special, the Celica GT-Four combined a turbocharged 3S-GTE with a full-time AWD system in a stylish coupe body, and it delivered — winning multiple WRC drivers' and manufacturers' titles.",
    history:
      "Built specifically to compete in Group A rallying, the GT-Four won the WRC manufacturers' championship and multiple drivers' titles with Carlos Sainz and Juha Kankkunen behind the wheel, though the ST205 generation's factory turbo restrictor scandal in 1995 led to Toyota's disqualification from that season.",
    whyFamous:
      "It's remembered both for genuine multi-championship rally success and for the notorious 'turbo restrictor bypass' scandal that got Toyota banned from the 1996 WRC season, making it one of motorsport's most infamous homologation stories.",
    strengths: [
      "Genuine multi-championship WRC pedigree",
      "AWD/turbo combination gives strong all-weather performance",
      "Distinct rally-inspired styling with functional aero",
      "Strong parts-sharing with other 3S-GTE Toyota models"
    ],
    weaknesses: [
      "Values for clean ST205 examples have risen significantly given rarity and rally history",
      "Complex AWD and turbo systems raise maintenance costs versus simpler RWD rivals",
      "Never officially sold in North America, complicating sourcing and parts",
      "The ST205's tainted rally history is a mixed badge of honor for some buyers"
    ],
    commonProblems: [
      "Head gasket issues on the 3S-GTE if cooling isn't well maintained",
      "AWD center differential and viscous coupling wear",
      "Rust in rear arches and rocker panels on humid-climate cars",
      "Aging vacuum and boost control lines affecting turbo performance"
    ],
    modPotential:
      "Solid — the 3S-GTE accepts turbo and fuel system upgrades well, though the AWD system adds complexity versus tuning a simpler RWD platform.",
    buyingGuide:
      "Verify AWD system health, check timing belt and head gasket service history, and confirm whether the car is the earlier ST185 or the rarer, more powerful ST205.",
    popularity:
      "Respected among rally enthusiasts and JDM AWD fans, though it remains less mainstream-famous than its Lancer Evo and Impreza WRX rivals.",
    funFacts: [
      "The ST205 GT-Four was disqualified from the 1995 WRC season after officials discovered a turbo restrictor bypass device hidden in the intake system",
      "Carlos Sainz and Juha Kankkunen both won WRC drivers' titles driving Celica GT-Fours",
      "It's one of the few Japanese homologation cars to combine full-time AWD with a genuinely stylish, non-boxy coupe body"
    ],
    tags: ["celica", "gt-four", "st185", "st205", "3sgte", "wrc", "rally"]
  },
  {
    slug: "toyota-soarer-jzz30",
    name: "Toyota Soarer JZZ30",
    shortName: "Soarer (Z30)",
    chassisCode: "JZZ30",
    engineCode: "1JZ-GTE / 2JZ-GE",
    manufacturer: "Toyota",
    country: "Japan",
    years: "1991–2000",
    engine: "2.5L twin-turbo inline-6 (1JZ-GTE)",
    horsepower: "276 hp (JDM rating)",
    torque: "268 lb-ft",
    transmission: "5-speed manual / 4-speed automatic",
    drivetrain: "RWD",
    weight: "~3,400 lbs",
    zeroToSixty: "~6.5 seconds",
    aspiration: "Twin-Turbo",
    bodyStyle: "2-door coupe",
    overview:
      "The Soarer is Toyota's luxury grand-touring coupe, later exported as the first-generation Lexus SC — a plush, technology-laden cruiser that also happens to share its turbocharged inline-6 with the beloved Chaser and Supra family.",
    history:
      "Toyota positioned the Soarer as a flagship personal luxury coupe loaded with tech like active suspension and available digital dashboards, and its RWD chassis and 1JZ-GTE/2JZ engines have made it an increasingly popular sleeper and drift platform in recent years.",
    whyFamous:
      "It brought genuine luxury-GT refinement to a platform that shares engine DNA with some of JDM tuning's most legendary powerplants, making it a car that can be both a comfortable cruiser and a serious sleeper build.",
    strengths: [
      "1JZ-GTE or later 2JZ engines share the same tuning potential as the Chaser and Supra",
      "Genuinely luxurious, well-equipped interior for grand touring",
      "RWD layout and available manual gearbox appeal to drift and grip builders",
      "Distinct, elegant early-90s coupe styling"
    ],
    weaknesses: [
      "Heavier and more luxury-focused than sportier RWD rivals",
      "Never officially sold in North America (exported instead as the Lexus SC)",
      "Aging luxury electronics can be finicky and costly to repair",
      "Less globally recognized than its Supra and Chaser siblings"
    ],
    commonProblems: [
      "Aging suspension and active-ride electronics on higher trims",
      "Common turbo and vacuum line wear on 1JZ-GTE examples",
      "Interior electronics (power everything) showing age-related faults",
      "Rust in typical early-90s Toyota problem areas like rear arches"
    ],
    modPotential:
      "Strong given the shared 1JZ/2JZ engine family — turbo, fuel, and even engine-swap upgrades are well documented, drawing on the wider Supra/Chaser tuning community.",
    buyingGuide:
      "Since it's JDM-only, verify import documentation, check the health of luxury-oriented electronics and active suspension if equipped, and confirm which engine (1JZ-GTE or 2JZ-GE) is fitted.",
    popularity:
      "A growing sleeper favorite among JDM enthusiasts who want Supra-adjacent tuning potential wrapped in a more comfortable, luxury-oriented body.",
    funFacts: [
      "The Soarer became the basis for the first-generation Lexus SC sold in North America",
      "Some Soarers came with a factory active suspension system, advanced for its era",
      "Its chassis and engine family closely parallel the JZX100 Chaser and JZA80 Supra"
    ],
    tags: ["soarer", "jzz30", "1jz", "lexus sc", "gt coupe"]
  },
  {
    slug: "toyota-sprinter-trueno-ae111",
    name: "Toyota Sprinter Trueno AE111",
    shortName: "AE111 Trueno",
    chassisCode: "AE111",
    engineCode: "4A-GE (20V Silvertop/Blacktop)",
    manufacturer: "Toyota",
    country: "Japan",
    years: "1995–2000",
    engine: "1.6L inline-4 (4A-GE 20-valve)",
    horsepower: "165 hp",
    torque: "112 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "FWD",
    weight: "~2,300 lbs",
    zeroToSixty: "~7.8 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "3-door hatchback",
    overview:
      "The final and most advanced iteration of the naturally-aspirated 4A-GE, the AE111's 20-valve 'Silvertop' and later 'Blacktop' engines are prized by enthusiasts as some of the sweetest-revving small four-cylinders Toyota ever built, even though the AE111 itself switched to front-wheel drive.",
    history:
      "By the mid-90s Toyota had moved the mainstream Corolla/Sprinter line to FWD, but the sporty Trueno variant kept the high-revving 4A-GE spirit alive with the 20-valve engine, which became a favorite swap target for AE86 owners seeking more power while keeping the classic 4A-GE character.",
    whyFamous:
      "Its 20-valve 4A-GE engines (nicknamed Silvertop and Blacktop for their valve cover colors) became the go-to upgrade swap for AE86 enthusiasts wanting more performance without abandoning the beloved naturally-aspirated, high-revving formula.",
    strengths: [
      "20-valve 4A-GE is one of the sweetest-revving small NA engines Toyota ever produced",
      "Light weight keeps performance lively despite modest displacement",
      "Popular and well-documented swap target into AE86 chassis",
      "Simple, reliable mechanicals with strong parts support"
    ],
    weaknesses: [
      "Switched to FWD, losing the AE86's beloved RWD driving dynamics in its own chassis",
      "Modest power without forced induction or a swap",
      "Less globally famous than the AE86 itself",
      "Values have risen as demand for 20-valve engines for AE86 swaps increased"
    ],
    commonProblems: [
      "Timing belt and valve train wear if service intervals are neglected",
      "VVT (Blacktop) system issues if oil changes are skipped",
      "Rust in typical Corolla-era problem areas",
      "Engines pulled for AE86 swaps, leaving the donor chassis stripped and devalued"
    ],
    modPotential:
      "Very strong for engine-focused builds — individual throttle bodies, higher-compression pistons, and built internals are all well supported, and the engine's popularity as an AE86 swap keeps the aftermarket active.",
    buyingGuide:
      "Decide whether you want the car as its own FWD hot hatch or purely as a Blacktop/Silvertop engine donor for an AE86 swap, since that dramatically changes what to look for.",
    popularity:
      "Beloved primarily by 4A-GE and AE86 purists for its engine, with the complete car itself less iconic than the powerplant it carries.",
    funFacts: [
      "The 'Silvertop' and 'Blacktop' nicknames simply refer to the color of the valve cover on each 20-valve 4A-GE variant",
      "Swapping a Blacktop 20-valve engine into an AE86 is one of the most common and respected upgrades in that community",
      "The Blacktop version added variable valve timing (VVTL-i precursor tech), improving both low-end torque and top-end power"
    ],
    tags: ["ae111", "trueno", "4age", "20v", "silvertop", "blacktop"]
  },
  {
    slug: "toyota-altezza-rs200",
    name: "Toyota Altezza RS200",
    shortName: "Altezza RS200",
    chassisCode: "SXE10",
    engineCode: "3S-GE (BEAMS)",
    manufacturer: "Toyota",
    country: "Japan",
    years: "1998–2005",
    engine: "2.0L inline-4 (3S-GE BEAMS, DOHC VVTi)",
    horsepower: "210 hp",
    torque: "165 lb-ft",
    transmission: "6-speed manual",
    drivetrain: "RWD",
    weight: "~2,800 lbs",
    zeroToSixty: "~6.8 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "4-door sedan",
    overview:
      "Sold internationally as the first-generation Lexus IS200/IS300, the Altezza is a compact RWD sport sedan whose high-revving BEAMS engine and sharp chassis made it an instant favorite in Japan's grip and time-attack scenes — and its tail lights became so influential that 'Altezza-style' lights became their own aftermarket category worldwide.",
    history:
      "Toyota engineered the Altezza to rival BMW's 3 Series with genuine RWD sport-sedan dynamics, and its high-revving naturally-aspirated BEAMS four-cylinder became a favorite for enthusiasts who wanted Honda-VTEC-like engine character in a RWD body.",
    whyFamous:
      "Beyond its genuinely sharp handling, the Altezza's clear-lens tail light design was so widely copied by the aftermarket in the early 2000s that 'Altezza lights' became a generic industry term for that entire tail-light style.",
    strengths: [
      "High-revving BEAMS 3S-GE engine offers genuine Honda-like top-end excitement in a RWD car",
      "Sharp, well-balanced RWD chassis tuned for genuine sport-sedan handling",
      "Six-speed manual (RS200 trim) is a rare, desirable gearbox for the class",
      "Practical four-door body with genuine driver-focused dynamics"
    ],
    weaknesses: [
      "Modest power without forced induction given its naturally-aspirated engine",
      "Less internationally famous than its Lexus IS successors",
      "Some trims came only with automatic transmissions, reducing enthusiast appeal",
      "Interior and tech feel dated compared to later Lexus IS generations"
    ],
    commonProblems: [
      "VVTi solenoid and timing chain wear on higher-mileage BEAMS engines",
      "Suspension bushing wear affecting the car's famed handling precision",
      "Rust in typical Toyota problem areas of the era",
      "Aging interior trim and electronics"
    ],
    modPotential:
      "Solid for a naturally-aspirated build — individual throttle bodies, cams, and built internals extract meaningful gains, and some owners pursue turbo conversions or engine swaps for bigger power.",
    buyingGuide:
      "Seek out the manual RS200 trim if driver engagement matters most, verify BEAMS engine service history, and check suspension bushings and mounts for wear that would dull the car's famed handling.",
    popularity:
      "A respected sport-sedan cult classic, especially recognized for its influential styling and its role as the precursor to the internationally successful Lexus IS.",
    funFacts: [
      "Its clear-lens tail lights inspired an entire aftermarket lighting trend nicknamed 'Altezza lights' or 'Euro lights' worldwide",
      "It was sold internationally as the first-generation Lexus IS200 and IS300",
      "The BEAMS engine family name stands for 'Breakthrough Engine with Advanced Mechanism System'"
    ],
    tags: ["altezza", "rs200", "sxe10", "beams", "lexus is", "3sge"]
  },
  {
    slug: "toyota-starlet-glanza-ep91",
    name: "Toyota Starlet Glanza EP91",
    shortName: "Glanza EP91",
    chassisCode: "EP91",
    engineCode: "4E-FTE",
    manufacturer: "Toyota",
    country: "Japan",
    years: "1996–1999",
    engine: "1.3L turbo inline-4 (4E-FTE)",
    horsepower: "133 hp",
    torque: "134 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "FWD",
    weight: "~1,880 lbs",
    zeroToSixty: "~7.5 seconds",
    aspiration: "Turbo",
    bodyStyle: "3-door hatchback",
    overview:
      "A featherweight turbocharged pocket rocket, the Glanza EP91 packs a genuinely potent power-to-weight ratio into one of the smallest bodies in this encyclopedia, making it a favorite budget hot-hatch for enthusiasts who prize agility over outright power.",
    history:
      "Toyota built the sporty Glanza-badged Starlet to compete in Japan's crowded small hot-hatch segment, giving it a turbocharged 4E-FTE engine that, despite its tiny 1.3-liter displacement, delivered genuinely quick performance thanks to the car's minimal weight.",
    whyFamous:
      "Its remarkable power-to-weight ratio for such a small, affordable car earned it a cult following among enthusiasts who value tossable handling and big-hatch-humbling acceleration in a genuinely tiny package.",
    strengths: [
      "Exceptionally light weight makes its turbo power feel very lively",
      "Compact size makes it extremely agile and easy to place on tight roads",
      "Affordable, accessible entry point into JDM turbo hot-hatch ownership",
      "Simple mechanicals that are easy to maintain and modify"
    ],
    weaknesses: [
      "Very small interior and limited practicality",
      "Modest absolute power output without modification",
      "Never officially exported to most Western markets",
      "Small production numbers make clean examples increasingly rare"
    ],
    commonProblems: [
      "Turbo wear and boost control issues on tuned examples",
      "Timing belt service is critical given the small, high-strung engine",
      "Rust in the unibody structure on poorly stored examples",
      "Aftermarket wiring issues from past ECU or turbo upgrades"
    ],
    modPotential:
      "Good for its class — turbo upgrades, ECU tuning, and weight-reduction mods are popular, and the car's light weight means even modest power gains translate to big performance improvements.",
    buyingGuide:
      "Since it's JDM-only and rare, verify import documentation, inspect for rust in the unibody, and check turbo and boost control health given the small engine's high-strung nature.",
    popularity:
      "A cult favorite among enthusiasts who prioritize light weight and agility, though it remains a niche pick compared to more famous JDM turbo cars.",
    funFacts: [
      "Despite its tiny 1.3-liter engine, its power-to-weight ratio rivaled much larger hot hatches of the era",
      "The Glanza name was Toyota's badge for its sportiest Starlet trims",
      "It's frequently cited by enthusiasts as an underrated 'giant killer' for autocross and tight circuit use"
    ],
    tags: ["starlet", "glanza", "ep91", "4eft", "hot hatch", "kei-adjacent"]
  },
  {
    slug: "toyota-aristo-jzs161",
    name: "Toyota Aristo JZS161",
    shortName: "Aristo (JZS161)",
    chassisCode: "JZS161",
    engineCode: "2JZ-GTE",
    manufacturer: "Toyota",
    country: "Japan",
    years: "1997–2004",
    engine: "3.0L twin-turbo inline-6 (2JZ-GTE)",
    horsepower: "276 hp (JDM rating)",
    torque: "333 lb-ft",
    transmission: "5-speed manual / 4-speed automatic",
    drivetrain: "RWD",
    weight: "~3,600 lbs",
    zeroToSixty: "~5.6 seconds",
    aspiration: "Twin-Turbo",
    bodyStyle: "4-door sedan",
    overview:
      "The JDM Aristo is essentially the first-generation Lexus GS300/GS400 with a serious secret in top trim: the very same twin-turbo 2JZ-GTE found in the MK4 Supra, wrapped in a comfortable, understated luxury sedan body.",
    history:
      "Toyota built the Aristo as its flagship luxury sports sedan, and Japanese buyers could option it with the exact twin-turbo 2JZ-GTE from the Supra — a decision that quietly turned it into one of the ultimate Supra-adjacent sleeper builds available anywhere.",
    whyFamous:
      "Sharing the legendary 2JZ-GTE with the MK4 Supra in a four-door luxury sedan body makes it one of the most respected sleeper platforms in JDM culture, offering Supra-grade tuning potential with room for the family.",
    strengths: [
      "Genuine 2JZ-GTE twin-turbo engine shared with the MK4 Supra",
      "Comfortable, well-equipped luxury sedan interior",
      "Massive sleeper appeal — looks like an executive sedan, hides Supra power",
      "Same enormous tuning ceiling as the Supra thanks to the shared engine"
    ],
    weaknesses: [
      "Heavier than the Supra, so performance feels less immediate without tuning",
      "Never officially sold with the twin-turbo engine outside Japan (export GS400 used a V8 instead)",
      "Complex luxury electronics can be costly to maintain as the car ages",
      "Less internationally recognized than the Supra despite sharing its engine"
    ],
    commonProblems: [
      "Same 2JZ-GTE wear items as the Supra — aging vacuum lines and turbo seals",
      "Luxury electronics and power accessories showing their age",
      "Rust in typical late-90s Toyota problem areas",
      "Suspension bushing wear affecting ride quality and handling"
    ],
    modPotential:
      "As strong as the Supra's — the shared 2JZ-GTE takes the same turbo, fuel, and built-engine upgrades, making the Aristo a favorite for sleeper builds chasing serious power in a subtle package.",
    buyingGuide:
      "Verify the twin-turbo 2JZ-GTE engine and V-package trim, since lower trims used less desirable engines; check typical 2JZ wear items and confirm the luxury electronics are functioning properly.",
    popularity:
      "A respected sleeper icon among 2JZ enthusiasts, valued specifically for hiding Supra-grade performance inside an understated luxury body.",
    funFacts: [
      "It was sold internationally as the first-generation Lexus GS, though the export GS400 used a V8 instead of the JDM Aristo's twin-turbo 2JZ-GTE inline-6",
      "Its twin-turbo engine option makes it one of the most powerful sedans Toyota offered in Japan during the 1990s",
      "The Aristo shares platform architecture and engine family with the JZX100 Chaser and JZA80 Supra"
    ],
    tags: ["aristo", "jzs161", "2jz", "2jz-gte", "lexus gs", "sleeper"]
  },
  {
    slug: "honda-nsx-na1",
    name: "Honda NSX NA1",
    shortName: "NSX (NA1)",
    chassisCode: "NA1",
    engineCode: "C30A",
    manufacturer: "Honda",
    country: "Japan",
    years: "1990–1997",
    engine: "3.0L V6 (C30A, DOHC VTEC)",
    horsepower: "270 hp",
    torque: "210 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~3,000 lbs",
    zeroToSixty: "~5.5 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door mid-engine coupe",
    overview:
      "Developed with input from Formula 1 legend Ayrton Senna, the NSX proved a Japanese manufacturer could build a genuine everyday-usable supercar — one with all-aluminum construction, mid-engine balance, and Honda's obsessive reliability standards.",
    history:
      "Honda set out to beat Ferrari at its own game with everyday usability rather than raw drama, using an all-aluminum monocoque (a first for a production car) and tuning input from Senna himself to sharpen the chassis before launch.",
    whyFamous:
      "It redefined what a supercar could be — genuinely reliable, comfortable, and easy to drive daily while still delivering real mid-engine dynamics, directly influencing how Ferrari and others approached usability in later models.",
    strengths: [
      "All-aluminum construction keeps weight low and rigidity high",
      "Legendary Honda reliability in a genuine exotic-car package",
      "Mid-engine balance gives communicative, confidence-inspiring handling",
      "Senna's chassis-tuning input is a genuine piece of motorsport history"
    ],
    weaknesses: [
      "Values have climbed sharply, especially for clean manual examples",
      "Modest power by modern supercar standards without modification",
      "Aluminum body repairs require specialist knowledge and equipment",
      "Early cars lack some of the refinement of later NA2 updates"
    ],
    commonProblems: [
      "Timing belt service is critical and interval-sensitive on the C30A",
      "Aging suspension bushings affecting the car's famed handling precision",
      "Power window and pop-up headlight motor wear",
      "Rock chips and aluminum panel damage that require specialist repair"
    ],
    modPotential:
      "Moderate but genuine — supercharger kits, individual throttle bodies, and suspension upgrades are well documented, though the community favors preserving originality over extreme modification.",
    buyingGuide:
      "Verify timing belt service history closely, inspect aluminum body panels for improperly repaired damage, and prioritize matching-numbers manual examples for the strongest collector value.",
    popularity:
      "Globally revered as a groundbreaking supercar and one of Honda's most celebrated engineering achievements, with values reflecting its growing legend status.",
    funFacts: [
      "Ayrton Senna personally tested prototypes at Suzuka and requested chassis stiffening changes that made it into production",
      "It was the first production car with an all-aluminum monocoque body",
      "Gordon Murray, designer of the McLaren F1, cited the NSX as a benchmark for everyday supercar usability"
    ],
    tags: ["nsx", "na1", "c30a", "honda nsx", "senna"]
  },
  {
    slug: "honda-integra-type-r-dc2",
    name: "Honda Integra Type R DC2",
    shortName: "Integra Type R (DC2)",
    chassisCode: "DC2",
    engineCode: "B18C",
    manufacturer: "Honda",
    country: "Japan",
    years: "1995–2001",
    engine: "1.8L inline-4 (B18C, DOHC VTEC)",
    horsepower: "197–200 hp",
    torque: "130 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "FWD",
    weight: "~2,600 lbs",
    zeroToSixty: "~6.7 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door coupe",
    overview:
      "Widely regarded as one of the greatest front-wheel-drive cars ever built, the DC2 Integra Type R combines a screaming, hand-ported B18C VTEC engine with meticulous chassis tuning, a helical limited-slip diff, and painstaking factory attention to weight reduction.",
    history:
      "Honda's Type R division hand-inspected and hand-ported each cylinder head, welded extra chassis bracing into the unibody, and stripped out sound deadening and other weight — turning an ordinary Integra into a car that repeatedly beat far more powerful machinery on twisty circuits.",
    whyFamous:
      "It proved that a FWD car, when engineered obsessively enough, could out-handle much more powerful RWD rivals, and it remains the benchmark by which every front-wheel-drive performance car since has been measured.",
    strengths: [
      "Hand-ported B18C VTEC head revs to a thrilling 8,000+ rpm with genuine top-end fury",
      "Factory helical limited-slip differential dramatically reduces torque steer and improves corner exit",
      "Extensive factory weight-reduction and chassis bracing sharpen every input",
      "Widely considered the gold standard for FWD handling balance"
    ],
    weaknesses: [
      "No factory turbo, so peak power depends heavily on high rpm and driver commitment",
      "Values for genuine, unmodified DC2 Type Rs have risen sharply",
      "Spartan interior with removed sound deadening trades comfort for weight savings",
      "FWD limits ultimate grip compared to AWD or RWD rivals with similar power"
    ],
    commonProblems: [
      "VTEC solenoid and oil control wear on high-mileage, hard-driven examples",
      "Worn motor mounts leading to excess drivetrain vibration",
      "Rust in rear arches on humid or salted-road cars",
      "Many surviving examples have been track-abused or heavily modified"
    ],
    modPotential:
      "Very strong within the NA VTEC tuning world — individual throttle bodies, cams, and built B-series internals are well documented, and it remains a favorite base for time-attack and autocross builds.",
    buyingGuide:
      "Verify genuine Type R equipment (LSD, chassis bracing, factory Recaro seats) since regular Integras are sometimes dressed up to look like Type Rs, and check VTEC engagement and motor mount condition on a test drive.",
    popularity:
      "Considered a holy grail among front-wheel-drive enthusiasts and Honda purists worldwide, with genuine examples commanding serious collector premiums.",
    funFacts: [
      "Honda's Type R engineers hand-selected and hand-ported cylinder heads on the production line for consistent flow across every engine",
      "The DC2 lapped Japan's Tsukuba Circuit faster than many contemporary sports cars with far more power",
      "It's frequently cited by automotive journalists as one of the best-handling FWD cars ever made, a title it still holds decades later"
    ],
    tags: ["integra", "type r", "dc2", "b18c", "vtec", "fwd"]
  },
  {
    slug: "honda-civic-type-r-ek9",
    name: "Honda Civic Type R EK9",
    shortName: "Civic Type R (EK9)",
    chassisCode: "EK9",
    engineCode: "B16B",
    manufacturer: "Honda",
    country: "Japan",
    years: "1997–2000",
    engine: "1.6L inline-4 (B16B, DOHC VTEC)",
    horsepower: "182 hp",
    torque: "118 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "FWD",
    weight: "~2,270 lbs",
    zeroToSixty: "~6.7 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "3-door hatchback",
    overview:
      "The first Civic to wear the Type R badge, the EK9 packed the highest specific output of any naturally-aspirated production four-cylinder of its era (the B16B produced over 100 hp per liter) into a featherweight hatchback body.",
    history:
      "Honda applied the same Type R formula that made the DC2 Integra legendary — hand-ported heads, a helical LSD, and aggressive weight savings — to the smaller Civic platform, creating one of the most revered hot hatches in Japanese history.",
    whyFamous:
      "Its B16B engine's 100+ hp-per-liter specific output was a genuine world-first for a naturally-aspirated production engine, and its raw, stripped-out character made it an instant legend among Honda purists.",
    strengths: [
      "B16B VTEC engine delivers a genuinely world-class specific power output for its era",
      "Extremely light weight makes every horsepower count",
      "Factory helical LSD and sharpened chassis give excellent front-drive handling",
      "Raw, minimalist character with a screaming 8,200 rpm redline"
    ],
    weaknesses: [
      "Never sold in North America, making genuine examples import-only",
      "Values have risen substantially as JDM hot-hatch demand has grown",
      "Spartan interior trades comfort for weight savings",
      "Small production numbers make truly unmolested cars scarce"
    ],
    commonProblems: [
      "VTEC solenoid wear and oil control issues on hard-driven, high-mileage cars",
      "Rust in typical late-90s Honda hatchback problem areas",
      "Worn motor and transmission mounts from repeated hard use",
      "Many surviving examples have track or autocross wear"
    ],
    modPotential:
      "Excellent within the B-series tuning world — individual throttle bodies, cams, and built engines are extremely well documented thanks to a huge global Honda tuning community.",
    buyingGuide:
      "Since it's JDM-only, verify genuine import documentation and confirm the LSD and other Type R-specific hardware are present and original, as regular Civics are sometimes dressed up cosmetically.",
    popularity:
      "A holy-grail hot hatch for Honda purists worldwide, prized for its raw character and genuine motorsport-derived engineering.",
    funFacts: [
      "The B16B's specific output of over 100 hp per liter was a genuine world record for naturally-aspirated production engines at launch",
      "It was never sold outside Japan, fueling decades of import demand in markets like the US and UK",
      "Honda's Type R engineers applied the same painstaking hand-assembly process used on the DC2 Integra Type R"
    ],
    tags: ["civic", "type r", "ek9", "b16b", "vtec", "hatchback"]
  },
  {
    slug: "honda-civic-type-r-fd2",
    name: "Honda Civic Type R FD2",
    shortName: "Civic Type R (FD2)",
    chassisCode: "FD2",
    engineCode: "K20A",
    manufacturer: "Honda",
    country: "Japan",
    years: "2007–2010",
    engine: "2.0L inline-4 (K20A, DOHC i-VTEC)",
    horsepower: "222 hp",
    torque: "159 lb-ft",
    transmission: "6-speed manual",
    drivetrain: "FWD",
    weight: "~2,850 lbs",
    zeroToSixty: "~6.0 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "4-door sedan",
    overview:
      "The JDM-only FD2 took the Type R formula into a genuinely stiffened four-door sedan body, pairing the high-revving K20A with a specially reinforced chassis that made it one of the most track-capable sedans ever sold.",
    history:
      "Rather than adapting the global hatchback Civic Type R, Honda built a bespoke, more rigid sedan-specific platform for the Japanese market FD2, complete with its own dedicated front and rear suspension geometry tuned specifically for circuit performance.",
    whyFamous:
      "Its JDM-only, sedan-specific chassis engineering made it more track-focused than any other Civic Type R generation sold globally at the time, and it set benchmark lap times for front-wheel-drive sedans at Japanese circuits.",
    strengths: [
      "K20A i-VTEC engine revs to a thrilling 8,000 rpm with strong top-end power",
      "Bespoke, more rigid sedan chassis specifically engineered for circuit driving",
      "Excellent factory brakes and suspension tuning for its era",
      "Genuine motorsport-grade handling balance for a four-door car"
    ],
    weaknesses: [
      "Never sold outside Japan, so all examples are grey-market imports elsewhere",
      "No factory turbo, so power depends on high rpm and driver commitment",
      "Firm, track-focused suspension trades away some ride comfort",
      "Values have risen as JDM-only Honda demand has grown globally"
    ],
    commonProblems: [
      "VTEC solenoid and timing chain wear on high-mileage, hard-driven examples",
      "Worn motor mounts amplifying vibration over time",
      "Suspension bushing wear affecting the car's renowned handling precision",
      "Track and time-attack wear on examples used for their intended purpose"
    ],
    modPotential:
      "Strong within the K-series tuning community — cams, individual throttle bodies, and built K20A internals are well supported, and it remains a favorite for time-attack sedan builds.",
    buyingGuide:
      "Verify genuine JDM import documentation, check for track-day wear and modification history, and confirm suspension and brake components haven't been worn out from hard circuit use.",
    popularity:
      "Highly respected among Honda purists and time-attack enthusiasts as one of the sharpest-handling front-wheel-drive sedans ever built.",
    funFacts: [
      "Honda engineered a unique, more rigid chassis specifically for the JDM FD2 rather than reusing the global hatchback platform",
      "It set front-wheel-drive lap records at circuits including Suzuka during its production run",
      "The K20A engine in the FD2 was tuned specifically for higher output than the K20A used in other markets' Civic Type Rs"
    ],
    tags: ["civic", "type r", "fd2", "k20a", "i-vtec", "sedan"]
  },
  {
    slug: "honda-s2000-ap1",
    name: "Honda S2000 AP1/AP2",
    shortName: "S2000",
    chassisCode: "AP1 / AP2",
    engineCode: "F20C / F22C",
    manufacturer: "Honda",
    country: "Japan",
    years: "1999–2009",
    engine: "2.0L inline-4 (F20C) / 2.2L inline-4 (F22C)",
    horsepower: "237–247 hp",
    torque: "153–161 lb-ft",
    transmission: "6-speed manual",
    drivetrain: "RWD",
    weight: "~2,800 lbs",
    zeroToSixty: "~5.7 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door roadster",
    overview:
      "Built to celebrate Honda's 50th anniversary, the S2000 paired a screaming, Guinness-record-holding naturally-aspirated F20C engine (the highest specific output of any NA production engine at launch) with a genuinely purist front-mid-engine RWD roadster chassis.",
    history:
      "Honda engineered the S2000 with an ultra-high 9,000 rpm redline and a 50/50 weight distribution roadster body, and while the early AP1's twitchy at-the-limit handling earned some criticism, the later AP2's revised suspension and larger 2.2L engine addressed those concerns.",
    whyFamous:
      "The F20C's specific output set a Guinness World Record for naturally-aspirated production engines at launch, and the car's razor-sharp, driver-focused RWD roadster character made it an instant enthusiast icon.",
    strengths: [
      "F20C/F22C engines rev to a thrilling 8,800–9,000 rpm redline with genuine motorsport character",
      "Near-perfect 50/50 weight distribution for genuinely communicative RWD handling",
      "Six-speed manual is widely praised as one of the best-shifting gearboxes ever made",
      "Strong aftermarket and enthusiast community support worldwide"
    ],
    weaknesses: [
      "Early AP1 cars have a reputation for snappy oversteer if pushed carelessly near the limit",
      "Modest low-end torque without forced induction, requiring high rpm for peak performance",
      "Values have risen significantly as JDM/Honda enthusiast demand has grown",
      "Convertible top and roadster body add cost versus coupe alternatives if damaged"
    ],
    commonProblems: [
      "Rod bearing wear on very high-mileage, high-rpm-abused F20C/F22C engines",
      "Convertible top mechanism wear and water leaks with age",
      "Worn suspension bushings affecting the car's famed handling balance",
      "Differential wear on cars used hard on track"
    ],
    modPotential:
      "Excellent — the F20C/F22C responds well to forced induction (turbo and supercharger kits are common), and the chassis is a favorite for track-day and time-attack builds once suspension is dialed in.",
    buyingGuide:
      "Verify whether it's the earlier AP1 (2.0L, snappier handling) or later AP2 (2.2L, revised suspension), check for rod bearing wear via oil analysis if possible, and inspect the convertible top and frame rails for rust or damage.",
    popularity:
      "One of the most beloved and respected Honda enthusiast cars ever made, with a passionate global community and rising collector interest.",
    funFacts: [
      "The F20C's specific output of nearly 120 hp per liter set a Guinness World Record for naturally-aspirated production car engines at its debut",
      "It was built to commemorate Honda's 50th anniversary as a car manufacturer",
      "Its digital dashboard with a shift-light tachometer that changes color as revs climb was considered cutting-edge for 1999"
    ],
    tags: ["s2000", "ap1", "ap2", "f20c", "f22c", "roadster"]
  },
  {
    slug: "honda-beat-pp1",
    name: "Honda Beat PP1",
    shortName: "Honda Beat",
    chassisCode: "PP1",
    engineCode: "E07A",
    manufacturer: "Honda",
    country: "Japan",
    years: "1991–1996",
    engine: "0.66L inline-3 (E07A, DOHC MTREC)",
    horsepower: "63 hp (JDM kei-car limit)",
    torque: "45 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~1,675 lbs",
    zeroToSixty: "~12 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door mid-engine roadster convertible",
    overview:
      "One of the last projects personally approved by Soichiro Honda before his death, the Beat is a mid-engine kei-car roadster that proves genuine sports car engineering doesn't require big numbers — just a rev-happy little three-cylinder and a chassis built purely for fun.",
    history:
      "Honda built the Beat to comply with Japan's strict kei-car regulations while still delivering a genuine mid-engine sports car experience, giving it individual throttle bodies for each cylinder — a remarkable feature for a car limited to 63 hp by law.",
    whyFamous:
      "It's celebrated as proof that driving joy doesn't require power, delivering genuine mid-engine sports car dynamics and a screaming 8,100 rpm redline within Japan's strict kei-car size and power limits.",
    strengths: [
      "Genuine mid-engine layout gives real sports car handling balance in a tiny package",
      "Individual throttle bodies for each cylinder is a remarkable feature at this price point",
      "Extremely light weight makes its modest power feel genuinely engaging",
      "Kei-car classification means low taxes and running costs in Japan"
    ],
    weaknesses: [
      "Very low absolute power limits real-world performance and highway usability",
      "Tiny size and lightweight construction feel vulnerable in modern traffic",
      "Never officially exported outside Japan, requiring import in most markets",
      "Soft top and small convertible mechanisms need careful maintenance to stay watertight"
    ],
    commonProblems: [
      "Timing belt service is critical given the small, high-revving engine",
      "Convertible top wear and water leaks on neglected examples",
      "Rust in the small unibody structure on poorly stored cars",
      "Individual throttle body linkage wear affecting engine response"
    ],
    modPotential:
      "Limited by kei-car culture norms — most owners preserve originality or make mild reliability and handling upgrades rather than chasing big power, since forced induction pushes it outside kei-car regulations.",
    buyingGuide:
      "Since it's JDM-only, verify import documentation, inspect the convertible top and small unibody for rust, and check that all three throttle bodies are properly synchronized for smooth running.",
    popularity:
      "A beloved cult classic among kei-car and mid-engine enthusiasts worldwide, cherished specifically for delivering genuine driving joy within extreme regulatory constraints.",
    funFacts: [
      "It was one of the final vehicle projects personally signed off by company founder Soichiro Honda before his death in 1991",
      "Each cylinder gets its own individual throttle body, an exotic-car feature unheard of in the kei-car segment",
      "Its mid-engine layout makes it one of the few genuinely mid-engine kei cars ever mass-produced"
    ],
    tags: ["beat", "pp1", "kei car", "mid-engine", "roadster"]
  },
  {
    slug: "honda-crx-sir-ef8",
    name: "Honda CR-X SiR EF8",
    shortName: "CR-X SiR (EF8)",
    chassisCode: "EF8",
    engineCode: "B16A",
    manufacturer: "Honda",
    country: "Japan",
    years: "1989–1991",
    engine: "1.6L inline-4 (B16A, DOHC VTEC)",
    horsepower: "158–170 hp",
    torque: "111 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "FWD",
    weight: "~2,050 lbs",
    zeroToSixty: "~7.0 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door hatchback",
    overview:
      "The CR-X SiR was one of the very first cars in the world to receive Honda's groundbreaking VTEC variable valve timing system, packaged into a featherweight two-seat hatchback that remains one of the purest expressions of Honda's lightweight performance philosophy.",
    history:
      "Honda used the CR-X as the launch platform for its first-generation VTEC B16A engine, proving the technology's ability to deliver both everyday drivability and a genuine high-rpm power surge, a formula that would define Honda performance cars for the following two decades.",
    whyFamous:
      "As one of the debut VTEC applications, it holds genuine historical significance in Honda's engineering story, while its featherweight two-seat hatchback body makes it an enduring favorite for autocross and lightweight-build enthusiasts.",
    strengths: [
      "One of the earliest production applications of Honda's game-changing VTEC system",
      "Extremely light weight makes its power feel genuinely energetic",
      "Simple, tunable mechanicals with strong B-series aftermarket support",
      "Compact two-seat hatchback body is ideal for autocross and tight circuits"
    ],
    weaknesses: [
      "No rear seats limit everyday practicality",
      "Values have risen as first-gen VTEC and Honda-history significance gained recognition",
      "Many surviving examples have hard autocross or track mileage",
      "Aging plastic trim and interior bits are increasingly hard to source"
    ],
    commonProblems: [
      "VTEC solenoid wear and oil control issues on hard-driven, high-mileage engines",
      "Rust in rear hatch and floor pan areas",
      "Worn motor mounts amplifying vibration over time",
      "Suspension bushing wear on cars used hard for autocross or track days"
    ],
    modPotential:
      "Excellent within the B-series world — being extremely light, it's a favorite base for engine swaps (later B18C/K-series) and lightweight autocross and time-attack builds.",
    buyingGuide:
      "Verify genuine SiR trim and matching-numbers B16A engine, inspect for rust in the rear hatch structure, and check VTEC engagement and motor mount condition on a test drive.",
    popularity:
      "A cult favorite among Honda historians and lightweight-build enthusiasts, valued for its role as a VTEC pioneer and its featherweight, tunable chassis.",
    funFacts: [
      "It was among the first cars anywhere to use Honda's VTEC variable valve timing system in production form",
      "Its two-seat-only layout makes it one of the most weight-conscious hatchbacks Honda ever built",
      "The B16A engine debuted in the CR-X before appearing in later Civics and Integras"
    ],
    tags: ["crx", "cr-x", "sir", "ef8", "b16a", "vtec", "hatchback"]
  },
  {
    slug: "honda-prelude-bb6",
    name: "Honda Prelude BB6",
    shortName: "Prelude (BB6)",
    chassisCode: "BB6",
    engineCode: "H22A",
    manufacturer: "Honda",
    country: "Japan",
    years: "1996–2001",
    engine: "2.2L inline-4 (H22A, DOHC VTEC)",
    horsepower: "197–217 hp",
    torque: "156 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "FWD",
    weight: "~2,900 lbs",
    zeroToSixty: "~6.6 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door coupe",
    overview:
      "The fifth-generation Prelude introduced Honda's Active Torque Transfer System (ATTS), an ingeniously engineered front-differential system that actively distributes torque between the front wheels to fight torque steer and sharpen cornering — years before torque vectoring became a mainstream buzzword.",
    history:
      "Honda used the BB6 Prelude as a technology showcase, pairing the high-revving H22A VTEC engine with the innovative ATTS system, which used planetary gearsets to actively vary torque delivery left-to-right, a genuinely novel solution for taming front-wheel-drive power.",
    whyFamous:
      "Its ATTS torque-vectoring differential was years ahead of its time, offering genuine handling benefits that most FWD performance cars wouldn't match until torque vectoring became common decades later.",
    strengths: [
      "H22A VTEC engine offers strong, high-revving naturally-aspirated performance",
      "ATTS active torque-vectoring differential genuinely improves cornering and reduces torque steer",
      "Distinctive, low, wide styling that still looks sharp today",
      "Strong H-series tuning community support"
    ],
    weaknesses: [
      "ATTS system adds mechanical complexity and repair cost versus a simpler open or LSD differential",
      "FWD ultimately limits outright grip compared to AWD or RWD rivals",
      "Values and enthusiast attention lag behind more famous Honda models like the Integra Type R",
      "Some ATTS units on aging examples need specialist rebuilding"
    ],
    commonProblems: [
      "ATTS differential wear and fluid maintenance needs on higher-mileage cars",
      "VTEC solenoid and timing belt wear typical of H-series engines",
      "Rust in rear arches on humid or salted-road climate examples",
      "Suspension bushing wear affecting the car's handling precision"
    ],
    modPotential:
      "Good — H22A engines respond well to cams, individual throttle bodies, and built internals, and the ATTS differential remains functional and desirable even in modified builds.",
    buyingGuide:
      "Verify ATTS system function during a test drive (listen and feel for smooth torque transfer through corners), check H22A timing belt and VTEC service history, and inspect for rust in typical problem areas.",
    popularity:
      "An underrated enthusiast favorite, respected by Honda purists for its genuinely innovative engineering even though it never reached Integra Type R levels of fame.",
    funFacts: [
      "The ATTS system used a planetary gearset to actively overdrive the outside front wheel in corners, a genuine precursor to modern torque-vectoring differentials",
      "It's one of the few FWD cars of its era engineered specifically to counteract torque steer at a mechanical level rather than through electronics alone",
      "The Prelude nameplate was discontinued in most markets shortly after this generation as coupe sales declined industry-wide"
    ],
    tags: ["prelude", "bb6", "h22a", "atts", "vtec", "coupe"]
  },
  {
    slug: "mazda-rx7-fc",
    name: "Mazda RX-7 FC",
    shortName: "RX-7 (FC)",
    chassisCode: "FC3S",
    engineCode: "13B-T",
    manufacturer: "Mazda",
    country: "Japan",
    years: "1985–1992",
    engine: "1.3L twin-rotor turbo (13B-T)",
    horsepower: "182–205 hp",
    torque: "181–196 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~2,800 lbs",
    zeroToSixty: "~6.7 seconds",
    aspiration: "Turbo",
    bodyStyle: "2-door coupe",
    overview:
      "The second-generation RX-7 refined Mazda's rotary sports-car formula with a genuinely sophisticated chassis, including available four-wheel steering, wrapped around the distinctive high-revving 13B-T twin-rotor engine.",
    history:
      "Mazda positioned the FC as a more grown-up, GT-oriented successor to the original RX-7, competing directly with the Porsche 944 in period reviews, and it earned praise for genuinely sorted, communicative handling.",
    whyFamous:
      "It proved Mazda's rotary engine philosophy could deliver genuinely competitive sports-car dynamics against European rivals, all wrapped in a distinctive engine note found in no other production engine format.",
    strengths: [
      "Rotary 13B-T engine revs smoothly and quickly with a genuinely unique character",
      "Well-sorted, communicative RWD chassis praised against contemporaries like the Porsche 944",
      "Available four-wheel steering on some trims was advanced for its era",
      "Lighter and more agile than many contemporary sports coupes"
    ],
    weaknesses: [
      "Rotary engines require more frequent maintenance and are less tolerant of neglect than piston engines",
      "Oil consumption and apex seal wear are inherent rotary-engine characteristics",
      "Smaller, more specialized parts and service network than piston-engine rivals",
      "Fuel economy is notably worse than a comparable piston engine"
    ],
    commonProblems: [
      "Apex seal wear leading to compression loss if not properly maintained",
      "Flooding issues if the rotary isn't started and driven correctly",
      "Cooling system failures leading to overheating and engine damage",
      "Rust in rear arches and floor pans on humid-climate examples"
    ],
    modPotential:
      "Good within the dedicated rotary tuning community — turbo upgrades, port and apex seal work, and even piston-engine swaps (V8 conversions) are all documented paths, though rotary-specific expertise is essential.",
    buyingGuide:
      "Get a compression test to check apex seal health, verify the rotary has been started and driven correctly (not left idle for long periods), and seek a rotary specialist for pre-purchase inspection.",
    popularity:
      "A respected rotary icon among Mazda purists, often overshadowed by the more famous FD generation but praised by those who know the platform for its sorted chassis.",
    funFacts: [
      "Some FC trims featured Mazda's Dynamic Tracking Suspension System (DTSS), an early four-wheel-steering setup",
      "Automotive journalists of the era frequently compared it directly to the Porsche 944 for chassis sophistication",
      "The rotary engine's smooth, high-revving character comes from having far fewer reciprocating parts than a piston engine"
    ],
    tags: ["rx7", "fc", "fc3s", "13b", "rotary", "turbo"]
  },
  {
    slug: "mazda-rx7-fd",
    name: "Mazda RX-7 FD",
    shortName: "RX-7 (FD)",
    chassisCode: "FD3S",
    engineCode: "13B-REW",
    manufacturer: "Mazda",
    country: "Japan",
    years: "1992–2002",
    engine: "1.3L twin-rotor sequential twin-turbo (13B-REW)",
    horsepower: "255–280 hp",
    torque: "217–231 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~2,800 lbs",
    zeroToSixty: "~5.0 seconds",
    aspiration: "Twin-Turbo",
    bodyStyle: "2-door coupe",
    overview:
      "Widely considered the pinnacle of Mazda's rotary sports-car era, the FD RX-7 pairs stunning, timeless curvaceous styling with a genuinely advanced sequential twin-turbo rotary engine and near-perfect 50/50 weight distribution.",
    history:
      "Mazda engineered the FD with an obsessive focus on weight and balance, using a sequential twin-turbo setup (a small turbo for low-end response, joined by a second for top-end power) that was genuinely cutting-edge technology for a mainstream sports car in 1992.",
    whyFamous:
      "Its combination of gorgeous styling, near-perfect weight balance, and a genuinely unique rotary powerplant makes it one of the most celebrated Japanese sports cars ever built, still cited by enthusiasts as one of the best-handling cars of its generation.",
    strengths: [
      "Sequential twin-turbo 13B-REW delivers strong, progressive power delivery",
      "Near-perfect 50/50 weight distribution and low center of gravity for exceptional handling",
      "Genuinely gorgeous, still-modern styling considered a design classic",
      "Light weight for a turbocharged sports car of its era"
    ],
    weaknesses: [
      "Rotary engine demands more frequent, specialized maintenance than piston rivals",
      "Apex seal wear and oil consumption are inherent to the rotary design",
      "Values have risen dramatically in the last decade, especially for clean, unmodified examples",
      "Sequential turbo system is complex and can be costly to repair if neglected"
    ],
    commonProblems: [
      "Apex seal wear and compression loss if the rotary isn't maintained and driven correctly",
      "Sequential twin-turbo system component failures (actuators, solenoids) with age",
      "Cooling system issues leading to overheating, a serious risk for rotary longevity",
      "Rust in rear arches and rocker panels on humid-climate examples"
    ],
    modPotential:
      "Very strong within the rotary tuning community — single-turbo conversions, built rotary housings, and even LS-swap conversions are all well documented, though rotary-specific tuning expertise remains essential.",
    buyingGuide:
      "Get a thorough compression test and rotary specialist inspection, verify sequential turbo system function, and expect to pay a significant premium for genuinely clean, well-maintained, unmodified examples given skyrocketing demand.",
    popularity:
      "One of the most revered JDM sports cars in the world, with values climbing sharply as collectors and enthusiasts recognize its design and engineering achievement.",
    funFacts: [
      "Its sequential twin-turbo system was one of the most advanced forced-induction setups on any production car when it launched in 1992",
      "The FD's rotary engine displaces only 1.3 liters (or 2.6L by some rotary-equivalent measures) yet produces power on par with much larger piston engines",
      "Car and Driver and other outlets repeatedly praised its steering feel and chassis balance as best-in-class upon release"
    ],
    tags: ["rx7", "fd", "fd3s", "13b-rew", "rotary", "twin turbo"]
  },
  {
    slug: "mazda-mx5-na",
    name: "Mazda MX-5 NA",
    shortName: "MX-5 Miata (NA)",
    chassisCode: "NA",
    engineCode: "B6ZE / BP-ZE",
    manufacturer: "Mazda",
    country: "Japan",
    years: "1989–1997",
    engine: "1.6L–1.8L inline-4 (B6ZE / BP-ZE)",
    horsepower: "116–133 hp",
    torque: "100–110 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~2,200 lbs",
    zeroToSixty: "~8.0 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door roadster convertible",
    overview:
      "The original MX-5 (Miata) single-handedly revived the affordable, lightweight British-style roadster formula that had all but died out by the late 1980s, proving that genuine driving joy comes from balance and simplicity rather than raw power.",
    history:
      "Mazda's engineers studied classic British roadsters like the Lotus Elan for inspiration, then re-engineered the formula with Japanese reliability, creating a car that became the best-selling two-seat sports car in history and effectively resurrected an entire market segment.",
    whyFamous:
      "It's celebrated worldwide as proof that a light, simple, well-balanced car can deliver more genuine driving joy than raw horsepower — a philosophy ('jinba ittai,' or 'horse and rider as one') that still defines every MX-5 generation since.",
    strengths: [
      "Exceptional lightweight balance makes even modest power feel genuinely engaging",
      "Simple, reliable mechanicals with an enormous, mature aftermarket",
      "Widely regarded as one of the most accessible and rewarding sports cars ever built",
      "Extremely affordable to buy and maintain relative to its driving reward"
    ],
    weaknesses: [
      "Modest power by modern standards without modification",
      "Very small size and minimal creature comforts",
      "Convertible top and rag-top mechanisms need periodic maintenance",
      "Clean, rust-free early examples are becoming harder to find"
    ],
    commonProblems: [
      "Rust in rear frame rails and floor pans, especially on cars from salted-road climates",
      "Convertible top wear and water leaks on neglected examples",
      "Clutch and slave cylinder wear on high-mileage cars",
      "Timing belt service is important and interval-sensitive"
    ],
    modPotential:
      "Enormous and famously beginner-friendly — turbo and supercharger kits, coilovers, and full engine swaps are all extremely well documented thanks to one of the largest aftermarket communities of any sports car.",
    buyingGuide:
      "Rust is the single biggest concern — inspect frame rails and floor pans closely, check convertible top condition, and verify clutch and timing belt service history before buying.",
    popularity:
      "The best-selling two-seat convertible sports car in history and a beloved gateway car for enthusiasts worldwide, credited with saving the entire affordable roadster segment.",
    funFacts: [
      "The MX-5 holds the Guinness World Record for the best-selling two-seat sports car of all time",
      "Mazda's design philosophy for the car, 'jinba ittai,' translates roughly to 'horse and rider as one'",
      "Early prototypes were tested against a Lotus Elan and other classic roadsters to calibrate the driving feel Mazda wanted"
    ],
    tags: ["mx5", "miata", "na", "roadster", "jinba ittai"]
  },
  {
    slug: "mazda-cosmo",
    name: "Mazda Cosmo",
    shortName: "Cosmo (Series)",
    chassisCode: "L10A / 110S",
    engineCode: "10A / 13B",
    manufacturer: "Mazda",
    country: "Japan",
    years: "1967–1972 (original series)",
    engine: "1.0L twin-rotor (10A)",
    horsepower: "110 hp",
    torque: "96 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~2,100 lbs",
    zeroToSixty: "~9.0 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door coupe",
    overview:
      "The car that started it all: the original Cosmo was Mazda's first production rotary-engine car and one of the first rotary vehicles sold anywhere, proving the company's commitment to Felix Wankel's then-radical engine design decades before the RX-7 made rotaries famous worldwide.",
    history:
      "Mazda spent years perfecting the rotary engine's notoriously difficult apex-seal wear issues before launching the Cosmo, and its success established the rotary engine as a genuine Mazda signature technology that would define the brand's performance identity for the next 50 years.",
    whyFamous:
      "As Mazda's first rotary production car, it's a genuine piece of automotive engineering history — the foundation stone for everything from the RX-3 and RX-7 to the RX-8 and beyond.",
    strengths: [
      "Historic significance as Mazda's first production rotary car",
      "Smooth, distinctive rotary engine character unlike any piston engine",
      "Elegant, futuristic 1960s styling that remains striking today",
      "Rare and highly collectible for serious classic car enthusiasts"
    ],
    weaknesses: [
      "Extremely rare and expensive to acquire in good condition today",
      "Early rotary engineering solved apex-seal issues that still require careful maintenance",
      "Very limited parts and specialist support given its age and rarity",
      "No modern safety or convenience equipment"
    ],
    commonProblems: [
      "Apex seal and rotor housing wear typical of early rotary engineering",
      "Rust after more than five decades on unrestored examples",
      "Deteriorated wiring and fuel systems from age",
      "Extremely scarce original parts for restoration"
    ],
    modPotential:
      "Minimal — surviving examples are almost universally preserved or restored to original specification given their rarity and historical significance rather than modified for performance.",
    buyingGuide:
      "This is a specialist collector purchase; engage a rotary and classic Mazda expert to verify authenticity, originality, and restoration quality before buying.",
    popularity:
      "Revered by rotary engine historians and serious classic car collectors, though far less widely known than the RX-7 among general enthusiasts.",
    funFacts: [
      "It was one of the first rotary-engine cars sold anywhere in the world, alongside Germany's NSU Ro 80",
      "Mazda's engineers overcame the rotary engine's infamous 'chatter marks' apex-seal wear problem through a material breakthrough shortly before the Cosmo's launch",
      "Its name and futuristic styling reflected the space-race optimism of the late 1960s"
    ],
    tags: ["cosmo", "rotary", "10a", "classic", "mazda history"]
  },
  {
    slug: "mazda-savanna-rx3",
    name: "Mazda Savanna RX-3",
    shortName: "RX-3 (Savanna)",
    chassisCode: "S102A",
    engineCode: "10A / 12A",
    manufacturer: "Mazda",
    country: "Japan",
    years: "1971–1978",
    engine: "1.1L–1.2L twin-rotor (10A/12A)",
    horsepower: "110–130 hp",
    torque: "112 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~2,100 lbs",
    zeroToSixty: "~9.5 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door coupe",
    overview:
      "The RX-3 brought Mazda's rotary technology to a wider, more affordable audience than the Cosmo, and it built genuine motorsport credibility by taking the fight to Nissan's Skyline GT-R on Japanese racetracks in the early 1970s.",
    history:
      "The RX-3 famously ended the Skyline GT-R's 49-race winning streak in Japanese touring car competition, a genuinely historic upset that made the rotary-powered underdog into a motorsport legend of its own.",
    whyFamous:
      "Beating the seemingly unbeatable Hakosuka GT-R on track gave the RX-3 lasting motorsport folklore status, proving Mazda's rotary engine could out-race Japan's most dominant performance car of the era.",
    strengths: [
      "Genuine giant-killer motorsport history against the Skyline GT-R",
      "Light weight and smooth-revving rotary engine character",
      "More affordable and accessible than the rarer Cosmo",
      "Distinctive early-70s styling with a devoted following"
    ],
    weaknesses: [
      "Rust and age-related deterioration are major concerns on 50-year-old examples",
      "Rotary apex-seal wear issues typical of the era's engineering",
      "Limited specialist and parts support compared to the RX-7",
      "No modern safety equipment"
    ],
    commonProblems: [
      "Apex seal wear and compression loss on neglected rotary engines",
      "Rust in floor pans and rear arches after decades of age",
      "Deteriorated wiring and fuel delivery systems",
      "Scarce original parts for full restorations"
    ],
    modPotential:
      "A mature vintage-rotary tuning scene exists, particularly for racing and time-attack tribute builds inspired by its motorsport history, though most well-kept originals are preserved rather than modified.",
    buyingGuide:
      "Prioritize rust-free examples with documented history, verify rotary compression, and consider working with a rotary specialist familiar with early 10A/12A engines before buying.",
    popularity:
      "A cult classic among rotary and vintage Japanese touring-car enthusiasts, celebrated specifically for its underdog racing legacy against the Skyline GT-R.",
    funFacts: [
      "An RX-3 famously ended the Hakosuka GT-R's 49-consecutive-race winning streak in a 1972 Fuji Speedway touring car race",
      "It shares its rotary engine philosophy with the earlier Cosmo but in a more affordable, mass-market body",
      "The RX-3 name is 'Savanna' in the Japanese domestic market, with 'RX-3' used for export models"
    ],
    tags: ["rx3", "savanna", "rotary", "10a", "12a", "classic", "racing"]
  },
  {
    slug: "mazda-familia-gtx",
    name: "Mazda Familia GTX (323 GTX)",
    shortName: "Familia GTX",
    chassisCode: "BF-8W",
    engineCode: "B6T",
    manufacturer: "Mazda",
    country: "Japan",
    years: "1988–1989",
    engine: "1.6L turbo inline-4 (B6T)",
    horsepower: "140–185 hp",
    torque: "134–166 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "AWD",
    weight: "~2,350 lbs",
    zeroToSixty: "~6.5 seconds",
    aspiration: "Turbo",
    bodyStyle: "3-door hatchback",
    overview:
      "Mazda's own Group A rally homologation hot hatch, the Familia GTX (sold in export markets as the 323 GTX) packed a turbocharged engine and full-time AWD into a compact hatchback body to take on the Lancer Evo and Impreza's rally-bred ancestors.",
    history:
      "Built specifically to homologate Mazda's Group A rally program, the GTX combined a turbocharged B6T engine with a genuinely capable AWD system, giving it real competitiveness in period rallying despite less fame than its Toyota and Subaru rivals.",
    whyFamous:
      "It's remembered as an overlooked giant among homologation hot hatches — genuinely rally-capable and mechanically special, but overshadowed in popular memory by the more famous Celica GT-Four and Impreza WRX that followed similar formulas.",
    strengths: [
      "Turbocharged AWD combination gives strong all-weather, all-condition performance",
      "Genuine Group A rally homologation pedigree",
      "Compact size and light weight make it agile on tight roads",
      "Increasingly appreciated by enthusiasts as an underrated rally-homologation classic"
    ],
    weaknesses: [
      "Far less internationally famous than its Celica GT-Four and Impreza WRX contemporaries",
      "Rare and increasingly hard to find in unmodified condition",
      "Complex AWD and turbo systems raise maintenance costs and complexity",
      "Limited parts and specialist support outside dedicated enthusiast circles"
    ],
    commonProblems: [
      "Turbo and boost control wear typical of aging forced-induction systems",
      "AWD center differential and transfer case wear if maintenance is neglected",
      "Rust in rear arches and floor pans on humid-climate examples",
      "Scarce replacement parts given low surviving numbers"
    ],
    modPotential:
      "Solid within a dedicated niche community — turbo and fuel system upgrades are documented, though the aftermarket is smaller than for more famous AWD rally homologation rivals.",
    buyingGuide:
      "Given its rarity, verify AWD and turbo system health carefully, seek documented history, and expect to search internationally since surviving unmodified examples are scarce.",
    popularity:
      "A cult favorite among rally homologation and AWD hot-hatch collectors, though it remains a niche pick relative to more famous rivals from Toyota, Subaru, and Mitsubishi.",
    funFacts: [
      "It was Mazda's answer to the Group A rally homologation wars fought by Toyota, Subaru, and Lancia in the late 1980s",
      "Export markets knew it as the 323 GTX, while Japan used the Familia GTX name",
      "Its AWD/turbo formula predates and directly parallels the more famous Impreza WRX that arrived a few years later"
    ],
    tags: ["familia", "gtx", "323 gtx", "b6t", "awd", "rally", "hot hatch"]
  },
  {
    slug: "mitsubishi-evo-1",
    name: "Mitsubishi Lancer Evolution I",
    shortName: "Evo I",
    chassisCode: "CD9A",
    engineCode: "4G63T",
    manufacturer: "Mitsubishi",
    country: "Japan",
    years: "1992–1994",
    engine: "2.0L turbo inline-4 (4G63T)",
    horsepower: "244 hp",
    torque: "228 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "AWD",
    weight: "~2,600 lbs",
    zeroToSixty: "~5.0 seconds",
    aspiration: "Turbo",
    bodyStyle: "4-door sedan",
    overview:
      "The original Lancer Evolution took an ordinary compact sedan and stuffed in a serious turbocharged AWD rally weapon, kicking off a nameplate that would spend the next two decades trading blows with Subaru's WRX STI for World Rally Championship glory.",
    history:
      "Mitsubishi built the Evo I purely to homologate its Group A rally program, and its combination of a boosty 4G63T engine and genuinely sophisticated AWD system made it instantly competitive on rally stages worldwide.",
    whyFamous:
      "It's the genesis point for one of the most storied rally-bred nameplates in automotive history, launching the legendary 4G63T engine platform that would define Evo performance for over a decade.",
    strengths: [
      "4G63T engine platform is famously tough and hugely tunable",
      "Genuinely sophisticated AWD system for its era gives excellent all-condition grip",
      "Historic significance as the first Evo, launching a legendary nameplate",
      "Light weight compared to later, more heavily equipped Evo generations"
    ],
    weaknesses: [
      "Never sold outside Japan, so all examples elsewhere are grey-market imports",
      "Basic interior and equipment level reflect its econobox sedan origins",
      "Values have risen as first-generation Evo collector interest grows",
      "Less refined than later Evo generations in outright chassis sophistication"
    ],
    commonProblems: [
      "4G63T turbo and head gasket wear typical of the platform, especially if tuned aggressively",
      "AWD center differential and transfer case wear if maintenance is neglected",
      "Rust in rear arches and floor pans on humid-climate examples",
      "Aging wiring and vacuum lines affecting turbo control"
    ],
    modPotential:
      "Enormous — the 4G63T is one of the most proven tunable engines in JDM history, reliably supporting big turbo upgrades and built internals well beyond 400–500 whp with the right supporting mods.",
    buyingGuide:
      "Since it's JDM-only, verify genuine import documentation, check 4G63T head gasket and turbo condition, and confirm the AWD system engages and operates smoothly on a test drive.",
    popularity:
      "Respected by Evo historians and 4G63T enthusiasts as the genesis of a legendary nameplate, even though later Evos (V, VI, IX) get more mainstream attention.",
    funFacts: [
      "The Evo I introduced the 4G63T engine platform that would remain in use, continually refined, through the Evo IX",
      "It was built purely to satisfy Group A rally homologation requirements, with no plans for export sales",
      "Mitsubishi built the Evo I in far smaller numbers than later, more famous Evo generations"
    ],
    tags: ["evo", "evo1", "cd9a", "4g63", "lancer evolution", "rally"]
  },
  {
    slug: "mitsubishi-evo-3",
    name: "Mitsubishi Lancer Evolution III",
    shortName: "Evo III",
    chassisCode: "CE9A",
    engineCode: "4G63T",
    manufacturer: "Mitsubishi",
    country: "Japan",
    years: "1995–1996",
    engine: "2.0L turbo inline-4 (4G63T)",
    horsepower: "266–270 hp",
    torque: "260 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "AWD",
    weight: "~2,700 lbs",
    zeroToSixty: "~4.9 seconds",
    aspiration: "Turbo",
    bodyStyle: "4-door sedan",
    overview:
      "The Evo III sharpened the formula with genuine aerodynamic addenda (a larger front bumper intake and rear wing) developed from Mitsubishi's rally program, and a revised 4G63T that pushed power notably higher than the original Evo I/II.",
    history:
      "Continuing Mitsubishi's rapid homologation development cycle, the Evo III's aero improvements and engine revisions were directly informed by lessons learned in World Rally Championship competition, reflecting the intense pace of the early-90s Group A rally arms race.",
    whyFamous:
      "It represents the aggressive early evolution of the Evo formula, with functional rally-derived aero and rising power figures that set the template for the increasingly serious Evo generations that followed.",
    strengths: [
      "Increased power over Evo I/II from a revised 4G63T turbo setup",
      "Functional rally-derived aero improves high-speed stability",
      "Same tough, hugely tunable 4G63T engine platform",
      "Sharper, more aggressive styling than the earlier Evo generations"
    ],
    weaknesses: [
      "Never sold outside Japan, requiring import for most global buyers",
      "Rare compared to more famous later Evo generations",
      "Same aging turbo and vacuum system concerns as other 4G63T cars",
      "Basic interior reflecting its rally-homologation-focused mission"
    ],
    commonProblems: [
      "4G63T turbo and head gasket wear, especially on tuned examples",
      "AWD system wear if maintenance is neglected",
      "Rust in typical mid-90s Japanese sedan problem areas",
      "Scarce genuine parts given low original production numbers"
    ],
    modPotential:
      "Excellent — shares the 4G63T's well-proven tuning path with the rest of the early Evo lineage, supporting big turbo and built-engine upgrades reliably.",
    buyingGuide:
      "Verify genuine import documentation, confirm aero and body panels are original or correctly reproduced, and check 4G63T turbo and head gasket condition before buying.",
    popularity:
      "A respected but relatively niche pick among early Evo collectors, often overshadowed by the more globally famous Evo V, VI, and IX.",
    funFacts: [
      "Its aerodynamic revisions were directly informed by Mitsubishi's active World Rally Championship program",
      "Power climbed notably over the Evo I/II thanks to a revised turbo and intercooler setup",
      "It remains one of the rarer Evo generations, having a shorter production run than its successors"
    ],
    tags: ["evo", "evo3", "ce9a", "4g63", "lancer evolution", "rally"]
  },
  {
    slug: "mitsubishi-evo-5",
    name: "Mitsubishi Lancer Evolution V",
    shortName: "Evo V",
    chassisCode: "CP9A",
    engineCode: "4G63T",
    manufacturer: "Mitsubishi",
    country: "Japan",
    years: "1998",
    engine: "2.0L turbo inline-4 (4G63T)",
    horsepower: "276 hp (JDM rating)",
    torque: "275 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "AWD",
    weight: "~2,900 lbs",
    zeroToSixty: "~4.6 seconds",
    aspiration: "Turbo",
    bodyStyle: "4-door sedan",
    overview:
      "Wider, more aggressive, and genuinely track-focused, the Evo V introduced a wider track and Mitsubishi's Active Yaw Control (AYC) rear differential, a genuine torque-vectoring system that dramatically sharpened the car's cornering ability.",
    history:
      "Built during the height of Mitsubishi's WRC rivalry with Subaru, the Evo V's wider body and AYC differential reflected genuine racing-derived engineering aimed squarely at maximizing rally and road-going cornering performance.",
    whyFamous:
      "Its Active Yaw Control system was a genuine engineering leap for the era, giving the Evo a level of corner-exit traction and rotation that rivals struggled to match, cementing the Evo's reputation as an AWD handling benchmark.",
    strengths: [
      "Active Yaw Control rear differential gives genuinely exceptional cornering and rotation",
      "Wider track and stiffer chassis improve high-speed stability",
      "Strong, well-proven 4G63T engine with huge tuning potential",
      "Considered one of the best-handling Evo generations by many enthusiasts"
    ],
    weaknesses: [
      "AYC system adds mechanical complexity and repair cost versus a simpler differential",
      "Never sold outside Japan, so import documentation and sourcing require extra care",
      "Same aging 4G63T turbo and vacuum system concerns as other Evo generations",
      "Values have risen as AYC-equipped Evos gained collector recognition"
    ],
    commonProblems: [
      "AYC pump and differential wear if fluid maintenance is neglected",
      "4G63T turbo and head gasket wear, especially on tuned examples",
      "Rust in typical late-90s Japanese sedan problem areas",
      "Aging wiring affecting AYC and turbo control systems"
    ],
    modPotential:
      "Excellent — shares the proven 4G63T tuning path, and the AYC differential remains a desirable, functional feature even in heavily modified track builds.",
    buyingGuide:
      "Verify AYC system function during a test drive, check 4G63T turbo and head gasket condition, and confirm genuine import documentation since it's JDM-only.",
    popularity:
      "Highly regarded among Evo enthusiasts specifically for its AYC-enhanced handling, considered by many as a sweet spot in the lineage's evolution.",
    funFacts: [
      "The Active Yaw Control system used hydraulics to actively transfer torque side-to-side at the rear axle, a genuine precursor to modern torque-vectoring differentials",
      "Its wider bodywork gave it a notably more aggressive stance than the Evo III and IV that preceded it",
      "Tommi Mäkinen's WRC-winning Evos of this era used closely related mechanical concepts to the road-going Evo V"
    ],
    tags: ["evo", "evo5", "cp9a", "4g63", "ayc", "lancer evolution", "rally"]
  },
  {
    slug: "mitsubishi-evo-6",
    name: "Mitsubishi Lancer Evolution VI",
    shortName: "Evo VI",
    chassisCode: "CP9A",
    engineCode: "4G63T",
    manufacturer: "Mitsubishi",
    country: "Japan",
    years: "1999–2001",
    engine: "2.0L turbo inline-4 (4G63T)",
    horsepower: "276 hp (JDM rating)",
    torque: "275 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "AWD",
    weight: "~2,900 lbs",
    zeroToSixty: "~4.4 seconds",
    aspiration: "Turbo",
    bodyStyle: "4-door sedan",
    overview:
      "Refined specifically to help Tommi Mäkinen chase World Rally Championship titles, the Evo VI added improved cooling, a stronger drivetrain, and a limited Tommi Mäkinen Edition that remains one of the most desirable Evos ever built.",
    history:
      "Named in tribute to Mitsubishi's four-time WRC champion, the Evo VI's engineering improvements over the Evo V focused on cooling and durability under sustained rally abuse, and the special Tommi Mäkinen Edition added unique aero and suspension tuning that enthusiasts prize to this day.",
    whyFamous:
      "Tommi Mäkinen's WRC championship success directly inspired the special edition bearing his name, making the Evo VI TME one of the most historically significant and sought-after Evo variants ever produced.",
    strengths: [
      "Improved cooling and drivetrain durability over the Evo V",
      "Tommi Mäkinen Edition adds unique suspension and aero developed from real WRC feedback",
      "Same proven 4G63T engine with an enormous tuning ceiling",
      "Genuine motorsport pedigree tied directly to a WRC championship-winning driver"
    ],
    weaknesses: [
      "Values for genuine Tommi Mäkinen Editions have risen sharply given their rarity",
      "Never sold outside Japan, requiring import for most global buyers",
      "Same aging turbo and vacuum system concerns as other 4G63T Evos",
      "Standard (non-TME) trims are less collectible than the special edition"
    ],
    commonProblems: [
      "4G63T turbo and head gasket wear, especially on tuned examples",
      "AWD system wear if maintenance is neglected",
      "Rust in typical late-90s/early-2000s Japanese sedan problem areas",
      "Verifying genuine Tommi Mäkinen Edition equipment versus cosmetic clones"
    ],
    modPotential:
      "Excellent — shares the well-proven 4G63T tuning path with the rest of the Evo lineage, reliably supporting significant power increases with the right supporting modifications.",
    buyingGuide:
      "Verify genuine Tommi Mäkinen Edition documentation if buying that variant since it commands a significant premium, and check 4G63T turbo and head gasket condition regardless of trim.",
    popularity:
      "Extremely popular among Evo collectors, with the Tommi Mäkinen Edition regarded as one of the most desirable Evo variants of the entire nameplate's history.",
    funFacts: [
      "The Tommi Mäkinen Edition was named after Mitsubishi's four-time consecutive WRC Drivers' Champion",
      "It featured a unique front bumper with improved cooling, specifically requested based on Mäkinen's rally car feedback",
      "The TME also included a quicker-ratio steering rack and a numbered dashboard plaque for each example built"
    ],
    tags: ["evo", "evo6", "tommi makinen", "cp9a", "4g63", "lancer evolution", "rally"]
  },
  {
    slug: "mitsubishi-evo-9",
    name: "Mitsubishi Lancer Evolution IX",
    shortName: "Evo IX",
    chassisCode: "CT9A",
    engineCode: "4G63T (MIVEC)",
    manufacturer: "Mitsubishi",
    country: "Japan",
    years: "2005–2007",
    engine: "2.0L turbo inline-4 (4G63T with MIVEC)",
    horsepower: "286–291 hp",
    torque: "289 lb-ft",
    transmission: "5-speed manual / 6-speed manual (MR)",
    drivetrain: "AWD",
    weight: "~3,200 lbs",
    zeroToSixty: "~4.4 seconds",
    aspiration: "Turbo",
    bodyStyle: "4-door sedan",
    overview:
      "The final and most refined evolution of the venerable 4G63T-powered Evo lineage, the Evo IX added Mitsubishi's MIVEC variable valve timing to the aging engine architecture, squeezing out more power and broader torque before the nameplate moved to an all-new engine for the Evo X.",
    history:
      "By 2005 the 4G63T had been in continuous production and refinement since the original Evo I, and the Evo IX represents its final, most sophisticated form before Mitsubishi retired the engine in favor of the Evo X's new 4B11T powerplant.",
    whyFamous:
      "It's celebrated as the swan song of the legendary 4G63T engine — the most refined version of an engine platform with over a decade of continuous racing and tuning development behind it.",
    strengths: [
      "MIVEC variable valve timing broadens the powerband versus earlier 4G63T Evos",
      "Represents the most refined, sorted version of the entire 4G63T Evo lineage",
      "Huge, mature aftermarket support built up over more than a decade of 4G63T tuning",
      "Available MR trim adds a six-speed gearbox and sharper suspension tuning"
    ],
    weaknesses: [
      "Never sold new in North America, requiring import in that market",
      "Heavier than earlier Evo generations, slightly dulling outright agility",
      "Values have risen as it's recognized as the final and most desirable 4G63T Evo",
      "Same fundamental turbo and head gasket wear concerns as other 4G63T Evos"
    ],
    commonProblems: [
      "4G63T turbo and head gasket wear, especially on aggressively tuned examples",
      "MIVEC solenoid wear affecting variable valve timing function",
      "AWD system and AYC differential wear if maintenance is neglected",
      "Rust in typical mid-2000s Japanese sedan problem areas"
    ],
    modPotential:
      "About as strong as it gets for the 4G63T platform — over a decade of aftermarket development means big turbo kits, built engines, and drivetrain upgrades are all extremely well documented and proven.",
    buyingGuide:
      "Verify MIVEC and turbo system health, check whether it's the standard trim or the sharper MR variant, and confirm import documentation if buying outside Japan.",
    popularity:
      "Beloved by Evo and 4G63T purists as the definitive, final version of the platform, with values reflecting its status as the end of an era before the Evo X's new engine.",
    funFacts: [
      "The Evo IX was the last Evo to use the 4G63T engine, ending a lineage that began with the original 1992 Evo I",
      "MIVEC (Mitsubishi Innovative Valve timing Electronic Control) improved both low-end torque and high-rpm power over earlier non-MIVEC Evos",
      "It's frequently cited by tuners as the most track-ready, well-rounded 4G63T Evo ever produced"
    ],
    tags: ["evo", "evo9", "ct9a", "4g63", "mivec", "lancer evolution", "rally"]
  },
  {
    slug: "mitsubishi-evo-10",
    name: "Mitsubishi Lancer Evolution X",
    shortName: "Evo X",
    chassisCode: "CZ4A",
    engineCode: "4B11T",
    manufacturer: "Mitsubishi",
    country: "Japan",
    years: "2007–2016",
    engine: "2.0L turbo inline-4 (4B11T)",
    horsepower: "291–303 hp",
    torque: "300–305 lb-ft",
    transmission: "5-speed manual / 6-speed dual-clutch (SST)",
    drivetrain: "AWD",
    weight: "~3,500 lbs",
    zeroToSixty: "~4.4 seconds",
    aspiration: "Turbo",
    bodyStyle: "4-door sedan",
    overview:
      "A clean-sheet redesign, the Evo X replaced the venerable 4G63T with an all-new aluminum 4B11T engine and introduced Mitsubishi's Super All-Wheel Control (S-AWC) system alongside an available dual-clutch automatic, modernizing the Evo formula for a new generation.",
    history:
      "Mitsubishi built the Evo X on an entirely new platform shared with the Lancer/Galant, giving it a lighter aluminum engine block and a genuinely sophisticated electronically-controlled AWD system that integrated stability control, active center differential, and yaw control into one unified system.",
    whyFamous:
      "It brought the Evo formula fully into the modern era with a dual-clutch gearbox option and an advanced electronically-managed AWD system, while remaining a genuine rally-bred performance sedan at heart, officially sold new in the US for the first time.",
    strengths: [
      "S-AWC electronically-integrated AWD system delivers excellent, adaptable all-condition grip",
      "All-new aluminum 4B11T engine is lighter than the outgoing 4G63T",
      "Optional dual-clutch SST transmission offers genuinely quick, smooth shifts",
      "Officially sold new in the US, unlike most earlier Evo generations"
    ],
    weaknesses: [
      "Heavier than earlier Evo generations, somewhat dulling the raw, tossable feel purists loved",
      "4B11T lacks the decade-plus of proven tuning history the 4G63T had built up",
      "Final generation of the Evo nameplate before Mitsubishi discontinued it entirely",
      "Complex electronic AWD/stability systems raise repair complexity and cost"
    ],
    commonProblems: [
      "SST dual-clutch transmission wear if not properly maintained or driven within its limits",
      "Turbo and cooling system wear on aggressively tuned examples",
      "S-AWC electronic system faults as sensors and wiring age",
      "Rust in typical mid-2000s-to-2010s sedan problem areas"
    ],
    modPotential:
      "Strong and steadily maturing — the 4B11T responds well to turbo and fuel system upgrades, and the aftermarket has caught up significantly since the engine's debut, though it remains slightly behind the ultra-mature 4G63T scene.",
    buyingGuide:
      "Since it was sold new in the US, buying is more straightforward than earlier Evos — verify SST transmission service history if equipped, and check turbo and S-AWC system function on a test drive.",
    popularity:
      "Widely respected as the final chapter of the Evo story, and its US-market official sale means clean, well-documented examples are relatively easy to find compared to JDM-only predecessors.",
    funFacts: [
      "The Evo X was the final generation of the Lancer Evolution before Mitsubishi discontinued the nameplate in 2016",
      "It was the first Evo generation sold new in the United States alongside Japan",
      "The S-AWC system integrated the AYC rear differential, active center differential, and stability control into one unified computer-managed system"
    ],
    tags: ["evo", "evo10", "evox", "cz4a", "4b11t", "s-awc", "lancer evolution"]
  },
  {
    slug: "mitsubishi-gto-3000gt",
    name: "Mitsubishi GTO / 3000GT",
    shortName: "GTO (3000GT)",
    chassisCode: "Z16A",
    engineCode: "6G72 Twin-Turbo",
    manufacturer: "Mitsubishi",
    country: "Japan",
    years: "1990–2000",
    engine: "3.0L twin-turbo V6 (6G72)",
    horsepower: "276–320 hp",
    torque: "315 lb-ft",
    transmission: "5-speed manual / 4-speed automatic",
    drivetrain: "AWD",
    weight: "~3,800 lbs",
    zeroToSixty: "~5.3 seconds",
    aspiration: "Twin-Turbo",
    bodyStyle: "2-door coupe/targa",
    overview:
      "Sold internationally as the 3000GT (or GTO in Japan), Mitsubishi's technology-flagship coupe packed nearly every gadget the early 90s could offer — twin turbos, AWD, four-wheel steering, active aero, and an electronically adjustable exhaust — into one genuinely ambitious grand tourer.",
    history:
      "Mitsubishi built the GTO/3000GT to showcase the company's engineering capability at the height of Japan's bubble-economy performance car boom, packing in nearly every advanced feature available at the time in a bid to out-tech rivals like the Supra and 300ZX.",
    whyFamous:
      "It's remembered as one of the most technologically loaded Japanese cars of its era — a genuine 'kitchen sink' approach to engineering flagship status that still impresses for its ambition even if some systems added complexity without matching driving reward.",
    strengths: [
      "Twin-turbo AWD V6 delivers strong, genuinely fast all-weather performance",
      "Extensive standard technology (active aero, four-wheel steering, adjustable suspension) unmatched by many rivals",
      "Distinctive, aggressive early-90s wedge styling",
      "Strong parts-sharing with the Dodge Stealth, its badge-engineered American sibling"
    ],
    weaknesses: [
      "Heavy for its class, blunting some of its performance and agility",
      "Extremely complex systems make maintenance and repairs costly and involved",
      "Values and enthusiast attention lag behind the Supra and Skyline",
      "Aging electronics for its many advanced features can be failure-prone"
    ],
    commonProblems: [
      "Timing belt service is critical and labor-intensive on the tightly packaged V6",
      "Active aero and four-wheel steering system faults as electronics age",
      "AWD transfer case and differential wear if maintenance is neglected",
      "Vacuum and boost control line degradation affecting twin-turbo performance"
    ],
    modPotential:
      "Moderate — the 6G72 twin-turbo responds to boost and fuel system upgrades, though the tuning community is smaller and less mature than for the Supra's 2JZ or Skyline's RB26.",
    buyingGuide:
      "Verify timing belt and active-system service history given the car's mechanical complexity, and budget for specialist labor costs on future maintenance given how tightly packaged the engine bay is.",
    popularity:
      "An underappreciated technology icon of the JDM bubble era, respected by a smaller but devoted enthusiast community who admire its engineering ambition.",
    funFacts: [
      "It was sold in North America both as the Mitsubishi 3000GT and the near-identical Dodge Stealth",
      "Its active aero system included a rear wing that automatically adjusted based on speed",
      "Some trims featured an electronically switchable exhaust system that altered the car's exhaust note on demand"
    ],
    tags: ["gto", "3000gt", "stealth", "6g72", "twin turbo", "awd"]
  },
  {
    slug: "subaru-impreza-wrx-sti-gc8",
    name: "Subaru Impreza WRX STI GC8",
    shortName: "GC8 STI",
    chassisCode: "GC8",
    engineCode: "EJ20",
    manufacturer: "Subaru",
    country: "Japan",
    years: "1994–2000",
    engine: "2.0L turbo flat-4 (EJ20)",
    horsepower: "247–276 hp",
    torque: "224–253 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "AWD",
    weight: "~2,750 lbs",
    zeroToSixty: "~4.7 seconds",
    aspiration: "Turbo",
    bodyStyle: "4-door sedan / wagon",
    overview:
      "The car that launched Subaru's WRC-winning rally dynasty and the boxer-engine/AWD formula the brand is still known for today, the GC8 STI is a compact, turbocharged sedan that punched dramatically above its weight on rally stages and mountain roads alike.",
    history:
      "Built to homologate Subaru's World Rally Championship program and take on Mitsubishi's Lancer Evo head-on, the GC8 STI's flat-four turbo engine and symmetrical AWD system helped Subaru claim multiple WRC manufacturers' titles through drivers like Colin McRae.",
    whyFamous:
      "Colin McRae's spectacular, aggressive WRC driving style aboard closely related Imprezas made the car a global rally icon, and the road-going STI's genuine motorsport DNA built a devoted enthusiast following that continues today.",
    strengths: [
      "Distinctive boxer-engine flat-four character with a genuinely unique exhaust note",
      "Symmetrical AWD system gives excellent, confidence-inspiring all-condition grip",
      "Direct WRC homologation pedigree tied to Colin McRae-era rally glory",
      "Strong, well-established global aftermarket and tuning community"
    ],
    weaknesses: [
      "Head gasket issues are a well-known weak point on the EJ20/EJ25 boxer engine family",
      "Interior and build quality feel basic for the era",
      "Values have risen as early STI collector interest grows",
      "JDM-only in this form, so import documentation and sourcing require extra care in some markets"
    ],
    commonProblems: [
      "Head gasket failures are a widely documented EJ-series boxer engine weak point",
      "Turbo wear and boost control issues typical of aging forced-induction systems",
      "Rust in rear arches and floor pans on humid or salted-road climate cars",
      "AWD center differential and transfer case wear if maintenance is neglected"
    ],
    modPotential:
      "Excellent — the EJ20 platform has a huge, mature global tuning community, supporting big turbo upgrades, built engines, and drivetrain reinforcement well documented from decades of rally and street tuning.",
    buyingGuide:
      "Verify head gasket service and repair history closely given the EJ engine's well-known weak point, check AWD system function, and confirm genuine STI equipment versus a standard WRX dressed up cosmetically.",
    popularity:
      "A beloved rally-bred icon with a massive, devoted global fanbase, especially among enthusiasts who followed Subaru's WRC campaigns in the 1990s.",
    funFacts: [
      "Colin McRae's WRC-winning Subaru Imprezas of this era share core mechanical DNA with the road-going GC8 STI",
      "The STI (Subaru Tecnica International) badge denotes Subaru's in-house motorsport and tuning division",
      "Subaru's symmetrical AWD layout, mounting the engine and drivetrain components in a mirrored configuration, remains a brand hallmark to this day"
    ],
    tags: ["impreza", "wrx", "sti", "gc8", "ej20", "boxer", "rally", "wrc"]
  },
  {
    slug: "subaru-impreza-wrx-sti-gdb",
    name: "Subaru Impreza WRX STI GDB",
    shortName: "GDB STI",
    chassisCode: "GDB",
    engineCode: "EJ207",
    manufacturer: "Subaru",
    country: "Japan",
    years: "2000–2007",
    engine: "2.0L turbo flat-4 (EJ207)",
    horsepower: "276–316 hp (JDM rating varies by year)",
    torque: "260–318 lb-ft",
    transmission: "6-speed manual",
    drivetrain: "AWD",
    weight: "~3,100 lbs",
    zeroToSixty: "~4.6 seconds",
    aspiration: "Turbo",
    bodyStyle: "4-door sedan",
    overview:
      "The 'bug-eye' and 'blob-eye' generation of Impreza STI refined the GC8's rally-bred formula with a stronger six-speed gearbox and a driver-controlled center differential, arriving during the peak years of Subaru's fierce WRC rivalry with Mitsubishi.",
    history:
      "Launched with a distinctive round-headlight face nicknamed 'bug-eye' by fans, the GDB STI continued Subaru's rally-derived engineering approach, adding a Driver Controlled Center Differential (DCCD) that let drivers manually adjust AWD torque split for changing conditions.",
    whyFamous:
      "It arrived during the most intense years of the Subaru-vs-Mitsubishi WRC rivalry, and its distinctive styling and rally-honed engineering made it one of the most recognizable and beloved Subarus ever built.",
    strengths: [
      "Driver Controlled Center Differential allows genuine on-the-fly AWD torque adjustment",
      "Stronger six-speed manual gearbox than the earlier GC8's five-speed",
      "Distinctive, instantly recognizable 'bug-eye' styling with cult status",
      "Same well-proven EJ-series boxer engine tuning ecosystem as the GC8"
    ],
    weaknesses: [
      "Head gasket issues remain a known weak point on the EJ-series boxer engine",
      "Distinctive styling is polarizing — some enthusiasts prefer later, more conventional facelifts",
      "Values have risen as 2000s STI collector interest grows",
      "JDM-only in early forms, requiring import in markets where it wasn't sold new"
    ],
    commonProblems: [
      "Head gasket failures typical of the EJ-series boxer engine family",
      "Turbo and boost control wear on aggressively tuned examples",
      "DCCD system wear or faults if not properly maintained",
      "Rust in typical early-2000s Japanese sedan problem areas"
    ],
    modPotential:
      "Excellent — shares the EJ-series platform's mature, well-documented tuning path, supporting big turbo upgrades and built engines with strong aftermarket parts availability worldwide.",
    buyingGuide:
      "Verify head gasket service history, check DCCD system function, and confirm genuine STI equipment and documentation, especially for early JDM-only 'bug-eye' examples imported into other markets.",
    popularity:
      "Extremely popular among Subaru and rally enthusiasts, with the 'bug-eye' front end achieving genuine cult status despite its polarizing looks at launch.",
    funFacts: [
      "The 'bug-eye' nickname comes from its distinctive round headlight design used only in the earliest GDB model years",
      "The Driver Controlled Center Differential (DCCD) let drivers manually bias AWD torque split from inside the cabin, a genuine rally-derived feature",
      "This generation coincided with Subaru's fiercest WRC rivalry years against Mitsubishi's Lancer Evo"
    ],
    tags: ["impreza", "wrx", "sti", "gdb", "ej207", "bug eye", "dccd", "wrc"]
  },
  {
    slug: "subaru-svx",
    name: "Subaru SVX",
    shortName: "SVX",
    chassisCode: "CX",
    engineCode: "EG33",
    manufacturer: "Subaru",
    country: "Japan",
    years: "1991–1996",
    engine: "3.3L flat-6 (EG33)",
    horsepower: "230 hp",
    torque: "228 lb-ft",
    transmission: "4-speed automatic",
    drivetrain: "AWD",
    weight: "~3,600 lbs",
    zeroToSixty: "~7.3 seconds",
    aspiration: "Naturally Aspirated",
    bodyStyle: "2-door coupe",
    overview:
      "A genuinely daring design exercise penned by Giorgetto Giugiaro, the SVX paired a smooth flat-six engine with distinctive 'window-in-window' glass doors, positioning Subaru — usually known for rally-bred turbo boxers — as a maker of quiet, technologically ambitious grand tourers.",
    history:
      "Subaru built the SVX as a genuine flagship halo car to prove the brand could compete beyond its rally-bred reputation, commissioning famed Italian designer Giorgetto Giugiaro to pen its unmistakable glass-in-glass door design, though its high price and automatic-only transmission limited sales.",
    whyFamous:
      "Its unique partial-glass door design and smooth, refined flat-six engine made it one of the most distinctive-looking Japanese GT cars of the early 90s, even though its automatic-only gearbox kept it from enthusiast-darling status.",
    strengths: [
      "Genuinely distinctive Giugiaro-designed styling with unique glass-in-glass doors",
      "Smooth, refined flat-six engine offers a genuinely different character from Subaru's usual turbo boxers",
      "Standard AWD gives confident all-weather grip for a grand tourer",
      "Increasingly appreciated as an underrated 90s design icon"
    ],
    weaknesses: [
      "Automatic-only transmission disappoints enthusiasts seeking a manual grand tourer",
      "Heavier and less agile than sportier Subaru siblings like the WRX",
      "Complex glass door mechanisms can be costly to repair if damaged",
      "Sold in relatively low numbers, making parts sourcing harder today"
    ],
    commonProblems: [
      "Aging automatic transmission wear on high-mileage examples",
      "Glass door seal and mechanism wear leading to leaks or rattles",
      "Cooling system issues typical of the EG33 flat-six",
      "Electrical gremlins from decades-old wiring and power accessories"
    ],
    modPotential:
      "Limited — with no manual transmission option and a smaller enthusiast community than Subaru's turbo models, most SVXs are preserved or lightly refreshed rather than heavily modified.",
    buyingGuide:
      "Verify transmission condition carefully given its automatic-only nature, inspect glass door seals and mechanisms for wear, and expect a smaller parts-sourcing network than for more common Subaru models.",
    popularity:
      "A cult design icon among Subaru enthusiasts and 90s Japanese car aficionados, appreciated more for its striking looks and engineering ambition than outright performance.",
    funFacts: [
      "Its distinctive door design features a smaller window within the larger door glass, a feature Giugiaro also explored on other concept designs",
      "It was Subaru's most expensive and technologically ambitious model at the time of its launch",
      "The EG33 flat-six was the largest-displacement engine Subaru had built up to that point"
    ],
    tags: ["svx", "subaru svx", "eg33", "flat six", "giugiaro", "gt coupe"]
  },
  {
    slug: "suzuki-cappuccino",
    name: "Suzuki Cappuccino",
    shortName: "Cappuccino",
    chassisCode: "EA11R",
    engineCode: "F6A",
    manufacturer: "Suzuki",
    country: "Japan",
    years: "1991–1997",
    engine: "0.66L turbo inline-3 (F6A)",
    horsepower: "63 hp (JDM kei-car limit)",
    torque: "68 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~1,590 lbs",
    zeroToSixty: "~8.9 seconds",
    aspiration: "Turbo",
    bodyStyle: "2-door roadster convertible (targa/T-top)",
    overview:
      "A featherweight, front-mid-engine kei roadster with a removable targa roof, hardtop, and full convertible modes all in one car, the Cappuccino packed genuine sports-car engineering — including a front-mid-engine layout and near-perfect weight balance — into Japan's strict kei-car regulations.",
    history:
      "Suzuki engineered the Cappuccino with aluminum body panels and a front-mid-engine RWD layout specifically to deliver genuine sports car dynamics within kei-car size and power limits, giving it a surprisingly serious engineering pedigree for such a small, affordable car.",
    whyFamous:
      "Its clever, versatile roof system (removable targa panels, folding hardtop, and full convertible configurations) combined with genuinely sporty rear-wheel-drive dynamics made it a cult favorite among kei-car and lightweight sports car enthusiasts worldwide.",
    strengths: [
      "Front-mid-engine RWD layout gives genuine sports-car handling balance in a tiny package",
      "Extremely versatile removable roof system offers targa, hardtop, and full convertible modes",
      "Turbocharged engine makes the most of kei-car power limits",
      "Aluminum body panels keep weight remarkably low"
    ],
    weaknesses: [
      "Very low absolute power limits real-world performance, especially at highway speeds",
      "Tiny size feels vulnerable in modern traffic conditions",
      "Never officially exported outside Japan, requiring import in most markets",
      "Removable roof panels need careful storage and sealing to avoid leaks"
    ],
    commonProblems: [
      "Turbo wear and boost control issues on the small, high-strung F6A engine",
      "Roof panel seal wear leading to water leaks if not properly maintained",
      "Rust in the small unibody structure on poorly stored examples",
      "Timing belt service is critical given the small, high-revving engine"
    ],
    modPotential:
      "Moderate within kei-car tuning culture — turbo and ECU tuning gains are popular, though power increases are constrained by both engine size and Japan's kei-car regulations if the owner wants to retain that classification.",
    buyingGuide:
      "Since it's JDM-only, verify import documentation, inspect all roof panels and seals for wear or leaks, and check turbo and boost control health on a test drive.",
    popularity:
      "A beloved cult classic among kei-car and lightweight sports car enthusiasts, cherished for its clever engineering and genuine driving fun within tiny dimensions.",
    funFacts: [
      "Its removable roof system offers several different configurations, from full hardtop to open targa to complete convertible",
      "It uses a front-mid-engine layout, with the engine mounted behind the front axle line for better weight balance, unusual for a car this small",
      "Aluminum body panels were used specifically to keep weight down within Japan's strict kei-car limits"
    ],
    tags: ["cappuccino", "kei car", "ea11r", "f6a", "roadster", "targa"]
  },
  {
    slug: "autozam-az1",
    name: "Autozam AZ-1",
    shortName: "AZ-1",
    chassisCode: "PG6SA",
    engineCode: "F6A",
    manufacturer: "Suzuki",
    country: "Japan",
    years: "1992–1994",
    engine: "0.66L turbo inline-3 (F6A)",
    horsepower: "63 hp (JDM kei-car limit)",
    torque: "63 lb-ft",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    weight: "~1,570 lbs",
    zeroToSixty: "~9.5 seconds",
    aspiration: "Turbo",
    bodyStyle: "2-door mid-engine coupe (gullwing doors)",
    overview:
      "Perhaps the most audacious kei car ever built, the AZ-1 pairs genuine mid-engine, RWD supercar architecture — right down to dramatic gullwing doors — with Suzuki's turbocharged F6A engine, all wrapped in one of the smallest performance car bodies ever mass-produced.",
    history:
      "Developed jointly by Suzuki (which supplied the engine and mechanicals) and badged as an Autozam for Mazda's now-defunct small-car retail channel, the AZ-1 was a genuine engineering flex — a true mid-engine sports car built to kei-car regulations at a moment when Japan's bubble economy allowed manufacturers to greenlight wonderfully impractical projects.",
    whyFamous:
      "Its gullwing doors and true mid-engine layout make it look and feel like a shrunken supercar, and it's remembered as one of the purest, most delightfully over-engineered expressions of Japan's early-90s kei sports car boom.",
    strengths: [
      "Genuine mid-engine RWD layout with real supercar-style gullwing doors",
      "Extremely light weight makes its modest power feel genuinely thrilling",
      "Kei-car classification means low taxes and running costs in Japan",
      "One of the most distinctive, head-turning small cars ever built"
    ],
    weaknesses: [
      "Very low absolute power limits real-world performance significantly",
      "Extremely low ground clearance and small size make it impractical for daily use",
      "Never officially exported outside Japan, requiring import in most markets",
      "Very rare, with production numbers far lower than most other kei sports cars"
    ],
    commonProblems: [
      "Turbo wear and boost control issues on the small, high-strung F6A engine",
      "Gullwing door hinge and seal wear if not properly maintained",
      "Rust in the small unibody structure on poorly stored examples",
      "Very scarce OEM parts given its low original production numbers"
    ],
    modPotential:
      "Moderate within a small, devoted kei-car tuning niche — turbo and ECU tuning are popular, though the car's cult rarity means most owners prioritize preservation over heavy modification.",
    buyingGuide:
      "Since it's JDM-only and quite rare, verify import documentation, inspect gullwing door hinges and seals carefully, and expect a smaller pool of specialist parts and service knowledge than for more common kei cars.",
    popularity:
      "A beloved unicorn among kei-car and JDM enthusiasts worldwide, prized specifically for daring to put supercar theater into the smallest legal car category in Japan.",
    funFacts: [
      "It's one of very few kei cars ever built with gullwing doors, a feature normally reserved for genuine exotics",
      "Its F6A turbo engine and mechanicals were sourced directly from Suzuki, despite being sold under Mazda's short-lived Autozam brand",
      "Production numbers were low enough that clean surviving examples are genuinely rare even within Japan today"
    ],
    tags: ["az1", "az-1", "autozam", "kei car", "gullwing", "mid-engine", "f6a"]
  }
];

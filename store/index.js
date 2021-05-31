import Vuex from 'vuex';

export default function () {
    return new Vuex.Store({
        state: () => ({
            users: [
                { name: 'Ha Huy Giap', email: 'giapha2905@gmail.com', password: 'Hahuygiap95', address: 'Can tho', phone: '123234123' },
                { name: 'Baron', email: 'baron@gmail.com', password: 'Baron123', address: 'Binh Duong', phone: '23425424234' },
            ],
            profile: null,
            cars: [
                {
                    name: 'Bugatti',
                    models: [
                        {
                            name: 'Bugatti Chiron Divo',
                            images: ['/images/cars/bugatti-divo-1.jpg','/images/cars/bugatti-divo-2.jpg','/images/cars/bugatti-divo-3.jpg','/images/cars/bugatti-divo-4.jpg','/images/cars/bugatti-divo-5.jpg','/images/cars/bugatti-divo-6.jpg','/images/cars/bugatti-divo-7.jpg'],
                            informations: {
                                overall_dimensions_dxRxC: '4,544 x 2,038 x 1,212',
                                cylinder_capacity: '7993',
                                engine: 'W16 8.0L',
                                maximum_power: '1500',
                                maximum_torque: '1600',
                                fuel_consumption: '21.38L',
                                origin: 'Import',
                                gear: 'AT level 7',
                                seats: '2',
                            },
                            desc: 'Exceptionally crafted, striking in character, strictly limited and with completely different driving dynamics – the DIVO is BUGATTI’s first modern coachbuilt project: athletic, sharp, with distinctive handling properties, stunning lateral acceleration and a unique design language. The aerodynamics of the car have been intensively fine-tuned for additional downforce, while the suspension and chassis settings were modified for an even more compelling driving experience. Powered by BUGATTI’s iconic 8.0-liter W16 engine –with an output of 1,500 PS and 1,600 Nm– the Divo combines incomparable coachbuilding quality with an exhilarant driving experience.'
                        },
                        {
                            name: 'Bugatti Veyron',
                            images: ['/images/cars/bugatti-veyron-1.jpg','/images/cars/bugatti-veyron-2.jpg','/images/cars/bugatti-veyron-3.jpg','/images/cars/bugatti-veyron-4.jpg','/images/cars/bugatti-veyron-5.jpg','/images/cars/bugatti-veyron-6.jpg','/images/cars/bugatti-veyron-7.jpg'],
                            informations: {
                                overall_dimensions_dxRxC: '4,462 x 1,998 x 1,204',
                                cylinder_capacity: '7993',
                                engine: 'W16 8.0L',
                                maximum_power: '999',
                                maximum_torque: '1250',
                                fuel_consumption: '35L',
                                origin: 'Import',
                                gear: 'AT level 7',
                                seats: '2',
                            },
                            desc: 'The Bugatti Veyron first appeared on the scene in 2005, and its impact is still being felt today. Under the hood was an 8.0L quad-turbo W16 engine rated at over 1,000 hp and 100% street legal. A total of 450 different Veyron models were produced, maxing out at 1,184 hp and sporting a 0 to 62 mph time of just 2.5 seconds. Originally, the Bugatti Veyron was capable of reaching up to 253 mph. Then, the Bugatti Veyron Super Sport broke that record with a top speed of up to 267 mph, giving engineers a target for the Chiron. With incredible speed comes the need for top-shelf safety technologies. The Veyron was built with a carbon fiber “tub” to house and protect occupants; this safety and performance booster carried over to the Chiron as well.'
                        }
                    ]
                },
                {
                    name: 'Ferrari',
                    models: [
                        {
                            name: 'Ferrari 458',
                            images: ['/images/cars/Ferrari-458-1.jpg','/images/cars/Ferrari-458-2.jpg','/images/cars/Ferrari-458-3.jpg','/images/cars/Ferrari-458-4.jpg'],
                            informations: {
                                overall_dimensions_dxRxC: '4,462 x 1,998 x 1,204',
                                cylinder_capacity: '7993',
                                engine: '4.5-Liter V8',
                                maximum_power: '562 hp',
                                maximum_torque: '398 lb-ft',
                                fuel_consumption: '25L',
                                origin: 'Import',
                                gear: 'AT level 7',
                                seats: '2',
                            },
                            desc: 'The Ferrari 458 Italia has garnered over 30 international awards in its career. It added two further plaudits to that collection at the International Engine of the Year Awards when its V8 was voted “Best Performance Engine” and “Best Engine Above 4 Litres”. The success being enjoyed by the 458 Italia with both critics and public alike crosses all borders'
                        },
                        {
                            name: 'Ferrari 488',
                            images: ['/images/cars/Ferrari-488-1.jpg','/images/cars/Ferrari-488-2.jpg','/images/cars/Ferrari-488-3.jpg','/images/cars/Ferrari-488-4.jpg','/images/cars/Ferrari-488-5.jpg','/images/cars/Ferrari-488-6.jpg','/images/cars/Ferrari-488-7.jpg'],
                            informations: {
                                overall_dimensions_dxRxC: '4568 x 1852 x 1211',
                                cylinder_capacity: '3.9',
                                engine: 'V8 Turbocharged',
                                maximum_power: '660hp @ 8000rpm ',
                                maximum_torque: '760Nm @6750rpm',
                                fuel_consumption: '16,6/8,4/11,4',
                                origin: 'Europe',
                                gear: 'F1 . 7-speed automatic',
                                seats: '2',
                            },
                            desc: 'The Ferrari 488 Pista is powered by the most powerful V8 engine in the Maranello marque’s history and is the company’s special series sports car with the highest level yet of technological transfer from racing. In fact the name, meaning ‘track’ in Italian, was chosen speciﬁcally to testify to Ferrari’s unparalleled heritage in motor sports. Technically, the Ferrari 488 Pista encompasses all of the experience built up on the world’s circuits by the 488 Challenge and the 488 GTE.'
                        },
                    ]
                },
                {
                    name: 'Lamborghini',
                    models: [
                        {
                            name: 'Lamborghini Aventador LP700',
                            images: ['/images/cars/lamborghini-aventador-lp700-1.jpg','/images/cars/lamborghini-aventador-lp700-2.jpg','/images/cars/lamborghini-aventador-lp700-3.jpg','/images/cars/lamborghini-aventador-lp700-4.jpg','/images/cars/lamborghini-aventador-lp700-5.jpg'],
                            informations: {
                                overall_dimensions_dxRxC: '2030  x 2700 x 1136',
                                cylinder_capacity: '3.9',
                                engine: 'V12, 60o with electronically controlled variable valve system',
                                maximum_power: '700 VC (515 kW) at 8250 rpm ',
                                maximum_torque: '690 Nm (509 lbft) at 5500 rpm',
                                fuel_consumption: 'Unleaded gasoline, octane number (RON) 95/98',
                                origin: 'Europe',
                                gear: 'F1 . 7-speed automatic',
                                seats: '2',
                            },
                            desc: 'Forget the idea of performance you are used to. The Aventador Coupé has been engineered to revolutionize this concept and establish a new benchmark in the segment of super sports cars and beyond. This car aims to bring the future forward. This is a true supercar legend in the making, which combines the tradition of the Lamborghini brand with a level of innovation which takes the House of the Raging Bull to hitherto unexplored territory.'
                        },
                        {
                            name: 'Lamborghini Huracan LP610',
                            images: ['/images/cars/Lamborghini-huracan-lp610-1.jpg','/images/cars/Lamborghini-huracan-lp610-2.jpg','/images/cars/Lamborghini-huracan-lp610-3.jpg','/images/cars/Lamborghini-huracan-lp610-4.jpg','/images/cars/Lamborghini-huracan-lp610-5.jpg'],
                            informations: {
                                overall_dimensions_dxRxC: '2050  x 2900 x 1150',
                                cylinder_capacity: '3.9',
                                engine: 'V10 5.2 liters',
                                maximum_power: '610 hp at 8250 rpm ',
                                maximum_torque: '560 Nm at 6500 rpm',
                                fuel_consumption: '12.5 liters/100 km',
                                origin: 'Gasoline',
                                gear: 'Semi-automatic',
                                seats: '2',
                            },
                            desc: 'The Huracán Coupé has been created for unprecedented performance. All the power and acceleration of a naturally aspirated V-10 engine, without giving up control or fun of driving. This is all thanks to the  all-wheel drive system and the 7-speed Lamborghini Doppia Frizione (LDF) dual-clutch transmission, as well as the innovative Piattaforma Inerziale Lamborghini (LPI), created for accurate and real-time detection of all the chassis movements and for immediate adjustment of the car setup. Below is a summary of all the characteristics and the technical specifications of the Huracán Coupé.'
                        }
                    ]
                }
            ],
            brands: [
                {
                    name: 'Bugatti',
                    sologan: 'LES LÉGENDES DU CIEL',
                    banner: '/images/cars/bugatti-divo-1.jpg',
                    subBanner: '/images/cars/bugatti-divo-2.jpg',
                    link: 'bugatti',
                    video: '/videos/Bugatti.mp4',
                    images: ['/images/cars/bugatti-divo-1.jpg','/images/cars/bugatti-divo-2.jpg','/images/cars/bugatti-divo-3.jpg','/images/cars/bugatti-divo-4.jpg','/images/cars/bugatti-divo-5.jpg','/images/cars/bugatti-divo-6.jpg','/images/cars/bugatti-divo-7.jpg'],
                    history: `
                    <p>Bugatti is often mistaken for an Italian automaker. It is a company founded (and currently located) in France. Bugatti boasts a rich racing heritage that dates back to the early 1900s.</p>

                    <p>A brand of automobile this innovative and unique demands that it be serviced by a specialized firm. No firm in the United States is more capable of outstanding Bugatti service, repair, modification and tuning than Forza Performance and Tuning in Clearwater, Florida. The Exotic Car Doc, an ASE L1 Level Certified Master Tech with more than two-decades of experience, brought Forza to the Gulf Coast with a purpose. He would provide exotic car owners with a service and repair experience that would be a significant upgrade over that of the dealership. He has accomplished that purpose.</p>

                    <p>The idea of a Bugatti automobile dates back to the year 1900 when a young man by the name of Ettore Bugatti first envisioned building a car around an internal combustion engine that had struck his fancy. Only a year later, with the help of the Gulinelli Brothers, Ettore debuted the world’s first Bugatti. It won the T2 Trophy for construction and design at the International Exhibition.</p>
                    `
                },
                {
                    name: 'Ferrari',
                    sologan: 'FEEL THE DREAM',
                    banner: '/images/cars/Ferrari-458-1.jpg',
                    subBanner: '/images/cars/Ferrari-458-2.jpg',
                    link: 'ferrari',
                    video: '/videos/Ferrari.mp4',
                    images: ['/images/cars/Ferrari-458-1.jpg','/images/cars/Ferrari-458-2.jpg','/images/cars/Ferrari-458-3.jpg','/images/cars/Ferrari-458-4.jpg'],
                    history: `
                    <p>Ferrari is one of the world’s most admired luxury sports car automakers. The company officially launched in 1947. However, the automaker’s legendary founder and namesake Enzo Ferrari was involved in the industry long before then.</p>
                    <p>Born in Modena, Italy in 1898, Enzo Ferrari started out as a race car driver. In the 1920s, he was made a driver with Alfa Romeo and won several racing awards including the 2nd Circuito di Modena.</p>
                    <p>In 1929, Ferrari founded the Scuderia Ferrari, now the official race car division for Ferrari. It began, however, as a division of Alfa that specialized in preparing race cars to gentlemen drivers. This was at a time when sports car racing was really taking off as an activity for the rich and famous, who were really the only ones who could afford it.</p>
                    <p>In 1931, Enzo finished in second place at the Circuito Tre Province, which would be his last time competing as a driver. He wanted to focus on his family and the birth of his first son Alfredo more commonly called Dino.</p>
                    <p>However, he still continued working with Scuderia and building cars for Alfa until 1939. In September of that year, he left his position as Head of Alfa Corse to form his own car company Auto Avio Costruzioni in his hometown of Modena, Italy. As a condition of his departure, he was required not to use the Ferrari name in association with any of his cars or races for at least four years after. Honoring the agreement, the company name wasn’t changed to Auto Costruzioni Ferrari until 1957, and first car to bare the name Ferrari was released the Ferrari 125 S.</p>
                    `
                },
                {
                    name: 'Lamborghini',
                    sologan: 'VISION FOR THE FUTURE',
                    banner: '/images/cars/lamborghini-aventador-lp700-1.jpg',
                    subBanner: '/images/cars/lamborghini-aventador-lp700-2.jpg',
                    link: 'lamborghini',
                    video: '/videos/Lamborghini.mp4',
                    images: ['/images/cars/lamborghini-aventador-lp700-1.jpg','/images/cars/lamborghini-aventador-lp700-2.jpg','/images/cars/lamborghini-aventador-lp700-3.jpg','/images/cars/lamborghini-aventador-lp700-4.jpg','/images/cars/lamborghini-aventador-lp700-5.jpg'],
                    history: `
                    <p>The history of ‘Lamborghini Automobili’ officially starts in 1963. Nevertheless, we must consider the far-off roots of this event, and they are the roots of Ferruccio Lamborghini. Born in 1916, this capable, impetuous, strong-willed Taurus was the leading character in the foundation of the company and the early phases of its extraordinary history.</p><p>By the time he decided to build a factory of luxury sports cars, Ferruccio was already a very wealthy man. In the period following World War II, he founded his tractor factory, which he launched with energy and determination, creating a major point of reference in this industry. Other businesses followed, and he amassed his fortune at the perfect time, before his fiftieth birthday. By the early Sixties, Lamborghini was a powerful and successful man who knew exactly what he wanted, but when he said he would build a super sports car to compete with Ferrari, many people thought he was mad. Constructing that kind of car was viewed as an unexplainable extravagance, a hazardous leap in the dark, and something that would squander his fortune without ever turning a profit.</p><p>He started working on this project in late 1962, and by May 1963 he had already founded ‘ Automobili Ferruccio Lamborghini’, buying a large plot of land in Sant’Agata Bolognese, about 25 kilometres from Bologna, to build a new large and ultramodern factory. Because of the experience he had gained with his other companies, he was in a position to set up the best facilities for his purpose: a very functional structure that, at the time, was unrivalled in its field. The enormous and well-let central building was adjacent to the office building, so that the management could constantly monitor the production situation. This was ideal for Lamborghini, who would often roll up his shirtsleeves and go to work on the cars personally when he saw something that wasn’t done just the way he wanted.</p>
                    `
                },
            ],
            blogs: [
                {
                    id: 1,
                    title: 'LAMBORGHINI COUNTACH: DESIGN THAT MADE HISTORY',
                    date: '27 MAY 2021',
                    mainImg: '/images/blogs/main1.webp',
                    contents: [
                        { subImg: '/images/blogs/sub1-1.webp', content: 'There are works of art that always remain contemporary, and the shape of the Countach is one of them.” These are the words of Mitja Borkert, Head of Design of Lamborghini, who added, “Its design is made of perfect proportions, characterized by a very pure and essential style. Its distinguishing trait is given by a single longitudinal line that visually connects its front with its rear. From the stylistic viewpoint, it is a perfect inspiration, because even if we modify the rest, it takes form as an element of visual continuity between past and present. It is the summa of the DNA of all of Lamborghini’s design, the tradition of the stylistic language from the origins up until present day.'},
                        { subImg: '/images/blogs/sub1-2.webp', content: 'Low to the ground and wide, the front view of the Countach features diagonal lines on the front hood that are also found on that of the engine compartment, which make it immediately recognizable even from a distance. The same shape of the passenger compartment, low and square, combined with the classic slant of the windshield, contributed to characterizing the design of the various models that, starting from the Countach, followed one another. Precisely these shapes have remained unaltered over the years, to which the so peculiar and characteristic styling of the side windows is added, making a Lamborghini recognizable even at first glance.'},
                    ]
                },
                {
                    id: 2,
                    title: 'NEW HURACÁN SUPER TROFEO EVO2: PURE ADRENALINE',
                    date: '26 MAY 2021',
                    mainImg: '/images/blogs/main2.webp',
                    contents: [
                        { subImg: '/images/blogs/sub2-1.jpg', content: 'The Huracán Super Trofeo EVO2 makes the design of the previous generations more extreme, heralding stylistic elements that will make their debut on the roads in the forthcoming years. The front changes radically, featuring new combination lights and the pronounced “omega” lip that reinforces the styling bond with the Huracán STO. The “air curtain” intakes that optimize air flow are also unprecedented.'},
                        { subImg: '/images/blogs/sub2-2.jpg', content: 'The steel front discs have been increased from 380 to 390 mm. The new calipers can house pads with a new design and a larger surface to optimize performance and fuel consumption. The propulsion is entrusted to the 5.2-liter V10 intake engine that delivers up to 620 CV, to be managed with a sequential six-gear X-Trac gearbox and matched with rear wheel drive.'},
                    ]
                },
                {
                    id: 3,
                    title: 'LAMBORGHINI ANNOUNCES THE SECOND EDITION OF THE REAL RACE',
                    date: '20 MAY 2021',
                    mainImg: '/images/blogs/main3.webp',
                    contents: [
                        { subImg: '/images/blogs/sub3-1.jpg', content: 'The Real Race, which attracted over 2500 drivers from 109 countries in its first year, is offering a new global approach this year, with racing drivers who will compete both in the traditional Grand Prix and in three Endurance races to win an experience at the Lamborghini headquarters in Italy and the chance to become the first Lamborghini Official Sim Driver.'},
                        { subImg: '/images/blogs/sub3-2.jpg', content: 'The Real Race reinforces Lamborghini’s commitment in the world of eSports following its partnership with the leading game brands, such as Rocket League and Asphalt 9: Legends.'},
                    ]
                },
            ]
        }),
        mutations: {
            addUser(state, data) {
              state.users.push(data);
            },
            login(state, data) {
                state.profile = data;
            }
          },
        modules: {
        }
    })
}


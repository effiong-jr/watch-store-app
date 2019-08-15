import gba800el from '../../assets/images/lineup/GBA800EL-4A_large.png';
import gmwb5000d from '../../assets/images/lineup/GMWB5000D-1_large.png';
import gbd800uc from '../../assets/images/lineup/GBD800UC-3_large.png';

export const watches = [
   {
       id: 0,
       name: "GBA800EL-4A",
       price: 120.00,
       url: gba800el,
       title: "LIMITED EDITION",
       description: `The new GBA800EL-4A arrives in a matte red reminiscent of boxing gloves, 
                    with the world-famous Everlast logo engraved on the case back. The distinguished 
                    logo also appears on the dial and band, with the model’s LED backlight feature 
                    highlighting the brand’s motto, “Choice of Champions” on the digital front display. 
                    The GBA800EL-4A is made with the modern fitness enthusiast in mind, equipped with 
                    a three-axis acceleration sensor to keep track of step count as well as walking/running pace. 
                    The digital display also shows the step count and hourly step graph, while the status indicator 
                    displays the target achievement rate.`,

       specification: ["1/100-second stopwatch", "Measuring capacity: 00 00 00~59 59 99 (for the first 60 minutes) 1:00'00~23:59'59 (after 60 minutes)",
                        "Measuring unit: 1/100 second (for the first 60 minutes) 1 second (after 60 minutes)", 
                        "Recorded data: Up to 200 records (measurement start month, date, lap/split times)",
                        "Target Time alarm up to 10 Target Time settings",
                        "12/24-hour format", "Accuracy: ±15 seconds per month (with no mobile link function)",
                    ]
   },

   {
       id: 1,
       name: "GMWB5000D-1",
       url : gmwb5000d,
       price: 500.00,
       title: "",
       description: `The Full Metal 5000 is a brand new, specially crafted all-metal timepiece. Inspired by the first G-SHOCK model, DW5000C, this upgraded original 
           boasts a modern, lustrous, colorway while maintaining a vintage aesthetic. The watch also incorporates one of the first and most iconic G-SHOCK 
           case designs, featuring a vintage, square shape case & bezel with a brick pattern on the face. The GMWB5000D-1 incorporates a super illuminator LED light 
           and solar battery – rendering it capable of self-charging, as well as a special STN LCD. In addition, the timepiece incorporates an upgraded, stylish, 
           full stainless steel housing and DLC screw-back case. Two-way time sync is made possible via Bluetooth Connectivity and the G-SHOCK app, as well as 
           G-SHOCK’s Multi-Band 6 Atomic Timekeeping technology, which provides accurate timekeeping virtually anywhere via radio signals from up to six different transmitters worldwide.`,
       
       specification: [
           "Shock resistant", "200m water resistant", "Solar powered", "LED backlight (Super illuminator)",
           "Full auto LED light, selectable illumination duration (2 seconds or 4 seconds), afterglow", 
           "Time calibration signal reception", "Auto receive up to six* times a day (remaining auto receives canceled as soon as one is successful) *5 times a day for the Chinese calibration signal The latest signal reception results",
        ]
   },

   {
       id: 2,
       name: "GBD800UC-3",
       url: gbd800uc,
       price: 99.00,
       description: `These are the latest additions to the new POWER TRAINER sports lineup from G-SHOCK. 
                    The good-looking designs and utility colors of these models maximize coordination 
                    possibilities with both everyday fashions and training wear. Function-wise, 
                    these watches link with the G-SHOCK Connected phone app to provide access to a number of 
                    functions that enhance workouts. Daily health and fitness support functions include 
                    a 3-axis accelerometer that keeps track of step counts, a Multi-Timer that lets you create up 
                    to 20 timer combinations of five timers each, memory for up to 200 lap records, and more. 
                    The app also makes it possible to maintain step count logs with five exercise intensity levels, 
                    to calculate the calories you burn, to specify a daily step target, to create timer combinations and send them to 
                    the watch, to store stopwatch measurement data, to view data, and more. All of this combines to help you plan and record your workouts, 
                    making them more effective and enjoyable. Other features include app-based auto time setting correction and other features for 
                    more efficient timekeeping, and an Auto LED Light to facilitate workouts in areas where lighting is dim. Back wings on the inside of 
                    the bands where they connect to the case, a new band ring shape that prevents sliding, and more band holes to allow better tightness 
                    adjustment, all add up to a more comfortable fit. You can make fine adjustments to the band size.`,

       specification: ["Mineral Glass", "Shock Resistant", "200-meter water resistance", "Case / bezel material: Resin", "Resin Band"],
   }
]
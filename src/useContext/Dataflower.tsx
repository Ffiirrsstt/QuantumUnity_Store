import g91 from "../assets/9g-1.jpeg";
import g92 from "../assets/9g-2.jpeg";
import s91 from "../assets/9s-1.jpeg";
import s92 from "../assets/9s-2.jpeg";
import b10 from "../assets/10b.jpg";
import p10 from "../assets/10p.jpg";
import s10 from "../assets/10s.jpg";
import y10 from "../assets/10y.jpg";
import b51 from "../assets/5b-1.jpeg";
import b52 from "../assets/5b-2.jpeg";
import g51 from "../assets/5g-1.jpeg";
import g52 from "../assets/5g-2.jpeg";
import p51 from "../assets/5p-1.jpeg";
import p52 from "../assets/5p-2.jpeg";
import pu51 from "../assets/5pu-1.jpeg";
import pu52 from "../assets/5pu-2.jpeg";
import s51 from "../assets/5s-1.jpeg";
import s52 from "../assets/5s-2.jpeg";

export interface styletypedata {
  id: number;
  src:
    | [string[], string[], string[], string[]]
    | [string[], string[], string[], string[], string[]]
    | [string[], string[]]
    | [string[]];
  name: string;
  description: [
    string
    // [
    //   [string, string],
    //   [string, string],
    //   [string, string],
    //   [string, string],
    //   [string, string],
    //   [string, string],
    //   [string, string],
    //   [string, string],
    //   [string, string],
    //   [string, string],
    //   [string, string],
    //   [string, string],
    //   [string, string],
    //   [string, string],
    //   [string, string]
    //   [string, string]
    // ]
  ];
  price: number[];
  quantitysell:
    | [number[], number[]]
    | [number[], number[], number[], number[]]
    | [number[], number[], number[], number[], number[]];
  quantitybuy: string;
  pay: number;
  cart: number;
  forboolean: boolean;
  like: boolean;
  select: {
    gb: number[];
    color: string[];
    desColor: string[];
  };
  selectedcolor: { gb: boolean[]; color: boolean[] };
  selected: number[];
}

let countid = 1;

export const Dataflower: styletypedata[] = [
  {
    id: countid,
    src: [
      [g91, g92],
      [s91, s92],
    ],
    name: "iPad Gen 9th (Wi-Fi)",
    description: [
      `
    <p class='txt-mb'>
    Introducing the powerful and user-friendly new iPad with a beautiful 10.2-inch Retina display, powered by the A13 Bionic chip, featuring a high-performance Neural Engine. It comes with an 8MP rear camera, a 12MP front camera with the "Center Stage" feature, and is compatible with Apple Pencil and Smart Keyboard<sup>1</sup> All of this at an unbelievable price.
    </p><h1 class='txt-mb font-xl font-wb'>
Key Features:
</h1>
<ul>
<li class='txt-mb'>
Stunning 10.2-inch Retina display with True Tone technology.</li><li class='txt-mb'>
A13 Bionic chip with Neural Engine.</li><li class='txt-mb'>
8MP rear camera and 12MP front camera with the "Center Stage" feature.</li><li class='txt-mb'>
Maximum storage capacity of 256GB.</li><li class='txt-mb'>
Stereo speakers.</li><li class='txt-mb'>
Touch ID for secure authentication.</li><li class='txt-mb'>
Wi-Fi 802.11ac.</li><li class='txt-mb'>
Up to 10 hours of battery life<sup>3</sup></li><li class='txt-mb'>
Lightning connector for charging and connecting accessories.</li><li class='txt-mb'>
Compatible with Apple Pencil (1st generation) and Smart Keyboard<sup>1</sup></li><li class='txt-mb'>
Powerful and user-friendly iPadOS 15 designed for the iPad's versatility and capabilities.
</li></ul>`,
      //       [
      //         [
      //           "Size and Weight",
      //           `<li class='txt-mb'>Width: 174.1 mm</li><li class='txt-mb'>
      //       Height: 250.6 mm</li><li class='txt-mb'>
      //       Depth: 7.5 mm</li><li class='txt-mb'>
      //       Weight: 487 g<sup>2</sup></li>`,
      //         ],
      //         [
      //           "Display",
      //           `<li class='txt-mb'>Retina display</li><li class='txt-mb'>
      //       10.2-inch Multi-Touch display with LED backlighting</li><li class='txt-mb'>
      //       IPS technology</li><li class='txt-mb'>
      //       Resolution: 2160 x 1620 pixels at 264 pixels per inch (ppi)</li><li class='txt-mb'>
      //       True Tone display technology</li><li class='txt-mb'>
      //       500 nits brightness</li><li class='txt-mb'>
      //       Fingerprint-resistant oleophobic coating</li><li class='txt-mb'>
      //       Supports first-generation Apple Pencil</li>`,
      //         ],
      //         [
      //           "Chip",
      //           `<li class='txt-mb'>A13 Bionic chip with 64-bit architecture</li><li class='txt-mb'>
      //       Next-generation Neural Engine</li>`,
      //         ],
      //         [
      //           "Camera",
      //           `<li class='txt-mb'>8MP camera</li><li class='txt-mb'>
      //       f/2.4 aperture</li><li class='txt-mb'>
      //       Digital zoom up to 5x</li><li class='txt-mb'>
      //       5-element lens</li><li class='txt-mb'>
      //       Digital zoom up to 5x</li><li class='txt-mb'>
      //       Panorama (up to 43MP)</li><li class='txt-mb'>
      //       HDR for photos</li><li class='txt-mb'>
      //       Geotagging</li>`,
      //         ],
      //         [
      //           "Video Recording",
      //           `<li class='txt-mb'>1080p HD video recording at 25 fps, 30 fps</li><li class='txt-mb'>
      //       720p HD video recording at 30 fps</li><li class='txt-mb'>
      //       3x digital zoom</li><li class='txt-mb'>
      //       Slow-motion video support for 720p at 120 fps</li><li class='txt-mb'>
      //       Time-lapse video with stabilization</li><li class='txt-mb'>
      //       Video stabilization</li><li class='txt-mb'>
      //       Cinematic video stabilization (1080p and 720p)</li><li class='txt-mb'>
      //       Continuous autofocus video</li><li class='txt-mb'>
      //       Zoom while recording</li><li class='txt-mb'>
      //       Video formats recorded: HEVC and H.264</li>`,
      //         ],
      //         [
      //           "FaceTime HD Camera (FaceTime HD Camera)",
      //           `<li class='txt-mb'>The Ultra Wide camera has a resolution of 12MP and a wide field of view of 122 degrees</li><li class='txt-mb'>
      //       f/2.4 aperture</li><li class='txt-mb'>
      //       HDR for photos</li><li class='txt-mb'>
      //       1080p HD video recording at 25 fps, 30 fps, or 60 fps</li><li class='txt-mb'>
      //       Slow-motion video support for 1080p at 120 fps</li><li class='txt-mb'>
      //       Expanded dynamic range for video up to 30 fps</li><li class='txt-mb'>
      //       Cinematic video stabilization (1080p and 720p)</li><li class='txt-mb'>
      //       Lens correction</li><li class='txt-mb'>
      //       Retina Flash</li><li class='txt-mb'>
      //       Automatic image stabilization</li><li class='txt-mb'>
      //       Continuous autofocus video</li><li class='txt-mb'>
      //       Burst mode</li>`,
      //         ],
      //         [
      //           "Video Calling",
      //           `<li class='txt-mb'>
      //           Video FaceTime<sup>6</sup>
      //           </li><li class='txt-mb'>
      // Feature: Center Stage<sup>6</sup>
      // </li><li class='txt-mb'>
      // Make video calls between iPads and other FaceTime-compatible devices via Wi-Fi or cellular data<sup>6</sup>  </li>`,
      //           [
      //             "Audio Calling",
      //             `Audio FaceTime<sup>6</sup>
      // You can make audio calls between iPads and any FaceTime-compatible devices using Wi-Fi or cellular data<sup>4</sup>`,
      //           ],
      //         ],
      //         [
      //           "Cellular and Wireless",
      //           `<li class='txt-mb'>All models</li><li class='txt-mb'>
      //       Wi-Fi (802.11a/b/g/n/ac), dual-band (2.4 GHz and 5 GHz), HT80 with MIMO technology</li><li class='txt-mb'>
      //       Bluetooth 4.2</li><li class='txt-mb'>
      //       Wi-Fi + Cellular models (A2604)</li><li class='txt-mb'>

      //       UMTS/HSPA/HSPA+/DC-HSDPA (850, 900, 1700/2100, 1900, 2100 MHz)</li><li class='txt-mb'>
      //       Gigabit-class LTE (bands 1, 2, 3, 4, 5, 7, 8, 11, 12, 13, 14, 17, 18, 19, 20, 21, 25, 26, 28, 29, 30, 34, 38, 39, 40, 41, 66)</li><li class='txt-mb'>
      //       Data only</li><li class='txt-mb'>
      //       Wi-Fi calling</li><li class='txt-mb'>
      //       eSIM</li>`,
      //         ],
      //         [
      //           "SIM card",
      //           `<li class='txt-mb'>Nano-SIM card and eSIM support</li><li class='txt-mb'>eSIM</li>`,
      //         ],
      //         [
      //           "Location",
      //           `<li class='txt-mb'>Digital compass</li><li class='txt-mb'>
      //       Wi-Fi</li><li class='txt-mb'>
      //       iBeacon microlocation</li>`,
      //         ],
      //         [
      //           "Sensors",
      //           `<li class='txt-mb'>Touch ID
      //       </li><li class='txt-mb'>Three-axis gyro</li><li class='txt-mb'>
      //       Accelerometer</li><li class='txt-mb'>
      //       Barometer</li><li class='txt-mb'>
      //       Ambient light sensor</li>`,
      //         ],
      //         [
      //           "Touch ID",
      //           `<li class='txt-mb'>Unlock your iPad</li><li class='txt-mb'>
      //       Ensure the security of your personal data within apps</li><li class='txt-mb'>
      //       Make purchases from the iTunes Store and App Store</li>`,
      //         ],
      //         [
      //           "Battery and Power",
      //           `<li class='txt-mb'>All models</li><li class='txt-mb'>
      //       Built-in rechargeable lithium-polymer battery with up to 32.4-watt-hour capacity</li><li class='txt-mb'>
      //       Up to 10 hours of browsing the web on Wi-Fi or watching video</li><li class='txt-mb'>
      //       Wi-Fi + Cellular models</li><li class='txt-mb'>
      // Up to 9 hours of web browsing using cellular data network</li>`,
      //         ],
      //         ["Operating System", "iPadOS 15"],
      //         [
      //           "In the Box",
      //           `<li class='txt-mb'>iPad with iPadOS 15</li><li class='txt-mb'>
      //       USB-C to Lightning cable</li><li class='txt-mb'>
      //       20W USB-C power adapter</li>`,
      //         ],
      //       ],
    ],
    price: [10400, 16400],
    quantitysell: [
      [5, 4],
      [3, 6],
    ],
    quantitybuy: "1",
    pay: 0,
    cart: 0,
    forboolean: false,
    like: false,
    select: {
      gb: [64, 256],
      color: ["#535353", "#e5e6eb"],
      desColor: ["Space grey", "Silver"],
    },
    selectedcolor: { gb: [true, false], color: [true, false] },
    selected: [0, 0],
  },
  {
    id: ++countid,
    src: [
      [g91, g92],
      [s91, s92],
    ],
    name: "iPad Gen 9th (Wi-Fi + Cellular)",
    description: [
      `<p class='txt-mb'>The new iPad combines power and ease of use, featuring a beautiful 10.2-inch Retina display, a powerful A13 Bionic chip, a versatile camera system with Center Stage feature, and compatibility with Apple Pencil and Smart Keyboard<sup>1</sup> This iPad allows you to do more in an even easier way, all at an unbelievable price.</p>
      <h1 class='txt-mb font-xl font-wb'>
    Key Features:</h1><li class='txt-mb'>
    Stunning and eye-catching 10.2-inch Retina display with True Tone technology</li><li class='txt-mb'>
    A13 Bionic chip with Neural Engine</li><li class='txt-mb'>
    Advanced camera system with an 8MP rear camera and a 12MP TrueDepth front camera with Center Stage feature</li><li class='txt-mb'>
    Up to 256GB of storage capacity</li><li class='txt-mb'>
    Stereo speakers for immersive audio experience</li><li class='txt-mb'>
    Secure authentication with Touch ID</li><li class='txt-mb'>
    Fast Wi-Fi 802.11ac and Gigabit-class LTE<sup>2</sup></li><li class='txt-mb'>
    Up to 10 hours of battery life<sup>3</sup></li><li class='txt-mb'>
    Lightning connector for charging and connecting accessories</li><li class='txt-mb'>
    Compatible with Apple Pencil (1st generation) and Smart Keyboard<sup>1</sup></li><li class='txt-mb'>
    Powerful and user-friendly iPadOS 15 designed to cater to the unique desires of iPad users</li><li class='txt-mb'>
    Overall, the new iPad offers a combination of power, simplicity, and affordability, empowering you to accomplish more with ease.
    </li>`,
      //       [
      //         [
      //           "Size and Weight",
      //           `<li class='txt-mb'>Width: 174.1 mm</li><li class='txt-mb'>
      //     Height: 250.6 mm</li><li class='txt-mb'>
      //     Depth: 7.5 mm</li><li class='txt-mb'>
      //     Weight: 487 g<sup>2</sup></li>`,
      //         ],
      //         [
      //           "Display",
      //           `<li class='txt-mb'>
      //           Retina display
      //           </li><li class='txt-mb'>
      //           10.2-inch (diagonal) LED-backlit Multi-Touch display with IPS technology
      //           </li><li class='txt-mb'>
      //           2160-by-1620-pixel resolution at 264 pixels per inch (ppi)
      //           </li><li class='txt-mb'>
      //           True Tone display
      //           </li><li class='txt-mb'>
      //           500 nits brightness
      //           </li><li class='txt-mb'>
      //           Fingerprint-resistant oleophobic coating
      //           </li><li class='txt-mb'>
      //           Supports Apple Pencil (1st generation)</li><li class='txt-mb'>`,
      //         ],
      //         [
      //           "Chip",
      //           `<li class='txt-mb'>
      //           A13 Bionic chip with 64-bit architecture
      //           </li><li class='txt-mb'>
      //           Neural Engine
      //           </li>`,
      //         ],
      //         [
      //           "Camera",
      //           `<li class='txt-mb'>
      //           8MP Wide camera
      //           </li><li class='txt-mb'>
      //           ƒ/2.4 aperture
      //           </li><li class='txt-mb'>
      //           Digital zoom up to 5x
      //           </li><li class='txt-mb'>
      //           Five-element lens
      //           </li><li class='txt-mb'>
      //           Panorama (up to 43MP)
      //           </li><li class='txt-mb'>
      //           HDR for photos
      //           </li><li class='txt-mb'>
      //           Photo geotagging
      //           </li><li class='txt-mb'>
      //           Auto image stabilization
      //           </li><li class='txt-mb'>
      //           Burst mode</li>`,
      //         ],
      //         [
      //           "Video Recording",
      //           `
      //           <li class='txt-mb'>
      //           1080p HD video recording at 25 fps and 30 fps
      //           </li><li class='txt-mb'>
      //           720p HD video recording at 30 fps
      //           </li><li class='txt-mb'>
      //           3x video zoom
      //           </li><li class='txt-mb'>
      //           Slo‑mo video support for 720p at 120 fps
      //           </li><li class='txt-mb'>
      //           Time-lapse video with stabilization
      //           </li><li class='txt-mb'>
      //           Video image stabilization
      //           </li><li class='txt-mb'>
      //           Cinematic video stabilization (1080p and 720p)
      //           </li><li class='txt-mb'>
      //           Continuous autofocus video
      //           </li><li class='txt-mb'>
      //           Playback zoom
      //           </li><li class='txt-mb'>
      //           Video formats recorded: HEVC and H.264</li>`,
      //         ],
      //         [
      //           "Front Camera (FaceTime HD Camera)",
      //           `<li class='txt-mb'>
      //           12MP Ultra Wide camera, 122° field of view
      //           </li><li class='txt-mb'>
      //           ƒ/2.4 aperture
      //           </li><li class='txt-mb'>
      //           HDR for photos
      //           </li><li class='txt-mb'>
      //           1080p HD video recording at 25 fps, 30 fps, or 60 fps
      //           </li><li class='txt-mb'>
      //           Time‑lapse video with stabilization
      //           </li><li class='txt-mb'>
      //           Extended dynamic range for video up to 30 fps
      //           </li><li class='txt-mb'>
      //           Cinematic video stabilization (1080p and 720p)
      //           </li><li class='txt-mb'>
      //           Lens correction
      //           </li><li class='txt-mb'>
      //           Auto image stabilization
      //           </li><li class='txt-mb'>
      //           Burst mode</li>`,
      //         ],
      //         [
      //           "Video Calling",
      //           `<li class='txt-mb'>
      //           FaceTime video<sup>6</sup>
      //           </li><li class='txt-mb'>
      //           Center Stage<sup>6</sup>
      //           </li><li class='txt-mb'>
      //           iPad to any FaceTime-enabled device over Wi-Fi or cellular<sup>6</sup>
      //           </li>
      //           `,
      //         ],['Audio Calling',`<li class='txt-mb'>
      //         FaceTime audio<sup>6</sup>
      //         </li><li class='txt-mb'>
      //         iPad to any FaceTime-enabled device over Wi-Fi or cellular<sup>4</sup></li>`],
      //         [
      //           "Cellular and Wireless",
      //           `<li class='txt-mb'>
      //           All models
      //           </li><li class='txt-mb'>
      //           Wi-Fi (802.11a/b/g/n/ac); dual band (2.4GHz and 5GHz); HT80 with MIMO Bluetooth 4.2 technology
      //           </li><li class='txt-mb'>
      //           Wi-Fi + Cellular models
      //           </li><li class='txt-mb'>
      //           Model A2603
      //           </li><li class='txt-mb'>
      //           UMTS/HSPA/HSPA+/DC-HSDPA (850, 900, 1700/2100, 1900, 2100 MHz)</li><li class='txt-mb'>

      //           Gigabit-class LTE (Bands 1, 2, 3, 4, 5, 7, 8, 11, 12, 13, 14, 17, 18, 19, 20, 21, 25, 26, 29, 30, 34, 38, 39, 40, 41, 66, 71)
      //           </li><li class='txt-mb'>
      //           Data only</li><li class='txt-mb'>

      //           Wi-Fi calling</li><li class='txt-mb'>

      //           eSIM</li>`,
      //         ],
      //         [
      //           "SIM card",
      //           `<li class='txt-mb'>
      //           Nano‑SIM (supports Apple SIM)</li><li class='txt-mb'>eSIM</li>`,
      //         ],
      //         [
      //           "Location",
      //           `<li class='txt-mb'>
      //           All models
      //           </li><li class='txt-mb'>
      //           Digital compass
      //           </li><li class='txt-mb'>
      //           Wi‑Fi
      //           </li><li class='txt-mb'>
      //           iBeacon microlocation
      //           </li><li class='txt-mb'>
      //           Wi-Fi + Cellular models
      //           </li><li class='txt-mb'>
      //           Built-in GPS/GNSS
      //           </li><li class='txt-mb'>
      //           Cellular</li>`,
      //         ],
      //         [
      //           "Sensors",
      //           `<li class='txt-mb'>
      //           Touch ID
      //           </li><li class='txt-mb'>
      //           Three‐axis gyro
      //           </li><li class='txt-mb'>
      //           Accelerometer
      //           </li><li class='txt-mb'>
      //           Barometer
      //           </li><li class='txt-mb'>
      //           Ambient light sensor</li>`,
      //         ],
      //         [
      //           "Touch ID",
      //           `<li class='txt-mb'>
      //           Unlock iPad
      //           </li><li class='txt-mb'>
      //           Secure personal data within apps
      //           </li><li class='txt-mb'>
      //           Make purchases from the iTunes Store, App Store, and Apple Books</li>`,
      //         ],
      //         [
      //           "Battery and Power",
      //           `<li class='txt-mb'>
      //           All models
      //           </li><li class='txt-mb'>
      //           Built‐in 32.4‐watt‐hour rechargeable lithium‑polymer battery
      //           </li><li class='txt-mb'>
      //           Up to 10 hours of surfing the web on Wi‐Fi or watching video
      //           </li><li class='txt-mb'>
      //           Charging via power adapter or USB-C to computer system
      //           </li><li class='txt-mb'>
      //           Wi-Fi + Cellular models
      //           </li><li class='txt-mb'>
      //           Up to 9 hours of surfing the web using cellular data network</li>`,
      //         ],
      //         [
      //           "Operating System",
      //           `<li class='txt-mb'>iPadOS 15</li><li class='txt-mb'>
      //           iPadOS comes with powerful features and built-in apps designed to take advantage of the unique capabilities of iPad</li>`,
      //         ],
      //         [
      //           "In the Box",
      //           `<li class='txt-mb'>
      // iPad
      // </li><li class='txt-mb'>
      // Lightning to USB-C Cable
      // </li><li class='txt-mb'>
      // 20W USB-C Power Adapter</li>`,
      //         ],
      //       ],
    ],
    price: [15900, 21900],
    quantitysell: [
      [16, 15],
      [12, 18],
    ],
    quantitybuy: "1",
    pay: 0,
    cart: 0,
    forboolean: false,
    like: false,
    select: {
      gb: [64, 256],
      color: ["#535353", "#e5e6eb"],
      desColor: ["Space grey", "Silver"],
    },
    selectedcolor: { gb: [true, false], color: [true, false] },
    selected: [0, 0],
  },
  {
    id: ++countid,
    src: [[b10], [p10], [s10], [y10]],
    name: "iPad Gen 10th (Wi-Fi)",
    description: [
      `<p class='txt-mb'>The redesigned iPad comes with vibrant and more versatile colors, showcasing a fresh and vibrant look. With a stunning 10.9-inch Liquid Retina display<sup>1</sup> and four beautiful colors, the iPad is a powerful way to create, accomplish, and stay connected.</p><h1 class='txt-mb font-xl font-wb'>
    Key Features:</h1><li class='txt-mb'>
      Impressive 10.9-inch Liquid Retina display<sup>1</sup> with True Tone technology</li><li class='txt-mb'>
      A14 Bionic chip with a 6-core CPU and 4-core GPU</li><li class='txt-mb'>
      12MP rear camera</li><li class='txt-mb'>
      12MP TrueDepth front camera with horizontal orientation and Center Stage feature</li><li class='txt-mb'>
      Secure authentication with Touch ID</li><li class='txt-mb'>
      Wi-Fi 6</li><li class='txt-mb'>
      USB-C connector for charging and connecting accessories</li><li class='txt-mb'>
      All-day battery life<sup>3</sup> for extended usage</li><li class='txt-mb'>
      Compatible with Apple Pencil (1st generation)<sup>4</sup> and Magic Keyboard Folio</li><li class='txt-mb'>
      iPadOS 16 enhances the capabilities of your iPad with powerful new features for improved performance and collaboration</li><li class='txt-mb'>
      
      Overall, the redesigned iPad delivers a stunning visual experience, powerful performance, and enhanced connectivity, making it a versatile tool for productivity, creativity, and staying connected.</li>`,
    ],
    price: [10400, 16400],
    quantitysell: [
      [5, 24],
      [30, 26],
      [23, 46],
      [33, 16],
    ],
    quantitybuy: "1",
    pay: 0,
    cart: 0,
    forboolean: false,
    like: false,
    select: {
      gb: [64, 256],
      color: ["blue", "pink", "#e5e6eb", "yellow"],
      desColor: ["Blue", "Pink", "Silver", "Yellow"],
    },
    selectedcolor: { gb: [true, false], color: [true, false, false, false] },
    selected: [0, 0],
  },
  {
    id: ++countid,
    src: [[b10], [p10], [s10], [y10]],
    name: "iPad Gen 10th (Wi-Fi + Cellular)",
    description: [
      `<p class='txt-mb'>The iPad has been redesigned to be more vibrant and versatile than ever before. It comes with a stunning 10.9-inch Liquid Retina display<sup>1</sup> and is available in four eye-catching colors. The iPad empowers you to create, innovate, and stay connected to everything.</p><h1 class='txt-mb font-xl font-wb'>
    Key Features:</h1><li class='txt-mb'>
      
      A standout 10.9-inch Liquid Retina display<sup>1</sup> with True Tone technology for eye-catching visuals.</li><li class='txt-mb'>
      A14 Bionic chip with a 6-core CPU and a 4-core GPU.</li><li class='txt-mb'>
      12MP rear camera for capturing high-resolution photos.</li><li class='txt-mb'>
      12MP front camera with Center Stage feature for keeping you in the frame.</li><li class='txt-mb'>
      Touch ID for secure authentication.</li><li class='txt-mb'>
      Wi-Fi 6 and 5G (sub-6 GHz)<sup>2</sup> cellular connectivity.</li><li class='txt-mb'>
      USB-C port for charging and connecting accessories.</li><li class='txt-mb'>
      All-day battery life<sup>3</sup> for long-lasting usage.</li><li class='txt-mb'>
      Compatible with the first-generation Apple Pencil<sup>4</sup> and Magic Keyboard Folio.</li><li class='txt-mb'>
      iPadOS 16 enhances the capabilities of your iPad with powerful new features for performance and collaboration.</li>`,
    ],
    price: [23900, 29900],
    quantitysell: [
      [15, 2],
      [32, 21],
      [28, 26],
      [30, 10],
    ],
    quantitybuy: "1",
    pay: 0,
    cart: 0,
    forboolean: false,
    like: false,
    select: {
      gb: [64, 256],
      color: ["blue", "pink", "#e5e6eb", "yellow"],
      desColor: ["Blue", "Pink", "Silver", "Yellow"],
    },
    selectedcolor: { gb: [true, false], color: [true, false, false, false] },
    selected: [0, 0],
  },
  {
    id: ++countid,
    src: [
      [g51, g52],
      [s51, s52],
      [p51, p52],
      [b51, b52],
      [pu51, pu52],
    ],
    name: "iPad Air WiFi Gen 5th",
    description: [
      `<p class='txt-mb'>
      The iPad Air is the ultimate learning tool for education, featuring a 10.9-inch<sup>1</sup> Liquid Retina display that is immersive and true-to-life, the powerful M1 chip, all-day battery life<sup>2</sup>, and Wi-Fi 6. It also supports the Magic Keyboard and Apple Pencil (2nd generation), making it incredibly convenient. It's safe to say that there has never been an easier way to sketch, explore ideas, and learn to code.
      </p><h1 class='txt-mb font-xl font-wb'>
    Key Features:</h1><li class='txt-mb'>
Immersive 10.9-inch<sup>1</sup> Liquid Retina display with True Tone and wide P3 color gamut.</li><li class='txt-mb'>
M1 chip with an 8-core CPU and 8-core GPU.</li><li class='txt-mb'>
All-day battery life<sup>2</sup>.</li><li class='txt-mb'>
Wi-Fi 6.</li><li class='txt-mb'>
12MP rear camera.</li><li class='txt-mb'>
12MP front camera with Center Stage feature.</li><li class='txt-mb'>
Touch ID for secure authentication.</li><li class='txt-mb'>
USB-C port for charging and connecting accessories.</li><li class='txt-mb'>
Compatible with Magic Keyboard, Smart Keyboard Folio, and Apple Pencil (2nd generation).</li><li class='txt-mb'>
iPadOS 16 elevates the iPad's capabilities for creativity and learning.
      </li>`,
    ],
    price: [19300, 25300],
    quantitysell: [
      [1, 12],
      [2, 1],
      [18, 36],
      [20, 11],
      [31, 12],
    ],
    quantitybuy: "1",
    pay: 0,
    cart: 0,
    forboolean: false,
    like: false,
    select: {
      gb: [64, 256],
      color: ["#536872", "#ece0d1", "#dec2cb", "#92a8d1", "#abb1cf"],
      desColor: ["Space grey", "Starlight", "Pink", "Blue", "Purple"],
    },
    selectedcolor: {
      gb: [true, false],
      color: [true, false, false, false, false],
    },
    selected: [0, 0],
  },
  {
    id: ++countid,
    src: [
      [g51, g52],
      [s51, s52],
      [p51, p52],
      [b51, b52],
      [pu51, pu52],
    ],
    name: "iPad Air WiFi Gen 5th",
    description: [
      `<p class='txt-mb'>
      The iPad Air is a complete learning tool designed specifically for education. With its immersive 10.9-inch<sup>1</sup> Liquid Retina display, powerful M1 chip, all-day battery life<sup>2</sup>, and Wi-Fi 6, it provides an exceptional learning experience. Additionally, it supports the use of the Magic Keyboard and Apple Pencil (2nd generation), making tasks such as note-taking, exploring ideas, and coding easier than ever before.
      </p><h1 class='txt-mb font-xl font-wb'>
    Key Features:</h1><li class='txt-mb'>
      Immersive 10.9-inch<sup>1</sup> Liquid Retina display with True Tone and wide P3 color gamut.</li><li class='txt-mb'>
      M1 chip with an 8-core CPU and 8-core GPU.</li><li class='txt-mb'>
      All-day battery life<sup>2</sup>.</li><li class='txt-mb'>
      Wi-Fi 6 and 5G<sup>3</sup> cellular connectivity.</li><li class='txt-mb'>
      12MP rear camera.</li><li class='txt-mb'>
      12MP front camera with Center Stage feature.</li><li class='txt-mb'>
      Touch ID for secure authentication.</li><li class='txt-mb'>
      USB-C port for charging and connecting accessories.</li><li class='txt-mb'>
      Compatible with the Magic Keyboard, Smart Keyboard Folio, and Apple Pencil (2nd generation).</li><li class='txt-mb'>
      iPadOS 16 takes the iPad's capabilities to the next level, offering powerful tools for creativity and learning.</li>`,
    ],
    price: [19300, 25300],
    quantitysell: [
      [17, 1],
      [21, 19],
      [1, 6],
      [22, 11],
      [21, 12],
    ],
    quantitybuy: "1",
    pay: 0,
    cart: 0,
    forboolean: false,
    like: false,
    select: {
      gb: [64, 256],
      color: ["#536872", "#ece0d1", "#dec2cb", "#92a8d1", "#abb1cf"],
      desColor: ["Space grey", "Starlight", "Pink", "Blue", "Purple"],
    },
    selectedcolor: {
      gb: [true, false],
      color: [true, false, false, false, false],
    },
    selected: [0, 0],
  },
];

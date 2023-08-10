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
import b101 from "../assets/10b-1.jpg";
import p101 from "../assets/10p-1.jpg";
import s101 from "../assets/10s-1.jpg";
import y101 from "../assets/10y-1.jpg";

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

export const Dataipad: styletypedata[] = [
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
    src: [
      [b10, b101],
      [p10, p101],
      [s10, s101],
      [y10, y101],
    ],
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
    src: [
      [b10, b101],
      [p10, p101],
      [s10, s101],
      [y10, y101],
    ],
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

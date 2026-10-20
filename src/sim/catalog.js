// Everything the park can hold, its prices and its numbers. The sim, the
// screen and the tests all read from here, so a price changes in one place.

export const MAP = 48;            // the park is MAP x MAP tiles; a tile is about 3 m
export const STEP = 0.5;          // one track height step, in tiles
export const MAX_H = 44;          // highest track, in steps (22 tiles, about 66 m)
export const MONTH = 120;         // sim seconds in a month
export const DAYS = 30;
export const MONTHS = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
export const START_MONTH = 2;     // the park opens in March
export const GATE = { x: 24, z: MAP - 1 }; // the first path tile, just inside the gate
export const MAX_GUESTS = 400;

export const START_CASH = 15000;
export const START_LOAN = 10000;
export const MAX_LOAN = 40000;
export const LOAN_STEP = 1000;
export const INTEREST = 0.01;     // per month, on the loan
export const PATH_COST = 12;
export const REFUND = 0.5;        // what demolishing gives back; a mistake undone within seconds gives it all
export const UNDO_WINDOW = 12;    // sim seconds
export const MARKETING = { cost: 800, months: 1, boost: 1.7 };
export const GOAL = { guests: 250, rating: 600, months: 24 };

// Rides that stand on their own. w x d tiles at rotation 0. exc/int/nau are
// out of 10, the way guests judge them. cap riders per cycle, cycle in seconds.
export const RIDES = {
  carousel: { he: 'קרוסלה', icon: '🎠', w: 3, d: 3, h: 7, cost: 1400, upkeep: 35, exc: 2.4, int: 1.1, nau: 0.7, cap: 20, cycle: 18, price: 3, desc: 'סוסים מסתובבים. מתאים לכל אחד' },
  ferris: { he: 'גלגל ענק', icon: '🎡', w: 4, d: 2, h: 14, cost: 2200, upkeep: 45, exc: 3.1, int: 0.9, nau: 0.4, cap: 24, cycle: 26, price: 4, desc: 'נוף מלמעלה, בלי פחד' },
  teacups: { he: 'ספלים מסתובבים', icon: '☕', w: 3, d: 3, h: 4, cost: 1700, upkeep: 40, exc: 3.3, int: 3.0, nau: 4.4, cap: 16, cycle: 16, price: 4, desc: 'מסתובב מהר. לא אחרי ארוחה' },
  bumper: { he: 'מכוניות מתנגשות', icon: '🚗', w: 4, d: 3, h: 5, cost: 2400, upkeep: 50, exc: 4.0, int: 2.4, nau: 0.9, cap: 10, cycle: 18, price: 5, desc: 'כולם אוהבים להתנגש' },
  ship: { he: 'ספינת פיראטים', icon: '⛵', w: 4, d: 3, h: 9, cost: 2900, upkeep: 60, exc: 4.7, int: 5.2, nau: 4.6, cap: 28, cycle: 20, price: 6, desc: 'נדנדה ענקית. הבטן מתהפכת' },
  tower: { he: 'מגדל נפילה', icon: '🗼', w: 2, d: 2, h: 30, cost: 3400, upkeep: 70, exc: 5.4, int: 7.3, nau: 2.4, cap: 12, cycle: 20, price: 7, desc: 'עולים לאט, נופלים מהר' },
};
export const RIDE_ORDER = ['carousel', 'ferris', 'teacups', 'bumper', 'ship', 'tower'];

// The ticket booth: one per park. Until it stands by a path, nobody comes in.
export const BOOTH = { he: 'קופה', icon: '🎟️', w: 2, d: 1, h: 5, cost: 300, upkeep: 20, desc: 'כאן קונים כרטיסים וקובעים מחירים. בלי קופה הפארק סגור' };

// Stalls: one tile each. item effects are on the guest's needs (0..100).
export const SHOPS = {
  burger: { he: 'המבורגר', icon: '🍔', cost: 450, upkeep: 15, unit: 1.4, price: 4, worth: 6, hunger: -55, thirst: 8, litter: true, kind: 'food' },
  pizza: { he: 'פיצה', icon: '🍕', cost: 500, upkeep: 15, unit: 1.3, price: 4, worth: 6, hunger: -50, thirst: 6, litter: true, kind: 'food' },
  drinks: { he: 'שתייה קרה', icon: '🥤', cost: 350, upkeep: 12, unit: 0.6, price: 2.5, worth: 4, thirst: -60, toilet: 22, litter: true, kind: 'drink' },
  icecream: { he: 'גלידה', icon: '🍦', cost: 400, upkeep: 12, unit: 0.8, price: 3, worth: 4.5, hunger: -18, thirst: -12, happy: 6, litter: false, kind: 'food' },
  balloons: { he: 'בלונים', icon: '🎈', cost: 400, upkeep: 10, unit: 0.7, price: 3, worth: 5, happy: 10, kind: 'gift' },
  toilets: { he: 'שירותים', icon: '🚻', cost: 350, upkeep: 20, unit: 0, price: 0, worth: 1.5, toilet: -100, kind: 'toilet' },
};
export const SHOP_ORDER = ['burger', 'pizza', 'drinks', 'icecream', 'balloons', 'toilets'];

// Scenery stands on grass. beauty spreads a few tiles around it.
export const SCENERY = {
  oak: { he: 'עץ', icon: '🌳', cost: 25, beauty: 3, h: 5 },
  pine: { he: 'אורן', icon: '🌲', cost: 20, beauty: 3, h: 6 },
  palm: { he: 'דקל', icon: '🌴', cost: 35, beauty: 4, h: 7 },
  bush: { he: 'שיח', icon: '🌿', cost: 10, beauty: 2, h: 2 },
  flowers: { he: 'ערוגת פרחים', icon: '🌷', cost: 15, beauty: 4, h: 1 },
  statue: { he: 'פסל', icon: '🗿', cost: 180, beauty: 9, h: 4 },
  fountain: { he: 'מזרקה', icon: '⛲', cost: 320, beauty: 15, h: 3, w: 2, d: 2 },
};
export const SCENERY_ORDER = ['oak', 'pine', 'palm', 'bush', 'flowers', 'statue', 'fountain'];

// Things that sit on a path tile, one per tile.
export const ADDONS = {
  bench: { id: 1, he: 'ספסל', icon: '🪑', cost: 40, desc: 'אורחים עייפים יושבים לנוח' },
  bin: { id: 2, he: 'פח אשפה', icon: '🗑️', cost: 30, desc: 'פחות לכלוך על השבילים' },
  lamp: { id: 3, he: 'פנס', icon: '💡', cost: 35, beauty: 2, desc: 'קצת יופי לשביל' },
};
export const ADDON_BY_ID = [null, 'bench', 'bin', 'lamp'];

export const STAFF = {
  cleaner: { he: 'מנקה', icon: '🧹', wage: 280, desc: 'מנקה לכלוך והקאות מהשבילים' },
  mechanic: { he: 'מכונאי', icon: '🔧', wage: 400, desc: 'בודק מתקנים ומתקן תקלות' },
  entertainer: { he: 'בדרן', icon: '🤡', wage: 320, desc: 'משמח אורחים ומקצר את ההמתנה בתור' },
};
export const STAFF_ORDER = ['cleaner', 'mechanic', 'entertainer'];

// Roller coaster track. dh in height steps per piece.
export const COASTER = {
  stationLen: 4, cars: 6, seats: 2, carLen: 0.62, upkeepBase: 30, upkeepPerPiece: 0.8, price: 7, maxPieces: 400,
  colors: [0xe63946, 0x2a9df4, 0xffb703, 0x8338ec, 0x06d6a0, 0xff6b9a],
};
export const PIECES = {
  station: { he: 'תחנה', cost: 150, dh: 0 },
  straight: { he: 'ישר', icon: '⬆', cost: 40, dh: 0 },
  left: { he: 'שמאלה', icon: '↰', cost: 55, dh: 0, turn: 3 },
  right: { he: 'ימינה', icon: '↱', cost: 55, dh: 0, turn: 1 },
  up: { he: 'עלייה', icon: '↗', cost: 60, dh: 1 },
  down: { he: 'ירידה', icon: '↘', cost: 60, dh: -1 },
  steepUp: { he: 'עלייה חדה', icon: '⏫', cost: 80, dh: 2 },
  steepDown: { he: 'צלילה', icon: '⏬', cost: 80, dh: -2 },
  lift: { he: 'שרשרת', icon: '⛓', cost: 130, dh: 2, chain: true },
  loop: { he: 'לופ', icon: '➰', cost: 700, dh: 0, len: 2 },
  brake: { he: 'בלמים', icon: '🛑', cost: 90, dh: 0, brake: true },
};
export const PIECE_ORDER = ['straight', 'left', 'right', 'up', 'down', 'lift', 'steepUp', 'steepDown', 'loop', 'brake'];

// How tall things on the ground are, in track steps, so track can pass over.
export const CLEAR_PATH = 4;      // track over a path leaves room for people
export const CLEAR_TRACK = 3;     // track over track

export const NAMES = ['נועה', 'דניאל', 'מאיה', 'איתי', 'תמר', 'יונתן', 'שירה', 'עומר', 'יעל', 'אורי', 'רוני', 'אביגיל', 'אלון', 'הדר', 'נדב', 'ליה', 'עידו', 'מיכל', 'גיל', 'אדל', 'רון', 'טליה', 'אריאל', 'שחר', 'בן', 'הילה', 'יואב', 'ענבר', 'עמית', 'אלה', 'דור', 'רותם', 'משה', 'שרה', 'יוסי', 'רחל', 'אבי', 'לאה', 'דוד', 'אסתר'];
export const LETTERS = 'אבגדהזחטיכלמנסעפצקרשת';

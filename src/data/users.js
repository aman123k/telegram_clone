const users = [
  {
    id: 1038231,
    name: "Aman kashyap",
    time: "06:40 PM",
    lastMessage: "Ok kl milte hai",
    image:
      "https://wallpapers.com/images/hd/cat-with-shades-cool-picture-lkenou4wsqrbib37.jpg",
    userName: "Ak54262",
    phoneNo: "+91 00817 65313",
    bio: "I want a cute,✍️ long",
    lastSeen: "06:40 PM",
  },
  {
    id: 8903122,
    name: "Rahul",
    time: "12:31 AM",
    lastMessage: "Kl chalte hai",
    image:
      "https://i.pinimg.com/736x/8e/d4/04/8ed4040e06e68818a07c3e15ac7c18dc.jpg",
    userName: "Rahul_rth",
    phoneNo: "+91 00003 65313",
    bio: "",
    lastSeen: "02:00 AM",
  },
  {
    id: 9865031,
    name: "Deleted Account",
    time: "yesterday",
    lastMessage: "Deleted Account joined...",
    image: "💀",
    userName: "",
    phoneNo: "",
    bio: "",
    lastSeen: "yesterday",
  },
  {
    id: 3409876,
    name: "Ram sharma",
    time: "2 Feb",
    lastMessage: "Thank you!",
    image:
      "https://i0.wp.com/shayaricenter.com/wp-content/uploads/2020/07/True-Shayari-In-Hindi-With-Image-15072020-6-1024x1024.jpg?resize=500%2C500",
    userName: "Ram123#",
    phoneNo: "+91 08100 65303",
    bio: "Understanding is kinda ecstasy.",
    lastSeen: "2/Feb/2023",
  },
  {
    id: 8903142,
    name: "Pinki",
    time: "2 Feb",
    lastMessage: "Pinki joined Telegram",
    image:
      "https://i.pinimg.com/originals/cc/29/58/cc2958693bc6a6a8a505fd78b5be5558.jpg",
    userName: "pinki@987",
    phoneNo: "+91 09000 65313",
    bio: "Strees less injoy best 😁😅",
    lastSeen: "2/Feb/2023",
  },
  {
    id: 9803122,
    name: "Koku",
    time: "24 Feb",
    lastMessage: "so ja bhai",
    image:
      "https://i.pinimg.com/736x/1c/42/db/1c42dbe4cfb44025ac69d041568cf2c5.jpg",
    userName: "Koku_@89",
    phoneNo: "+91 0050 65313",
    bio: "Don't cry because it's over, smile because it happened💫",
    lastSeen: "24/Feb/2023",
  },
  {
    id: 9803652,
    name: "Ashley",
    time: "25 Feb",
    lastMessage: "How's your day going? bro",
    image:
      "https://assets2.cbsnewsstatic.com/hub/i/r/2019/10/04/07e9956f-da78-4d77-a79b-aa5ff354a4ee/thumbnail/640x427/8997c95154ddcf383a2c395a44c4029d/20-girl-names-scarlett.jpg",
    userName: "Ashley123",
    phoneNo: "+91 00020 65313",
    bio: "Memories , either you make or you become",
    lastSeen: "02:00 AM",
  },
  {
    id: 9803124,
    name: "Michael",
    time: "25 jan",
    lastMessage: "What's up? bro",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKE4HPJzh44olmm_kmLQ4d3sniLey1qXclA&usqp=CAU",
    userName: "Micha75el",
    phoneNo: "+91 00010 65313",
    bio: "At work",
    lastSeen: "02:00 AM",
  },
  {
    id: 43216542,
    name: "Saurabh",
    time: "23 jan",
    lastMessage: "Saurabh joined telegram ",
    image:
      "data:image/jpeg;base64,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",
    userName: "Saurabh0123#",
    phoneNo: "+91 02000 65313",
    bio: " 🎶just chill😉",
    lastSeen: "5 Minuts ago",
  },
  {
    id: 986641,
    name: "Deleted Account",
    time: "Mar 27,2022",
    lastMessage: "Deleted Account joined...",
    image: "💀",
    userName: "",
    phoneNo: "",
    bio: "",
    lastSeen: "a long time ago",
  },
  {
    id: 4321126,
    name: "Lucky",
    time: "Mar 26,2022",
    lastMessage: "This channel can’t be displayed...",
    image:
      "https://www.starrosesandplants.com/wp-content/uploads/2021/01/Elle_006.jpg",
    userName: "lucky_sharma156",
    phoneNo: "+91 99112 00000",
    bio: "",
    lastSeen: "a long time ago",
  },
  {
    id: 4387683,
    name: "Keshav Tiwari",
    time: "Oct 2,2022",
    lastMessage: "Keshav Tiwari joined...",
    image:
      "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg",
    userName: "",
    phoneNo: "+91 99112 00000",
    bio: "",
    lastSeen: "yesterday at 05:30 PM",
  },
  {
    id: 4387643,
    name: "Danver",
    time: "Oct 29,2022",
    lastMessage: "hello",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg?w=2000",
    userName: "Dennyallo",
    phoneNo: "+91 60000 00000",
    bio: "",
    lastSeen: "1/Feb/2023",
  },
  {
    id: 4321122,
    name: "Vishal",
    time: "Feb 21,2022",
    lastMessage: "Or bhai kya hal hai tere",
    image:
      "https://images.news18.com/ibnlive/uploads/2022/01/indiagate-16430470974x3.jpg",
    userName: "lahsiV0",
    phoneNo: "+91 90000 00000",
    bio: "",
    lastSeen: "1/Feb/2023",
  },
  {
    id: 4321872,
    name: "Yamini Budhiraja",
    time: "Feb 21,2022",
    lastMessage: "ja kr de block",
    image:
      "https://wallpapers.com/images/hd/studious-cool-girl-cartoon-yumrtk7cy50vu7u0.jpg",
    userName: "yamini_budhiraja",
    phoneNo: "+91 70000 00000",
    bio: "__.ît's ñévèr tøô láté tö bé whât yóû mîght'vê béëñ🤍",
    lastSeen: "within a week",
  },
];
export { users };

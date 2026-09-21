const memories = [
  {
    date: '15 March 2025',
    iso: '2025-03-15',
    title: 'Where It All Began',
    note: 'This wasn\'t a date. Namma best friends-ah meet pannom. Appo love nu edhuvum illa... but somehow, idhu dhaan namma story oda beginning. ❤️',
    images: ["images/archive/IMG_3871.jpeg"]
  },
  {
    date: '08 June 2025',
    iso: '2025-06-08',
    title: 'Our First Actual Date',
    note: 'Rendu perum shy-ah irundhom. Hands hold pannom. Nee enakku Kinder Joy kudutha. Nee en hand hold pannina moment... andha first hand kiss. ❤️',
    images: ["images/archive/IMG_4588.jpeg", "images/archive/76969742-5321-473d-9e44-419b821b66cc.jpeg", "images/archive/90e87a32-79ee-4953-b368-e8455ff218a0.jpeg", "images/archive/IMG_4598.jpeg", "images/archive/IMG_4597.jpeg"]
  },
  {
    date: '19 July 2025',
    iso: '2025-07-19',
    title: 'The Day We Became Us',
    note: 'Huge struggle-ku apram namma finally together aana date. First coffee. Nee en ID card potta. Naan un cheek-la first kiss kuduthen... nee thirumba kiss pannina. ❤️',
    images: ["images/archive/IMG_5219.jpeg", "images/archive/IMG_5225.jpeg", "images/archive/IMG_5223.jpeg", "images/archive/IMG_5233.jpeg", "images/archive/IMG_5236.jpeg", "images/archive/IMG_5228.jpeg"]
  },
  {
    date: '14 August 2025',
    iso: '2025-08-14',
    title: 'UNO, Panda & Our First Lip Kiss',
    note: 'UNO vilayadinom, coffee kudichom. Nee enakku panda keychain gift pannina. Andha day... our first lip kiss. ❤️',
    images: ["images/archive/IMG_6215.jpeg", "images/archive/IMG_6221.jpeg", "images/archive/IMG_6224.jpeg", "images/archive/IMG_6222.jpeg", "images/archive/IMG_6215(1).jpeg", "images/archive/IMG_6242.jpeg", "images/archive/IMG_6236.jpeg"]
  },
  {
    date: '22 September 2025',
    iso: '2025-09-22',
    title: 'Your Birthday Date',
    note: 'Science Centre, our first bike ride together, Vaira Maligai biryani... and it was your turn to give me our first lip kiss from you. 🎂❤️',
    images: ["images/archive/IMG_8276.jpeg", "images/archive/IMG_8278.jpeg", "images/archive/IMG_8299.jpeg", "images/archive/IMG_8319(1).jpeg", "images/archive/IMG_8331.jpeg", "images/archive/IMG_8334.jpeg", "images/archive/IMG_8337(1).jpeg", "images/archive/IMG_8340.jpeg"]
  },
  {
    date: '27 September 2025',
    iso: '2025-09-27',
    title: 'The Little Bus Date',
    note: 'Andha bus ride-la nee first time en lap-um shoulder-um mela thoongina. Such a small moment, but such a big memory. ❤️',
    images: ["images/archive/IMG_8383.jpeg", "images/archive/IMG_8384.jpeg"]
  },
  {
    date: '04 October 2025',
    iso: '2025-10-04',
    title: 'A Ride & A Little Street',
    note: 'Bike ride. Oru street. Rendu perum serndhu spend panna romantic little moments. Some memories are better kept between us. ❤️',
    images: ["images/archive/IMG_8417.jpeg", "images/archive/IMG_8418.jpeg", "images/archive/IMG_8421.jpeg"]
  },
  {
    date: '08 November 2025',
    iso: '2025-11-08',
    title: 'Our First Movie Date',
    note: 'First movie together, pizza, and our little secret in the theatre. Some parts of this memory can stay just ours. 🤫❤️',
    images: ["images/archive/IMG_9497.jpeg", "images/archive/IMG_9495.jpeg", "images/archive/IMG_9494.jpeg", "images/archive/IMG_9488.jpeg"]
  },
  {
    date: '22 December 2025',
    iso: '2025-12-22',
    title: 'A New Street',
    note: 'Small bike ride, new street discovered, and some quiet romantic time together. ❤️',
    images: ["images/archive/IMG_9897.jpeg", "images/archive/IMG_9894.jpeg", "images/archive/IMG_9899.jpeg"]
  },
  {
    date: '23 December 2025',
    iso: '2025-12-23',
    title: 'Another Little Bus Date',
    note: 'Another small bus date. Hands together, little kisses, and one more memory added to us. ❤️',
    images: ["images/archive/IMG_9903.jpeg", "images/archive/IMG_9902.jpeg", "images/archive/IMG_9901.jpeg"]
  },
  {
    date: '05 January 2026',
    iso: '2026-01-05',
    title: 'Our First Date of 2026',
    note: 'First little date of the new year. Simple, cute, and full of those little moments that only feel special because it was us. ❤️',
    images: ["images/archive/IMG_0039.jpeg", "images/archive/IMG_9993.jpeg", "images/archive/IMG_9992.jpeg"]
  },
  {
    date: '13 January 2026',
    iso: '2026-01-13',
    title: '9 Months',
    note: 'Museum, bike date, kisses in the street, food street near Tirunelveli Cricket Stadium... and all those birthday gifts you gave me in advance. ❤️',
    images: ["images/archive/IMG_0055.jpeg", "images/archive/4e322fa4-dc1c-47e3-9a1c-86838b4bb735.jpg", "images/archive/20988f62-3f3a-4745-ad56-adf36da02184.jpg", "images/archive/7ED69FB6-B55B-4FDE-AA7F-817264FC0ECC.jpeg", "images/archive/69B0D67A-3A4C-45D9-BB0C-638A5163D852.jpeg", "images/archive/87EC9D04-3FC8-403A-A07A-083DF97F236F.jpeg", "images/archive/IMG_0075.jpeg", "images/archive/edee013c-76d5-4c2b-ba6a-a0d9d7ce733e.jpg"]
  },
  {
    date: '20 March 2026',
    iso: '2026-03-20',
    title: 'Our Little Park Moment',
    note: 'A cute park date. And that cute kiss from me. One of those simple moments that still feels special when I think about it. ❤️',
    images: ["images/archive/26935314-a28d-4222-b2ab-b4c01fb2aa2a.jpg", "images/archive/7824bd2f-bf8e-4aeb-818e-76292610f8fc.jpg", "images/archive/7f0ebabe-e7a6-4ea3-9963-19e50faab461.jpg", "images/archive/46599a2e-349d-4e54-9a94-5f9deb2ecfc6.jpg", "images/archive/63a84bae-79bb-44c0-b0a5-8383842c1db1.jpg", "images/archive/4c51dd4d-bd21-45e2-a914-f78b400377d4.jpg"]
  },
  {
    date: '23 March 2026',
    iso: '2026-03-23',
    title: 'Our Hands',
    note: 'Bus date. We held hands and took that little photo of our hands. Just our hands... but somehow it says so much about us. ❤️',
    images: ["images/archive/IMG_1515.jpeg", "images/archive/IMG_1516.jpeg"]
  },
  {
    date: '18 April 2026',
    iso: '2026-04-18',
    title: 'We Found Our Way Back',
    note: 'After a huge fight and a difficult time, we went for our second movie date. It was not a perfect chapter, but it was a real one — and we still made a beautiful memory. ❤️',
    images: ["images/archive/205D7214-81D1-499A-AD44-40A3270CAC2B.jpeg", "images/archive/DAE8DD08-AFEA-4E26-BDE0-AFACF29D41CE.jpeg", "images/archive/79DD307B-97A3-4E8C-86C2-07BC2D855585(1).jpeg", "images/archive/F0B1B677-690A-488F-BFCE-1265E6C87082.jpeg", "images/archive/F0CBD60A-EB26-483E-9EB3-FB9E42B8DA38.jpeg"]
  },
  {
    date: '24 April 2026',
    iso: '2026-04-24',
    title: 'Third Movie Together',
    note: 'Another movie date. Cute little moments together. Some memories are private, so this one can stay between us. ❤️',
    images: ["images/archive/IMG_1943.jpeg"]
  },
  {
    date: '25 July 2026',
    iso: '2026-07-25',
    title: 'Movie & Bus Ride',
    note: 'Movie date and bus ride. Another day filled with our cute little moments. Some things are better left as our secret. ❤️',
    images: ["images/archive/IMG_2976.jpeg", "images/archive/IMG_2959.jpeg", "images/archive/IMG_2958.jpeg", "images/archive/IMG_2961(1).jpeg"]
  },
  {
    date: '29 August 2026',
    iso: '2026-08-29',
    title: 'Even Through Everything',
    note: 'Namma kulla innum solve aagalaadha oru problem irundhuchu. Aana even with that, indha date romba cute-ah and romantic-ah irundhuchu. Everything may not have been perfect... but this moment with you still meant so much to me. ❤️',
    images: ["images/archive/WhatsApp Image 2026-09-21 at 18.21.28 (1).jpeg", "images/archive/WhatsApp Image 2026-09-21 at 18.21.28 (2).jpeg", "images/archive/WhatsApp Image 2026-09-21 at 18.21.28.jpeg", "images/archive/WhatsApp Image 2026-09-21 at 18.21.29 (1).jpeg", "images/archive/WhatsApp Image 2026-09-21 at 18.21.29 (2).jpeg"]
  },
  {
    date: '31 August 2026',
    iso: '2026-08-31',
    title: 'Until We Meet Again',
    note: 'Our last meet till now. I fed you with my own hand while listening to your cute replies, we studied together, and you sat on my lap. Not an ending... just the latest page of our story. ❤️',
    images: [
      'images/2026-08-31/31_aug_01.jpeg',
      'images/2026-08-31/31_aug_02.jpeg',
      'images/2026-08-31/31_aug_03.jpeg',
      'images/2026-08-31/31_aug_04.jpeg',
      'images/2026-08-31/31_aug_05.jpeg'
    ]
  }
];

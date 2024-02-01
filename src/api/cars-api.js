const cars = [
  {
    id: "f32463264d372434d32423",
    title: "Ferarri",
    price: 499,
    imageUrl:
      "https://pics.clipartpng.com/Red_Ferrari_Car_PNG_Clip_Art-2649.png",
    selected: false,
  },
  {
    id: "gd263rfd362r723rrf7233",
    title: "BMV S6",
    price: 199,
    imageUrl:
      "https://purepng.com/public/uploads/large/purepng.com-bmw-x6-blue-carcarbmwvehicletransport-9615246630450hbgr.png",
    selected: false,
  },
  {
    id: "ndiu32gd362fd365262273",
    title: "Skoda",
    price: 129,
    selected: false,
    imageUrl:
      "https://purepng.com/public/uploads/large/purepng.com-skodaskodacarskoda-automobileskoda-vehicles-1701527613493heafl.png",
  },
  {
    id: "f324632eere434d324235",
    title: "Ferarri TT",
    price: 499,
    selected: false,
    imageUrl:
      "https://pics.clipartpng.com/Red_Ferrari_Car_PNG_Clip_Art-2649.png",
  },
  {
    id: "f32463264d372443d32423",
    title: "Ferarri 555",
    price: 499,
    selected: false,
    imageUrl:
      "https://pics.clipartpng.com/Red_Ferrari_Car_PNG_Clip_Art-2649.png",
  },
];

export const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: cars,
        isOk: true,
      });
    }, 300);
  });
};

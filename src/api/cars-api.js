export const cars = [
  {
    id: "f32463264d372434d32423",
    title: "Ferarri",
    price: 499,
    imageUrl: "https://www.picng.com/upload/ferrari/png_ferrari_20175.png",
    selected: false,
    images: [],
    description: null,
  },
  {
    id: "gd263rfd362r723rrf7233",
    title: "BMV S6",
    price: 199,
    imageUrl:
      "https://purepng.com/public/uploads/large/purepng.com-bmw-x6-blue-carcarbmwvehicletransport-9615246630450hbgr.png",
    selected: false,
    images: [
      "https://purepng.com/public/uploads/large/purepng.com-bmw-x6-blue-carcarbmwvehicletransport-9615246630450hbgr.png",
      "https://pics.clipartpng.com/Metallic_Black_BMW_X6_2013_Car_PNG_Clipart-119.png",
      "https://freepngimg.com/save/22617-bmw-x6-transparent-image/800x510",
    ],
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  },
  {
    id: "ndiu32gd362fd365262273",
    title: "Skoda",
    price: 129,
    selected: false,
    imageUrl:
      "https://purepng.com/public/uploads/large/purepng.com-skodaskodacarskoda-automobileskoda-vehicles-1701527613493heafl.png",

    images: [
      "https://purepng.com/public/uploads/large/purepng.com-bmw-x6-blue-carcarbmwvehicletransport-9615246630450hbgr.png",
      "https://pics.clipartpng.com/Metallic_Black_BMW_X6_2013_Car_PNG_Clipart-119.png",
      "https://freepngimg.com/save/22617-bmw-x6-transparent-image/800x510",
    ],
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical",
  },
  {
    id: "f324632eere434d324235",
    title: "Dacia Duster",
    price: 66.23,
    selected: false,
    imageUrl:
      "https://www.dacia.ro/agg/vn/unique/grade_carrousel_main_1_small/grade_carrousel_1.png?uri=https%3A%2F%2Fro.co.rplug.renault.com%2Fproduct%2Fmodel%2FJD1%2Fnoua-dacia-duster%2Fc%2FA-ENS_0MDL2PSP1_-TEENZ",
    images: [],
    description: null,
  },
  {
    id: "f32463264d372443d32423",
    title: "Nissan Ariya",
    price: 123,
    selected: false,
    imageUrl:
      "https://www.greenncap.com/wp-content/uploads/nissan-ariya-2023-0108-478x320.png",
    images: [],
    description: null,
  },
];

export const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: cars,
        isOk: true,
      });
    }, 1500);
  });
};

export const fetchCarById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const car = cars.find((item) => item.id === id);

      if (car) {
        resolve({
          data: car,
          isOk: true,
        });
      } else {
        resolve({
          data: null,
          isOk: false,
        });
      }
    }, 1500);
  });
};

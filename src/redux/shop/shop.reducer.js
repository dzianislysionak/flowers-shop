const INITIAL_STATE = {
  cllections: [
    {
      id: 1,
      title: "Букеты",
      categoryRoutName: "bouquets",
      categoryUrl:
        "https://most-beauty.ru/wp-content/uploads/2017/08/Buket-tsvetov.jpg",
    },
    {
      id: 2,
      title: "Розы",
      categoryRoutName: "roses",
      categoryUrl:
        "https://flo.discus-club.ru/images/stories/dekorativnye-kustarniki/rozy/cveta-roz/cveta-roz1.jpg",
    },
    {
      id: 3,
      title: "Тюльпаны",
      categoryRoutName: "tulips",
      categoryUrl:
        "https://images.aif.ru/019/439/6a7e086d25c17054e014ec2af008985c.JPG",
    },
    {
      id: 4,
      title: "Орхидеи",
      categoryRoutName: "orchid",
      categoryUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvX8rY5Vevsm_xCVe2jlsFs7g6qiSkDRzB0wCv8tdY-Yh_bNRN&usqp=CAU",
    },
    {
      id: 5,
      title: "Подарки",
      categoryRoutName: "presents",
      categoryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Geschenke-2007.JPG/1200px-Geschenke-2007.JPG",
    },
  ],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;

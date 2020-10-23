import { User } from "../model/User";

export class TestData {
  static users: User[] = [
    {
      id: 0,
      name: "Ричард Милхауз Никсон",
      email: "watergate1972@yahoo.com",
      positionName: "мастер вешать лапшу на уши"
    },
    {
      id: 1,
      name: "Ельцин Борис Николаевич",
      email: "smashusssr@email.ru",
      positionName: "алкоголик мужлан реформатор"
    },
    {
      id: 2,
      name: "Винсент Ван Гог",
      email: "сушоныеушки@yahoo.com",
      positionName: "рыжий усатый и бледный"
    },
    {
      id: 3,
      name: "Людвиг ван Бетховен",
      email: "moonsonate@yahoo.com",
      positionName: "грустный мрачный еще  добавить текста но мне лень"
    }
  ];
}

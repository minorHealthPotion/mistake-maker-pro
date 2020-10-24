import { User } from "../model/User";
import { ReservationsRules } from "../model/ReservationsRules";

export class TestData {
  static reservationsRules: ReservationsRules = {
    reservationsAvailable: 4,
    reservationsTotal: 6,
    hoursAvailable: 12,
    hoursTotal: 12
  };

  static users: User[] = [
    {
      id: 0,
      name: "Ричард Милхауз Никсон",
      email: "watergate1972@yahoo.com",
      positionName: "мастер вешать лапшу на уши"
    },
    {
      id: 1,
      name: "Рыба Заглушка Ипсумович",
      email: "loremipsumdolor@yahoo.com",
      positionName: "смысловые галлюцинации"
    },
    {
      id: 2,
      name: "Винсент Ван Гог",
      email: "earscutoff@yahoo.com",
      positionName: "рыжий усатый и бледный"
    },
    {
      id: 3,
      name: "Людвиг ван Бетховен",
      email: "moonsonate@yahoo.com",
      positionName: "грустный мрачный еще  добавить текста но мне лень"
    },
    {
      id: 4,
      name: "Ельцин Борис Николаевич",
      email: "smashusssr@email.ru",
      positionName: "алкоголик мужлан реформатор"
    }
  ];
}

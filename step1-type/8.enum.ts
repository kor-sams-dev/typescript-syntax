{
  /**
   * Enum
   */
  // JavaScript X
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYES_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYES_ENUM.MONDAY;

  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }

  // enum Days {
  //   Monday = 1,
  //   Tuesday, // 2
  //   Wednesday, // 3
  //   Thursday, // 4
  //   Friday, // 5
  //   Saturday, // 6
  //   Sunday, // 7
  // }

  // enum Days {
  //   Monday = 'monday',
  //   Tuesday = 'tuesday',
  //   Wednesday = 'wednesday',
  //   Thursday = 'thursday',
  //   Friday = 'friday',
  //   Saturday = 'saturday',
  //   Sunday = 'sunday',
  // }

  console.log(Days.Monday);
  const day: Days = Days.Saturday;
  console.log(day);

  // 💩💩💩💩💩💩
  let day2 = Days.Saturday;
  day2 = Days.Tuesday; // !!!!!!!! 타입을 보장하지 않음.
  // day2 = 10; // 이건 업데이트 되어서 보장하는 듯.

  // 🎉🎉🎉🎉🎉🎉
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayOfweek: DaysOfWeek = "Monday";
  // dayOfweek = "hi"; // error
}

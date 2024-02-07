{
  /**
   * Intersection Types: &
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function interWork(persion: Student & Worker) {
    console.log(persion.name, persion.employeeId, persion.work());
  }

  interWork({
    name: "jung",
    score: 100,
    employeeId: 123,
    work: () => {},
  });
}

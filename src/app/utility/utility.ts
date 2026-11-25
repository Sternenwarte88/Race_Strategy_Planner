export class Utility {
  public static convertTimeInMs(
    hours: number = 0,
    minutes: number = 0,
    seconds: number = 0,
    ms: number = 0,
  ): number {
    let calculatedTime = 0;
    calculatedTime += ms;
    calculatedTime += seconds * 1000;
    calculatedTime += minutes * 60 * 1000;
    calculatedTime += hours * 60 * 60 * 1000;

    return calculatedTime;
  }
}

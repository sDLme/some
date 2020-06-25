export class Member {
    public name: string;
    public email: string;
    public vehicle: string;
    public cubature: string;
    public weight: string;
    public time: string;
  
    constructor(name: string, motoName: string, cubature: string, weight: string, time: string) {
      this.name = name;
      this.vehicle = motoName;
      this.cubature = cubature;
      this.weight = weight;
      this.time = time;
    }
  }
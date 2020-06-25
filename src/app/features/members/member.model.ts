export class Member {
    public name: string;
    public email: string;
    public vehicle: string;
    public cubature: string;
    public weight: string;
    public category: string;
    public time: any;
  
    constructor(name: string, email: string, vehicle: string, cubature: string, weight: string, category: string, time:  any) {
      this.name = name;
      this.email = email;
      this.vehicle = vehicle;
      this.cubature = cubature;
      this.weight = weight;
      this.category = category;
      this.time = time;
    }
  }
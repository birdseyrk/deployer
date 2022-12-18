export class Host {
  public hostName: string;
  public ipAddress: string;

  constructor(hostName: string, ipAddress: string) {
    this.hostName = hostName;
    this.ipAddress = ipAddress
  }
}
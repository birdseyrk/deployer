import { Component, OnInit } from '@angular/core';

//import { Host } from '../hosts.model';
import { Host } from './host.model';
import { ChildActivationEnd } from '@angular/router';
import * as child from 'child_process';

//const { spawn } = require('child_process');
//const shell = require('shelljs')

@Component({
  // selector: 'app-servers',    use <app-servers></app-servers> - preferred for components
  // selector: '[app-servers]',  use <div app-servers><div>
  // selector: '.app-servers',   use <div class="app-servers"
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  implements OnInit {
  hosts: Host[] = [
    new Host('ubunt1', '192.168.1.101'),
    new Host('ubunt2', '192.168.1.102'),
    new Host('ubunt3', '192.168.1.103'),
    new Host('ubunt4', '192.168.1.104'),
    new Host('ubunt5', '192.168.1.105')
  ];
  constructor() { }

  ngOnInit() {

  }

  onPingServers() {
    //var myPing: child.ChildProcess = child.exec('../script_files/ping.sh');

    var spawn = require('child_process').spawn;
    var child = spawn('pwd');


    console.log("Ping Servers");
  }

}

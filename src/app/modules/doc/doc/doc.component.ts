import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { DocModel } from 'src/app/core/models/doc-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { InformationService } from 'src/app/core/services/information.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit {

  doc!:DocModel
  id!:number
  constructor(
    private navInfo:NavInformationService,
    public theme:ThemeService,
    public informations:InformationService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.navInfo.select(0)
    this.id = Number(this.route.snapshot.paramMap.get("id")!)
    if(!this.informations.docs.has(this.id)){
      this.informations.docs.set(this.id,{})
    }
    this.doc = this.informations.docs.get(this.id)!
  }

}

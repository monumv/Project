import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;  status: string; do: string; dt: string;  dtr: string;  df: string;
  dfi: string; dsi: string; dse: string; de: string; dn: string; dtn: string;
  elv: string; twlv: string; thir: string; frth: string; fiftn: string; sxtn: string;
  svtn: string; eghtn: string; nnty: string; twnty: string; twntyo: string; twntyt: string;  
  twntyth: string; twntyfr: string; twntyfv: string; twntysx: string; twntysvn: string;
  twntyegt: string;  twntyn: string; thirty: string; total: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, status: 'Yash Bhatia', do:'P', dt:'P', dtr:'P', df:'P', dfi:'P', dsi:'P',
dse:'P', de:'P', dn:'P', dtn:'P', elv:'A', twlv:'P', thir:'P', frth:'P', fiftn:'P', sxtn:'P',
 svtn:'P', eghtn:'P', nnty:'P', twnty:'P', twntyo:'P', twntyt:'P', twntyth:'P', twntyfr:'P',
twntyfv:'P', twntysx:'A', twntysvn:'P', twntyegt:'P', twntyn:'A', thirty:'P', total:'27'},

{position: 2, status: 'Yash Bhatia', do:'A', dt:'P', dtr:'P', df:'P', dfi:'P', dsi:'P',
dse:'P', de:'P', dn:'P', dtn:'P', elv:'P', twlv:'P', thir:'A', frth:'P', fiftn:'P', sxtn:'P',
 svtn:'A', eghtn:'P', nnty:'P', twnty:'P', twntyo:'P', twntyt:'P', twntyth:'A', twntyfr:'P',
twntyfv:'P', twntysx:'P', twntysvn:'P', twntyegt:'P', twntyn:'P', thirty:'P', total:'26'},


{position: 3, status: 'Yash Bhatia', do:'P', dt:'P', dtr:'P', df:'P', dfi:'P', dsi:'P',
dse:'P', de:'P', dn:'P', dtn:'A', elv:'P', twlv:'P', thir:'P', frth:'A', fiftn:'P', sxtn:'P',
 svtn:'P', eghtn:'P', nnty:'P', twnty:'P', twntyo:'P', twntyt:'P', twntyth:'P', twntyfr:'P',
twntyfv:'A', twntysx:'P', twntysvn:'P', twntyegt:'P', twntyn:'P', thirty:'P', total:'27'},


{position: 4, status: 'Yash Bhatia', do:'A', dt:'P', dtr:'P', df:'P', dfi:'P', dsi:'P',
dse:'P', de:'P', dn:'P', dtn:'P', elv:'P', twlv:'P', thir:'HD', frth:'P', fiftn:'P', sxtn:'P',
 svtn:'P', eghtn:'P', nnty:'HD', twnty:'P', twntyo:'P', twntyt:'P', twntyth:'A', twntyfr:'P',
twntyfv:'P', twntysx:'P', twntysvn:'P', twntyegt:'P', twntyn:'P', thirty:'P', total:'28'},


{position: 5, status: 'Yash Bhatia', do:'P', dt:'P', dtr:'P', df:'A', dfi:'P', dsi:'P',
dse:'P', de:'P', dn:'P', dtn:'HD', elv:'P', twlv:'P', thir:'P', frth:'P', fiftn:'P', sxtn:'P',
 svtn:'P', eghtn:'P', nnty:'P', twnty:'P', twntyo:'P', twntyt:'P', twntyth:'A', twntyfr:'P',
twntyfv:'P', twntysx:'P', twntysvn:'P', twntyegt:'P', twntyn:'HD', thirty:'P', total:'28'},


{position: 6, status: 'Yash Bhatia', do:'P', dt:'P', dtr:'P', df:'P', dfi:'P', dsi:'P',
dse:'P', de:'P', dn:'HD', dtn:'P', elv:'P', twlv:'P', thir:'P', frth:'P', fiftn:'P', sxtn:'P',
 svtn:'P', eghtn:'P', nnty:'P', twnty:'P', twntyo:'HD', twntyt:'P', twntyth:'P', twntyfr:'P',
twntyfv:'P', twntysx:'P', twntysvn:'P', twntyegt:'P', twntyn:'P', thirty:'A', total:'28'},


{position: 7, status: 'Yash Bhatia', do:'P', dt:'P', dtr:'P', df:'P', dfi:'P', dsi:'P',
dse:'P', de:'P', dn:'P', dtn:'P', elv:'A', twlv:'P', thir:'P', frth:'A', fiftn:'P', sxtn:'P',
 svtn:'P', eghtn:'P', nnty:'P', twnty:'P', twntyo:'P', twntyt:'P', twntyth:'P', twntyfr:'P',
twntyfv:'P', twntysx:'P', twntysvn:'P', twntyegt:'A', twntyn:'P', thirty:'P', total:'27'},


{position: 8, status: 'Yash Bhatia', do:'P', dt:'P', dtr:'P', df:'P', dfi:'P', dsi:'P',
dse:'P', de:'P', dn:'P', dtn:'P', elv:'P', twlv:'P', thir:'P', frth:'P', fiftn:'P', sxtn:'P',
 svtn:'P', eghtn:'P', nnty:'P', twnty:'P', twntyo:'P', twntyt:'P', twntyth:'P', twntyfr:'P',
twntyfv:'P', twntysx:'P', twntysvn:'P', twntyegt:'P', twntyn:'P', thirty:'P', total:'30'},


{position: 9, status: 'Yash Bhatia', do:'P', dt:'P', dtr:'P', df:'P', dfi:'P', dsi:'P',
dse:'P', de:'P', dn:'P', dtn:'P', elv:'P', twlv:'P', thir:'P', frth:'P', fiftn:'P', sxtn:'P',
 svtn:'P', eghtn:'P', nnty:'P', twnty:'A', twntyo:'P', twntyt:'P', twntyth:'P', twntyfr:'P',
twntyfv:'P', twntysx:'P', twntysvn:'P', twntyegt:'HD', twntyn:'P', thirty:'P', total:'28.5'},


{position: 10, status: 'Yash Bhatia', do:'P', dt:'P', dtr:'P', df:'P', dfi:'P', dsi:'P',
dse:'P', de:'P', dn:'P', dtn:'P', elv:'P', twlv:'P', thir:'P', frth:'P', fiftn:'P', sxtn:'P',
 svtn:'P', eghtn:'P', nnty:'P', twnty:'P', twntyo:'P', twntyt:'P', twntyth:'P', twntyfr:'P',
twntyfv:'P', twntysx:'P', twntysvn:'P', twntyegt:'P', twntyn:'P', thirty:'P', total:'30'},


{position: 11, status: 'Yash Bhatia', do:'P', dt:'P', dtr:'P', df:'P', dfi:'P', dsi:'P',
dse:'P', de:'P', dn:'P', dtn:'HD', elv:'P', twlv:'P', thir:'P', frth:'P', fiftn:'P', sxtn:'P',
 svtn:'P', eghtn:'P', nnty:'P', twnty:'P', twntyo:'P', twntyt:'P', twntyth:'HD', twntyfr:'P',
twntyfv:'P', twntysx:'P', twntysvn:'P', twntyegt:'P', twntyn:'P', thirty:'P', total:'29'},


{position: 12, status: 'Yash Bhatia', do:'P', dt:'P', dtr:'P', df:'P', dfi:'A', dsi:'P',
dse:'P', de:'P', dn:'P', dtn:'A', elv:'P', twlv:'P', thir:'P', frth:'P', fiftn:'P', sxtn:'P',
 svtn:'P', eghtn:'P', nnty:'P', twnty:'P', twntyo:'P', twntyt:'A', twntyth:'P', twntyfr:'P',
twntyfv:'P', twntysx:'P', twntysvn:'P', twntyegt:'P', twntyn:'P', thirty:'P', total:'27'},


{position: 13, status: 'Yash Bhatia', do:'P', dt:'P', dtr:'P', df:'P', dfi:'P', dsi:'P',
dse:'P', de:'P', dn:'P', dtn:'P', elv:'A', twlv:'P', thir:'P', frth:'A', fiftn:'P', sxtn:'P',
 svtn:'P', eghtn:'P', nnty:'P', twnty:'P', twntyo:'P', twntyt:'P', twntyth:'P', twntyfr:'P',
twntyfv:'A', twntysx:'P', twntysvn:'P', twntyegt:'P', twntyn:'P', thirty:'P', total:'27'},


 ];

interface Number {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-monthlyreport',
  templateUrl: './monthlyreport.component.html',
  styleUrls: ['./monthlyreport.component.css']
})
export class MonthlyreportComponent implements OnInit {

  
  
  displayedColumns: string[] = ['position', 'status',
   'do', 'dt', 'dtr', 'df', 'dfi', 'dsi', 'dse', 'de',
   'dn', 'dtn', 'elv', 'twlv', 'thir', 'frth', 'fiftn', 'sxtn',
   'svtn', 'eghtn', 'nnty', 'twnty', 'twntyo', 'twntyt', 'twntyth', 'twntyfr',
   'twntyfv', 'twntysx', 'twntysvn', 'twntyegt', 'twntyn', 'thirty', 'total'];
   datass = ELEMENT_DATA;

   

  ngOnInit(): void {
  }

}

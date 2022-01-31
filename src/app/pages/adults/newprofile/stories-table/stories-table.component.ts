import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { RelatoservicesService } from 'src/app/services/relatoservices.service';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';
import { GenericModalComponent } from 'src/app/components/generic-modal/generic-modal.component';

@Component({
  selector: 'app-stories-table',
  templateUrl: './stories-table.component.html',
  styleUrls: ['./stories-table.component.scss']
})
export class StoriesTableComponent implements OnInit {


  public arrayRelatosId: any;
  public rowSelected: any;
  public id: any;
  public dataSource: MatTableDataSource<any>;
  public modal: any[] = [];
  public data: any[] = [];
  public getId: any;
  public displayedColumns: string[] = ['titulo', 'categoria', 'fecha', 'reto', 'puntaje', 'lectura', 'actions'];
  // private paginator: MatPaginator;
  // private sortListStories: MatSort;
  // @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sortListStories: MatSort;



  constructor(
    private relatoservices: RelatoservicesService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router
  ) {

    this.activatedRoute.params.subscribe(params => {
      // console.log(params.id)
      this.id = params.id;
    })

  }

  public reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  public goToMainMenu(){
    this.router.navigate(['/newprofile', this.getId])
  }


  editStory(row: any) {
    this.router.navigate(['/editstory', row.id]);

  }
  readStory(row: any) {
    this.router.navigate(['/readstory', row.id]);
    console.log("Voy a leer Relato", row.id);
    

  }

  public IsDisabled(row: any) {
    return (row.reto == "Sí" ? true : false)
  }

  public IsEnabled(row: any) {
    return (row.reto == "No" ? true : false)
  }

  sendToChallenge(row:any) {
    console.log("Manda relato a Desafío");
    this.modal['title'] = "Confirmar borrado";
    this.modal['body'] = '¿Desea eliminar el relato?';
    this.modal['button1'] = 'CANCELAR';
    this.modal['button2'] = 'ACEPTAR';
    const dialogModal = this.dialog.open(ConfirmationModalComponent, {
      data: {
        title: this.modal['title'],
        body: this.modal['body'],
        relatoName: this.rowSelected.titulo,
        button1: this.modal['button1'],
        button2: this.modal['button2'],
        svg: 'delete',
      },
      // height: '85vh',
      autoFocus: false,
      disableClose: true,
    });

    dialogModal.afterClosed().subscribe(response => {
      if (response) {
        console.log("Soy el data", this.data);
        this.relatoservices.borrarRelato(row.id)
          .subscribe(apiResult => {
            this.reloadCurrentRoute();
            this.toastr.success("Relato eliminado con éxito");
            return;
          }, error => {
            this.toastr.error("Error al aliminar relato", error)
          });
        return;
      }
    })


    
  }


  // public applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  deleteStory(row: any) {
    this.modal['title'] = "Confirmar borrado";
    this.modal['body'] = '¿Desea eliminar el relato?';
    this.modal['button1'] = 'CANCELAR';
    this.modal['button2'] = 'ACEPTAR';
    const dialogModal = this.dialog.open(ConfirmationModalComponent, {
      data: {
        title: this.modal['title'],
        body: this.modal['body'],
        relatoName: row.titulo,
        button1: this.modal['button1'],
        button2: this.modal['button2'],
        svg: 'delete',
      },
      // height: '85vh',
      autoFocus: false,
      disableClose: true,
    });

    dialogModal.afterClosed().subscribe(response => {
      if (response) {
        console.log("Soy el data", this.data);
        this.relatoservices.borrarRelato(row.id)
          .subscribe(apiResult => {
            this.reloadCurrentRoute();
            this.toastr.success("Relato eliminado con éxito");
            return;
          }, error => {
            this.toastr.error("Error al aliminar relato", error)
          });
        return;
      }
    })
}

ngOnInit(): void {

  this.getId = localStorage.getItem('id');
  console.log('data', this.data);

  this.relatoservices.todosRelatosMat(this.id)
    .subscribe(apiResult => {
      console.log(apiResult);
      this.data = apiResult && apiResult['body'];
      this.dataSource = new MatTableDataSource(this.data);
        // this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sortListStories;

    }, error => {
      this.dialog.open(GenericModalComponent, {
        data: {
          message: 'ERROR AL RECIBIR LOS DATOS',
          svg: 'edit',
        }

      });
      console.log('Error al obtener la data de todosRelatos', error);
    });
}

// AfterViewInit() {
//   this.dataSource.paginator = this.paginator;
//   this.dataSource.sort = this.sortListStories;
// }



}

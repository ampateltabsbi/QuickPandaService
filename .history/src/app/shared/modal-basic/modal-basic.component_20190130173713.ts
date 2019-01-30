import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalBasicComponent implements OnInit {
  @Input() dialogClass: string;
  @Input() hideHeader: boolean = false;
  @Input() hideFooter: boolean = false;
  public visible = false;
  public visibleAnimate = false;
  public My_Id = 0;

  constructor(){}

  ngOnInit(){
  }

  public open(my_Id: number): void {
    this.My_Id = my_Id;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

}

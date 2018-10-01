import { Directive,HostListener,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {
      console.log("funciona directiva");

   }
   @Input("appResaltado")valor;

   @HostListener("mouseenter")mouseEntre(){
     this.resaltar(this.valor || "yellow");
   }
   @HostListener("mouseleave")mouseSale(){
     this.resaltar(null);
   }

   resaltar(valor:string){
     this.el.nativeElement.style.backgroundColor=valor;
   }
}

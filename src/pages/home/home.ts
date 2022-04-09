import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  n1 = "";
  n2 = "";
  url = "http://lucasreno.kinghost.net/love-calculator/";
  r = 0;
  img = "";
  imagem = false;
  calculando = false;

  constructor(private http: HttpClient) {}

  async calcularAmor() {
    let soma = 0;
    this.imagem = false;
    while (soma != 10) {
      this.r = Math.floor(Math.random() * 100 + 1);
      this.calculando = true;
      soma += 1;
      await this.delay(75);
    }
    this.calculando = false;

    console.log(this.url + this.n1 + "/" + this.n2);
    this.img = "";

    this.http
      .get<any>(this.url + this.n1 + "/" + this.n2)
      .subscribe((resposta: any) => {
        this.r = resposta;
        if (this.r <= 20) {
          this.img = "../../assets/imgs/Respeita 😎✊.jpg";
        } else if (this.r <= 40) {
          this.img = "../../assets/imgs/soldado.jpeg";
        } else if (this.r <= 60) {
          this.img = "../../assets/imgs/vdc.jpg";
        } else if (this.r <= 80) {
          this.img = "../../assets/imgs/else if.jpeg";
        } else this.img = "../../assets/imgs/else.jpeg";
      });
  }
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

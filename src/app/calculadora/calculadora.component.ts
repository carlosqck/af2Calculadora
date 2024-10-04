import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  public display: string = '';

  calcInput(value: string) {
    this.display += value;
  }

  calcResultado() {
    try {
      this.display = this.calcExpressao(this.display).toString();
    } catch (e) {
      this.display = 'Erro';
    }
  }

  calcExpressao(expressao: string): number {
    try {
      return new Function('return ' + expressao)();
    } catch (error) {
      console.error('Erro ao avaliar a expressão', error);
      throw new Error('Expressão inválida');
    }
  }

  calcLimpar() {
    this.display = '';
  }
}

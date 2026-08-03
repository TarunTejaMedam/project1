import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './databinding.css',
})
export class Databinding {
  userName = 'Virat Kohli';
  img_url =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn1T4EAYle5QgehCzMKOjTun3sugyZNlQcrPrskA-UbA&s=10';

  flag = true;

  toggleFlag() {
    this.flag = !this.flag;
  }

  paraFlag = true;
  togglePara() {
    this.paraFlag = !this.paraFlag;
  }

  selectedState = '';
  stateSelect(event: any) {
    this.selectedState = event.target.value;
  }

  type = 'text';
  toggleType() {
    this.type = this.type == 'text' ? 'password' : 'text';
  }

  count = 0;
  countControl(type: string) {
    if (type == 'i') {
      this.count++;
    } else if (type == 'd') {
      this.count--;
    } else {
      this.count = 0;
    }
  }

  cel = 0;
  // far = 0;
  // convertTemp(){
  //   this.far = (this.cel*(9/5)) + 32;
  // }

  greeting = '';
  hour = new Date().getHours();
  getGreeting() {
    if (this.hour < 12) {
      this.greeting = 'Good Morning!';
    } else if (this.hour < 17) {
      this.greeting = 'Good Afternoon!';
    } else {
      this.greeting = 'Good Evening!';
    }
  }

  inputText = '';
  words = 0;
  char = 0;
  countText() {
    this.words = this.inputText.split(' ').length;
    this.char = this.inputText.split('').length;
  }

  num1 = 0;
  num2 = 0;
  operator = '';
  res = 0;
  calc() {
    if (this.operator == '+') this.res = this.num1 + this.num2;
    else if (this.operator == '-') this.res = this.num1 - this.num2;
    if (this.operator == '*') this.res = this.num1 * this.num2;
    if (this.operator == '/') this.res = this.num1 / this.num2;
  }

  fontSize = 16;
  size(inOrDe: string) {
    if (inOrDe == 'I') {
      this.fontSize++;
    } else if (inOrDe == 'D') {
      this.fontSize--;
    }
  }

  selectClr = '';
  bgColor = '';
  changeClr() {
    this.bgColor = this.selectClr;
  }
}

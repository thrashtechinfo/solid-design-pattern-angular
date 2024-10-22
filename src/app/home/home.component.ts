import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  bookTitle: string = 'Boost Your Angular Applications to Production-Grade with SOLID Design Principles';
  hashtags: string[] = ["angular", "typescript", "solid-principles", "scalibility", "author"]
  bookPurchase: {icon: string, name :string, url: string }[] = [
    {
      icon: 'https://i.ibb.co/xgFbfrC/Amazon-512.webp',
      name: 'Amazon',
      url: "https://www.amazon.com/Angular-Applications-Production-Grade-Design-Principles/dp/B0DJQRBTWF"
    },
    {
      icon: 'https://i.ibb.co/HTKzF3N/4494707.png',
      name: 'Goodreads',
      url: 'https://www.goodreads.com/book/show/220228979-boost-your-angular-applications-to-production-grade-with-solid-design-pr'
    }
  ]
}

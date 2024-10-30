import { Component } from '@angular/core';
import { HashtagsComponent } from '../components/hashtags/hashtags.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HashtagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  bookTitle: string = 'Boost Your Angular Applications to Production-Grade with SOLID Design Principles';
  hashtags: string[] = ["angular", "typescript", "solid-principles", "scalibility", "author"]
  bookPurchase: {id: number, icon: string, name :string, url: string }[] = [
    {
      id: 1,
      icon: 'assets/img/amazon.webp',
      name: 'Amazon',
      url: "https://www.amazon.com/Angular-Applications-Production-Grade-Design-Principles/dp/B0DJQRBTWF"
    },
    {
      id: 2,
      icon: 'assets/img/goodreads.png',
      name: 'Goodreads',
      url: 'https://www.goodreads.com/book/show/220228979-boost-your-angular-applications-to-production-grade-with-solid-design-pr'
    }
  ]
}

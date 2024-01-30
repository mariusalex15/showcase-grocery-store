import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-widget',
  templateUrl: './contact-widget.component.html',
  styleUrls: ['./contact-widget.component.scss']
})
export class ContactWidgetComponent {
  @Input() data: any;
}

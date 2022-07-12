import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-idea-suggestion',
  templateUrl: './idea-suggestion.component.html',
  styleUrls: ['./idea-suggestion.component.scss']
})
export class IdeaSuggestionComponent implements OnInit {

  constructor(
    public theme:ThemeService
  ) { }

  ngOnInit(): void {
  }

}

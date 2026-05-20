import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-case-studies',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudies {
  private langService = inject(LanguageService);

  caseStudies = [
    {
      categoryKey: 'caseStudies.healthcare.category',
      titleKey: 'caseStudies.healthcare.title',
      problemLabelKey: 'caseStudies.healthcare.problem',
      problemTextKey: 'caseStudies.healthcare.problemText',
      solutionLabelKey: 'caseStudies.healthcare.solution',
      solutionTextKey: 'caseStudies.healthcare.solutionText',
      image: '/images/case-studies/healthcare-case.png',
    },
    {
      categoryKey: 'caseStudies.finance.category',
      titleKey: 'caseStudies.finance.title',
      problemLabelKey: 'caseStudies.finance.problem',
      problemTextKey: 'caseStudies.finance.problemText',
      solutionLabelKey: 'caseStudies.finance.solution',
      solutionTextKey: 'caseStudies.finance.solutionText',
      image: '/images/case-studies/finance-case.png',
    },
    {
      categoryKey: 'caseStudies.industry.category',
      titleKey: 'caseStudies.industry.title',
      problemLabelKey: 'caseStudies.industry.problem',
      problemTextKey: 'caseStudies.industry.problemText',
      solutionLabelKey: 'caseStudies.industry.solution',
      solutionTextKey: 'caseStudies.industry.solutionText',
      image: '/images/case-studies/industry-case.png',
    },
  ];
}
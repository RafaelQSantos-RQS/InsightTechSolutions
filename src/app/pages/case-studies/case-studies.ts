import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-case-studies',
  imports: [RouterLink, NgOptimizedImage, TranslatePipe],
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
      image: 'AB6AXuCrzo0ag_h3KzMO4Fm6QpR6I2-We-g3LFBwcjLT2AH3MYbvB_w6mv-wWJlgU1ehKVikTtvxOtwlQELiLVpu8TzwziaHaAG-rSuBCnqLkgNYC4fr4Pgi7Th8ZI_dOgCLJQQIlxpRbbUowE6N5HUwhJWBNSLsNlqhgDe1x4dYXloLSmJFdy5ZKUSSwVozeZv6HG_EZZ40wp-r6g3YPpMREgEq9JpTc6obNjeuuT9Hov8x9wA3jaeBWPAfoYlIShjTKlMuX8K3-oFbP723',
    },
    {
      categoryKey: 'caseStudies.finance.category',
      titleKey: 'caseStudies.finance.title',
      problemLabelKey: 'caseStudies.finance.problem',
      problemTextKey: 'caseStudies.finance.problemText',
      solutionLabelKey: 'caseStudies.finance.solution',
      solutionTextKey: 'caseStudies.finance.solutionText',
      image: 'AB6AXuAJt8DlqcfJpRKA8E4dGLGFyq62NbcKSQithnyJT_ZXDrHYhSeg-H0qz5eel3uwruzYHlksLNn0CDUumMFz2NtrY424CwXA1gRoqSe14Gv5izab2wxFSaWDDHijRRtPxOubLPyuQ-UhiepSvixWeFFyF40oh1pIQRvjUhSOpknXY4DgTY3JL6fL_gj1CBnm4mTzY69u_WlpdQQImLaOXZiICFPfxZqyg66G7h1Xew3r8UWlhsIQ44Eetmh8O-Ee6Yh0PIj1kBSgMv3m',
    },
    {
      categoryKey: 'caseStudies.industry.category',
      titleKey: 'caseStudies.industry.title',
      problemLabelKey: 'caseStudies.industry.problem',
      problemTextKey: 'caseStudies.industry.problemText',
      solutionLabelKey: 'caseStudies.industry.solution',
      solutionTextKey: 'caseStudies.industry.solutionText',
      image: 'AB6AXuA-grHrm-4FE7trrGGjp0_TfLwpmASJ8nxao00yKD76U7wgqkJW3FZGnD4kyEB8WNSCsnn7NLGod5uv1X13V2lCZQdUSx2SAYSQ6G7BFeiCXyXiHzicOf9Uws1ItykDtIobLafMV9Q3w6Y1j9nZ45mRqO_qByPAPKJwNNEADmIMtjhA7rkqLoh581d2TJcJ3a6XyixXeUDfvQF39hWu3YQgBKZVnkoOCuRr4kYUUnrGNMo2za9_6NqOgWJTpeOX7lXfKF1_M0NNSKAV',
    },
  ];
}
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-case-studies',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudies {
  caseStudies = [
    {
      category: 'Healthcare',
      image: 'AB6AXuCrzo0ag_h3KzMO4Fm6QpR6I2-We-g3LFBwcjLT2AH3MYbvB_w6mv-wWJlgU1ehKVikTtvxOtwlQELiLVpu8TzwziaHaAG-rSuBCnqLkgNYC4fr4Pgi7Th8ZI_dOgCLJQQIlxpRbbUowE6N5HUwhJWBNSLsNlqhgDe1x4dYXloLSmJFdy5ZKUSSwVozeZv6HG_EZZ40wp-r6g3YPpMREgEq9JpTc6obNjeuuT9Hov8x9wA3jaeBWPAfoYlIShjTKlMuX8K3-oFbP723',
      title: 'Predictive Patient Care',
      problem: 'High readmission rates due to delayed post-operative monitoring data analysis.',
      solution: 'Implemented a real-time predictive analytics engine reducing readmissions by 22%.',
    },
    {
      category: 'Finance',
      image: 'AB6AXuAJt8DlqcfJpRKA8E4dGLGFyq62NbcKSQithnyJT_ZXDrHYhSeg-H0qz5eel3uwruzYHlksLNn0CDUumMFz2NtrY424CwXA1gRoqSe14Gv5izab2wxFSaWDDHijRRtPxOubLPyuQ-UhiepSvixWeFFyF40oh1pIQRvjUhSOpknXY4DgTY3JL6fL_gj1CBnm4mTzY69u_WlpdQQImLaOXZiICFPfxZqyg66G7h1Xew3r8UWlhsIQ44Eetmh8O-Ee6Yh0PIj1kBSgMv3m',
      title: 'Algorithmic Risk Mitigation',
      problem: 'Legacy systems failing to identify micro-fluctuations in volatile market segments.',
      solution: 'Deployed an AI-driven risk assessment model, protecting $4.2B in assets under management.',
    },
    {
      category: 'Industry',
      image: 'AB6AXuA-grHrm-4FE7trrGGjp0_TfLwpmASJ8nxao00yKD76U7wgqkJW3FZGnD4kyEB8WNSCsnn7NLGod5uv1X13V2lCZQdUSx2SAYSQ6G7BFeiCXyXiHzicOf9Uws1ItykDtIobLafMV9Q3w6Y1j9nZ45mRqO_qByPAPKJwNNEADmIMtjhA7rkqLoh581d2TJcJ3a6XyixXeUDfvQF39hWu3YQgBKZVnkoOCuRr4kYUUnrGNMo2za9_6NqOgWJTpeOX7lXfKF1_M0NNSKAV',
      title: 'Supply Chain Optimization',
      problem: 'Inefficient logistics routing causing a 15% increase in annual operational costs.',
      solution: 'Integrated IoT tracking with machine learning to optimize global fleet movements.',
    },
  ];
}
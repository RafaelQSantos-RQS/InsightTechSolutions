import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  services = [
    {
      icon: 'schema',
      title: 'Data Engineering',
      description: 'Design and implementation of scalable, automated data pipelines and ETL processes. We establish the robust architectural foundation necessary to ensure your data is clean, accessible, and primed for advanced analytics.',
      benefits: ['Scalable Pipeline Architecture', 'Cloud-Native Solutions', 'Real-Time Data Integration'],
    },
    {
      icon: 'memory',
      title: 'Data Science & ML',
      description: 'Deployment of advanced predictive modeling and machine learning algorithms. We move beyond historical reporting to forecast trends, optimize complex processes, and uncover hidden patterns within your datasets.',
      benefits: ['Predictive Analytics', 'Machine Learning Models', 'Pattern Recognition'],
    },
    {
      icon: 'bar_chart',
      title: 'Data Analysis',
      description: 'Creation of intuitive, high-fidelity dashboards and comprehensive reporting structures. We distill complex metrics into clear visual narratives designed specifically for executive decision-making and operational oversight.',
      benefits: ['Executive Dashboards', 'Custom Reporting', 'KPI Tracking'],
    },
    {
      icon: 'lightbulb',
      title: 'Strategic Consulting',
      description: 'Expert advisory services to align your data initiatives with overarching business objectives. We conduct maturity assessments, define technology roadmaps, and establish data governance frameworks to ensure long-term ROI.',
      benefits: ['Technology Roadmaps', 'Data Governance', 'Maturity Assessments'],
    },
  ];
}
export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  tags: string[];
  metric: {
    value: string;
    label: string;
  };
  featured?: boolean;
  context: string[];
  problem: string[];
  approach: string[];
  outcome: string[];
  note?: string;
  interactive?: 'backend-rewrite';
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'rust-backend-rewrite',
    title: 'Java/Liferay to Rust Backend Rewrite',
    description:
      'A production backend rewrite that reduced baseline memory from 4 GB to 16 MB and delivered 4 years of crash-free production uptime.',
    summary:
      'Rebuilt a heavy Java/Liferay backend in Rust, reducing memory from 4 GB to 16 MB and lowering infrastructure cost.',
    tags: ['Rust', 'Backend architecture', 'Performance', 'Cloud cost'],
    metric: {
      value: '4 GB -> 16 MB',
      label: 'baseline memory reduction',
    },
    featured: true,
    context: [
      'The original backend was a Java/Liferay system running production workloads for an IoT platform.',
      'The business did not need a framework-heavy runtime. It needed a predictable service that could run reliably, use fewer resources, and stay maintainable.',
    ],
    problem: [
      'Baseline memory usage was around 4 GB.',
      'The service crashed frequently enough to affect operations.',
      'Hosting required an oversized cloud instance.',
      'The stack had more framework weight than the workload justified.',
    ],
    approach: [
      'Rebuilt the server-side application in Rust.',
      'Reduced dependency weight and tightened resource ownership.',
      'Simplified deployment and optimized database access paths.',
      'Kept the runtime focused on the actual API and data workload.',
    ],
    outcome: [
      'Baseline memory dropped from 4 GB to 16 MB.',
      'The service moved from an 8 GB EC2 instance to a low-cost DigitalOcean droplet.',
      'The Rust rewrite delivered 4 years of crash-free production uptime.',
    ],
    note:
      'This was not just a language rewrite. The value came from reducing operational complexity, lowering infrastructure cost, and making the system predictable enough to run for years.',
    interactive: 'backend-rewrite',
  },
  {
    slug: 'iot-platform',
    title: 'End-to-End IoT Platform Architecture',
    description:
      'An IoT platform spanning firmware, backend APIs, dashboards, mobile apps, reports, and real-time alerts.',
    summary:
      'Architected and delivered an IoT platform monitoring millions of devices and sending real-time alerts to thousands of customers.',
    tags: ['IoT', 'Firmware', 'Rust', 'Time-series data', 'Mobile apps'],
    metric: {
      value: 'Millions',
      label: 'of IoT devices monitored',
    },
    featured: true,
    context: [
      'The product needed a complete device-to-cloud system, not just isolated firmware or a dashboard.',
      'The work covered edge devices, backend services, data storage, alerts, reports, web dashboards, and mobile apps.',
    ],
    problem: [
      'The system needed to handle device data at scale while still being practical for a compact engineering team to maintain.',
      'The platform needed field reliability because device failures, connectivity issues, or delayed alerts directly affected customers.',
    ],
    approach: [
      'Built firmware and device communication paths.',
      'Designed backend APIs, ingestion paths, time-series storage, and real-time alerting.',
      'Created web dashboards, mobile apps, and automated reports.',
      'Supported cloud deployment and operational maintenance.',
    ],
    outcome: [
      'The platform monitored millions of IoT devices.',
      'It delivered real-time alerts to thousands of customers.',
      'Firmware, backend, frontend, mobile, and deployment decisions were made with the full system in mind.',
    ],
  },
  {
    slug: 'embedded-linux-boot',
    title: 'Embedded Linux Boot Optimization',
    description: 'Reduced embedded Linux GUI boot time to 1.5 seconds on constrained hardware.',
    summary:
      'Replaced a heavyweight kiosk stack with a custom Yocto Linux build and framebuffer UI, reducing GUI boot time to 1.5 seconds.',
    tags: ['Embedded Linux', 'U-Boot', 'Yocto', 'Framebuffer', 'AM335x'],
    metric: {
      value: '1.5 sec',
      label: 'GUI boot time',
    },
    context: [
      'The device was based on constrained embedded hardware where a heavy kiosk-style UI stack made the system slow and resource-hungry.',
    ],
    problem: [
      'The existing UI path depended on heavyweight desktop components.',
      'Startup time was too slow, and the hardware could not comfortably spare the memory and CPU overhead.',
    ],
    approach: [
      'Built a custom Yocto Linux image.',
      'Used U-Boot Falcon mode.',
      'Removed X11 and browser overhead.',
      'Replaced the Chrome kiosk UI with a custom framebuffer renderer.',
    ],
    outcome: [
      'The embedded GUI booted in 1.5 seconds.',
      'The interface became responsive on constrained hardware.',
      'The device no longer depended on heavyweight desktop components.',
    ],
  },
  {
    slug: 'cellular-edge-connectivity',
    title: 'Cellular Edge Connectivity for Embedded ARM Devices',
    description: 'Integrated 4G LTE modules with embedded ARM Linux devices for reliable field connectivity.',
    summary:
      'Integrated LTE modules, NDIS driver behavior, AT command flows, and OTA paths for remote embedded devices.',
    tags: ['Embedded Linux', 'LTE', 'ARM', 'NDIS', 'OTA'],
    metric: {
      value: '2G / 4G / Wi-Fi',
      label: 'field connectivity paths',
    },
    context: [
      'Remote field devices needed stable network connectivity over cellular and Wi-Fi paths.',
      'Connectivity failures directly affected device observability, OTA updates, and customer operations.',
    ],
    problem: [
      'Cellular modules are not plug-and-play in production embedded Linux systems.',
      'Driver behavior, AT command state, reconnect logic, and field conditions all matter.',
    ],
    approach: [
      'Integrated LTE modules with ARM Cortex-A8 hardware.',
      'Worked through NDIS driver behavior and AT command flows.',
      'Handled module state, remote deployment constraints, and OTA update paths.',
    ],
    outcome: [
      'The device gained production-ready cellular connectivity.',
      'Remote deployments had more reliable cloud communication over 2G, 4G, and Wi-Fi paths.',
    ],
  },
  {
    slug: 'graphql-query-cost-proxy',
    title: 'GraphQL Query Cost Reverse Proxy',
    description:
      'A reverse proxy that evaluates GraphQL query cost before forwarding requests to backend infrastructure.',
    summary:
      'Built a reverse proxy that limits high-cost GraphQL requests before they reach backend services.',
    tags: ['GraphQL', 'Reverse proxy', 'Security', 'DDoS mitigation'],
    metric: {
      value: 'Early reject',
      label: 'for expensive GraphQL traffic',
    },
    context: [
      'GraphQL endpoints can be difficult to protect because a small request can trigger a large backend workload depending on query depth, shape, and resolver behavior.',
    ],
    problem: [
      'Traditional request limits do not always map cleanly to GraphQL.',
      'A request may look small at the HTTP layer while still being expensive for the application to execute.',
    ],
    approach: [
      'Built a reverse proxy that evaluated incoming GraphQL query cost before forwarding requests.',
      'Rejected abusive or overly expensive traffic before backend services had to perform costly work.',
    ],
    outcome: [
      'The proxy added a practical protection layer between public traffic and backend infrastructure.',
      'It reduced exposure to high-cost GraphQL requests.',
    ],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  system?: string;
  order: number;
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
    system: 'Industrial IoT platform backend',
    order: 2,
    tags: ['Rust', 'Backend architecture', 'Performance', 'Cloud cost'],
    metric: {
      value: '4 GB -> 16 MB',
      label: 'baseline memory reduction',
    },
    featured: true,
    context: [
      'The original backend was a Java/Liferay application running on Tomcat for an IoT platform.',
      'This backend was the cloud side of the same industrial IoT platform that handled device telemetry, dashboards, alerts, reports, OTA, and customer operations.',
      'Even before business logic was considered, the JVM, Tomcat, Liferay, OSGi, and JAR/WAR deployment model created a gigabyte-scale runtime baseline.',
      'The system handled MQTT device ingestion, time-series writes, dashboards, APIs, user management, alerts, reports, payments, SMS/OTP, and OTA-related workflows.',
    ],
    problem: [
      'Idle memory usage was around 4 GB before meaningful workload was considered.',
      'Startup and deployment were slow because of the Java/Liferay stack, OSGi, and JAR/WAR packaging.',
      'The framework overhead forced the service onto larger infrastructure than the actual business logic required.',
      'The system needed to ingest MQTT data, write to GraphiteDB and InfluxDB, and serve REST APIs without carrying the Liferay application model.',
    ],
    approach: [
      'Moved the entire business logic into a Rust backend using Tokio, Axum, and async PostgreSQL.',
      'Rebuilt the frontend separately in Angular and served it as static files through Nginx.',
      'Migrated the database as part of the replacement.',
      'Kept the backend focused on MQTT ingestion, time-series writes, REST APIs, alerts, reports, payments, and OTA-related workflows.',
    ],
    outcome: [
      'Idle baseline memory dropped from roughly 4 GB to around 16 MB.',
      'The service moved from an 8 GB EC2 instance to a low-cost DigitalOcean droplet.',
      'Rust startup was effectively instant compared with the Java/Liferay runtime.',
      'Under load, memory usage was driven mainly by telemetry buffering before time-series writes; REST API handling remained lightweight.',
      'The rewrite delivered 4 years of crash-free production uptime.',
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
      'Architected and delivered an industrial IoT platform for 10k+ deployed devices generating millions of datapoints.',
    system: 'End-to-end industrial IoT platform',
    order: 1,
    tags: ['IoT', 'Firmware', 'Rust', 'Time-series data', 'Mobile apps'],
    metric: {
      value: '10k+',
      label: 'field devices monitored',
    },
    featured: true,
    context: [
      'The platform monitored industrial meters and field equipment connected through RS485 and protocols such as BACnet.',
      'Deployments included chillers, charging stations, meters, sensors, and other industrial systems.',
      'Devices sent telemetry such as voltage, current, status, health, usage, alarms, logs, and environmental readings.',
    ],
    problem: [
      'The system needed to support Wi-Fi, 2G, and 4G device variants with firmware matched to the selected module and protocol combination.',
      'The main backend pressure points were database write throughput and query speed over large time-series datasets.',
      'The platform needed field reliability because device failures, connectivity issues, or delayed alerts directly affected customers.',
    ],
    approach: [
      'Owned the platform end to end across firmware, backend, frontend, mobile apps, deployment, reporting, and alerting.',
      'Built device communication paths for RS485-connected systems and custom protocol integrations.',
      'Designed ingestion, PostgreSQL-backed APIs, GraphiteDB time-series storage, dashboards, and real-time alerting.',
      'Built Angular web interfaces and Capacitor mobile apps for customer-facing workflows.',
    ],
    outcome: [
      'The platform supported 10k+ deployed devices and millions of datapoints.',
      'It delivered dashboards, reports, and real-time alerts for industrial customers.',
      'Firmware, backend, frontend, mobile, and deployment decisions were made with the full system in mind.',
    ],
  },
  {
    slug: 'embedded-linux-boot',
    title: 'Embedded Linux Boot Optimization',
    description: 'Reduced embedded Linux GUI boot time to 1.5 seconds on constrained hardware.',
    summary:
      'Replaced a multi-minute Chrome kiosk startup on BeagleBone Black with a direct boot path and framebuffer UI.',
    system: 'On-device edge UI for the industrial IoT platform',
    order: 3,
    tags: ['Embedded Linux', 'U-Boot', 'Yocto', 'Framebuffer', 'AM335x'],
    metric: {
      value: '1.5 sec',
      label: 'GUI boot time',
    },
    context: [
      'The target was a BeagleBone Black / AM335x device with a Waveshare display.',
      'This was the edge-device side of the same IoT platform: field hardware collecting data, showing local status, and running parts of the stack on-site.',
      'The UI only needed to show battery voltages and handle basic touch interaction, but the old implementation used Chrome in kiosk mode.',
      'Over time, running Chrome on a single-core CPU with limited graphics capability became increasingly impractical.',
    ],
    problem: [
      'The original startup path took several minutes before the UI became usable.',
      'Chrome, X11, and browser runtime overhead were disproportionate for a narrow status-display UI.',
      'The product needed a small, predictable boot path that matched the hardware instead of a general-purpose desktop stack.',
    ],
    approach: [
      'Removed the main U-Boot stage, kept SPL, and used Falcon mode to load the Linux kernel directly.',
      'Modified the kernel source/configuration to embed the dm-crypt module needed during boot.',
      'Removed Chrome kiosk and desktop display-stack overhead.',
      'Built a custom /dev/fb0 UI using GuiLite.cpp and read touch input directly through Linux input devices.',
      'Cross-compiled the Rust backend/service stack for the device so the same core system could run on-site.',
    ],
    outcome: [
      'The embedded GUI booted in 1.5 seconds.',
      'The interface became responsive on constrained hardware.',
      'The device no longer depended on heavyweight desktop components.',
      'The tradeoff was giving up browser flexibility, which was acceptable because the UI had a narrow job: show battery voltage/status and handle simple touch input.',
    ],
  },
  {
    slug: 'cellular-edge-connectivity',
    title: 'Cellular Edge Connectivity for Field Devices',
    description:
      'Integrated SIMCom cellular modules with embedded Linux and microcontroller devices for reliable field connectivity.',
    summary:
      'Built cellular connectivity using raw AT command flows, SIMCom module variants, APN handling, OTA support, and watchdog recovery.',
    system: 'Field connectivity layer for the industrial IoT platform',
    order: 4,
    tags: ['Embedded Linux', 'LTE', 'ARM', 'AT commands', 'OTA'],
    metric: {
      value: '2G / 4G / Wi-Fi',
      label: 'field connectivity paths',
    },
    context: [
      'Remote field devices needed stable connectivity over Wi-Fi or cellular, depending on the deployment.',
      'This connectivity work supported the same field device family used by the industrial IoT platform.',
      'Host deployments included BeagleBone Black / AM335x devices, Orange Pi systems for on-premise installations, and microcontroller targets such as ESP8266.',
      'The cellular module depended on stock and deployment needs, so the implementation had to tolerate multiple SIMCom modules and variants.',
    ],
    problem: [
      'Cellular modules are not plug-and-play in production field systems.',
      'SIMCom AT command behavior varied across modules and even across minor variants, such as GNSS and non-GNSS versions.',
      'Carrier and SIM-provider APN behavior varied by deployment.',
      'Some modules returned unreliable network date/time over AT commands, so modem-provided time could not be trusted blindly.',
    ],
    approach: [
      'Used raw serial AT commands instead of relying on high-level modem abstractions, including SIMCom modules driven from microcontrollers such as ESP8266.',
      'Wrote custom C driver logic using the Arduino SDK and the module vendor Linux SDK ecosystem.',
      'Handled SIMCom module differences, APN configuration, OTA update paths, and module state transitions.',
      'Implemented hardware watchdog recovery for field reliability.',
    ],
    outcome: [
      'Devices could be configured for either Wi-Fi or cellular deployments using the same broader platform base.',
      'OTA updates worked over SIM/cellular on supported device variants.',
      'The integration handled real-world module, carrier, and APN variation instead of assuming uniform modem behavior.',
    ],
  },
  {
    slug: 'graphql-query-cost-proxy',
    title: 'GraphQL Query Cost Reverse Proxy',
    description:
      'A reverse proxy that evaluates GraphQL query cost before forwarding requests to backend infrastructure.',
    summary:
      'Built a reverse proxy that limits high-cost GraphQL requests before they reach backend services.',
    system: 'Infrastructure/security project',
    order: 5,
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

import './style.css'

const roadmapData = {
  outcomes: [
    { num: '01', title: 'Deploy Confidently', desc: 'Build, deploy, and manage production-grade Kubernetes clusters from scratch.' },
    { num: '02', title: 'Debug Like a Pro', desc: 'Troubleshoot pods, networking, storage, and RBAC issues with systematic precision.' },
    { num: '03', title: 'Pass the CKA', desc: 'Gain the skills and confidence to pass the Certified Kubernetes Administrator exam.' },
  ],
  timeline: [
    { weeks: 'Weeks 1\u20133', name: 'Foundation' },
    { weeks: 'Weeks 4\u20136', name: 'Core Workloads' },
    { weeks: 'Weeks 7\u201310', name: 'Production Ops' },
    { weeks: 'Weeks 11\u201313', name: 'Mastery & CKA' },
  ],
  phases: [
    {
      id: 'p1',
      badge: 'Phase 01',
      title: 'Foundation',
      subtitle: 'Weeks 1\u20133 \u00B7 Containers, Architecture & First Deploys',
      weeks: [
        {
          label: 'Week 1', title: 'Containers & Docker Deep Dive',
          tasks: [
            'Understand container fundamentals: namespaces, cgroups, layers',
            'Write multi-stage Dockerfiles for Go/Node/Python apps',
            'Build, tag, push images to Docker Hub & private registries',
            'Docker networking: bridge, host, overlay modes',
            'Docker Compose for multi-container local dev',
          ]
        },
        {
          label: 'Week 2', title: 'Kubernetes Architecture',
          tasks: [
            'Control plane components: API server, etcd, scheduler, controller manager',
            'Node components: kubelet, kube-proxy, container runtime',
            'Install Minikube/kind and spin up local clusters',
            'kubectl essentials: get, describe, logs, exec, port-forward',
            'Understand declarative vs imperative management',
          ]
        },
        {
          label: 'Week 3', title: 'Pods, ReplicaSets & Deployments',
          tasks: [
            'Pod lifecycle, multi-container pods, init containers',
            'ReplicaSets: scaling and self-healing',
            'Deployments: rolling updates, rollbacks, revision history',
            'Labels, selectors, and annotations',
            'Namespaces for resource isolation',
          ]
        },
      ],
      milestones: [
        'Deploy a multi-tier app on local cluster',
        'Write YAML from scratch without docs',
      ]
    },
    {
      id: 'p2',
      badge: 'Phase 02',
      title: 'Core Workloads',
      subtitle: 'Weeks 4\u20136 \u00B7 Services, Storage & Configuration',
      weeks: [
        {
          label: 'Week 4', title: 'Services & Networking',
          tasks: [
            'ClusterIP, NodePort, LoadBalancer service types',
            'DNS resolution inside the cluster (CoreDNS)',
            'Ingress controllers: NGINX, Traefik setup',
            'Network Policies for pod-to-pod traffic control',
            'Service meshes overview: Istio & Linkerd concepts',
          ]
        },
        {
          label: 'Week 5', title: 'Storage & Persistence',
          tasks: [
            'Volumes, PersistentVolumes, PersistentVolumeClaims',
            'StorageClasses and dynamic provisioning',
            'StatefulSets for stateful workloads (databases)',
            'ConfigMaps and Secrets for configuration injection',
            'Volume snapshots and backup strategies',
          ]
        },
        {
          label: 'Week 6', title: 'Configuration & Scheduling',
          tasks: [
            'Resource requests and limits (CPU/memory)',
            'LimitRanges and ResourceQuotas',
            'Node affinity, taints, and tolerations',
            'Pod priority and preemption',
            'Horizontal Pod Autoscaler (HPA) setup',
          ]
        },
      ],
      milestones: [
        'Expose app via Ingress with TLS',
        'Deploy StatefulSet with persistent storage',
      ]
    },
    {
      id: 'p3',
      badge: 'Phase 03',
      title: 'Production Operations',
      subtitle: 'Weeks 7\u201310 \u00B7 Security, Observability & CI/CD',
      weeks: [
        {
          label: 'Week 7', title: 'RBAC & Security',
          tasks: [
            'RBAC: Roles, ClusterRoles, RoleBindings',
            'ServiceAccounts and token management',
            'Pod Security Standards (restricted, baseline, privileged)',
            'Security contexts and seccomp profiles',
            'Image scanning with Trivy and admission controllers',
          ]
        },
        {
          label: 'Week 8', title: 'Observability Stack',
          tasks: [
            'Metrics Server and kubectl top',
            'Prometheus + Grafana monitoring stack',
            'Centralized logging with EFK/Loki',
            'Distributed tracing concepts (Jaeger)',
            'Alerting rules and SLO-based dashboards',
          ]
        },
        {
          label: 'Week 9', title: 'CI/CD & GitOps',
          tasks: [
            'Helm charts: create, template, package, deploy',
            'Kustomize for environment-specific overlays',
            'ArgoCD / Flux for GitOps-driven deployments',
            'GitHub Actions / GitLab CI pipelines for K8s',
            'Progressive delivery: canary and blue-green strategies',
          ]
        },
        {
          label: 'Week 10', title: 'Cluster Administration',
          tasks: [
            'kubeadm cluster bootstrap and upgrades',
            'etcd backup and restore procedures',
            'Certificate management and rotation',
            'Node maintenance: cordon, drain, uncordon',
            'Cluster autoscaling and cost optimization',
          ]
        },
      ],
      milestones: [
        'Full observability stack on cluster',
        'GitOps pipeline deploying to staging',
        'Perform etcd backup & restore',
      ]
    },
    {
      id: 'p4',
      badge: 'Phase 04',
      title: 'Mastery & CKA Prep',
      subtitle: 'Weeks 11\u201313 \u00B7 Advanced Patterns & Exam Readiness',
      weeks: [
        {
          label: 'Week 11', title: 'Advanced Patterns',
          tasks: [
            'Custom Resource Definitions (CRDs) and Operators',
            'DaemonSets, Jobs, and CronJobs deep dive',
            'Pod Disruption Budgets for high availability',
            'Multi-cluster strategies and federation concepts',
            'Advanced scheduling: topology spread constraints',
          ]
        },
        {
          label: 'Week 12', title: 'Troubleshooting Mastery',
          tasks: [
            'Systematic debugging: CrashLoopBackOff, ImagePullBackOff',
            'Networking troubleshooting: DNS, service connectivity',
            'Node NotReady diagnosis and recovery',
            'Control plane component failure scenarios',
            'JSONPath, custom-columns, and advanced kubectl',
          ]
        },
        {
          label: 'Week 13', title: 'CKA Exam Simulation',
          tasks: [
            'Timed practice exams (killer.sh, KodeKloud)',
            'Speed drills: imperative commands for fast answers',
            'Bookmark essential K8s docs pages',
            'Review weak areas from practice exam results',
            'Exam day strategy: time management and priorities',
          ]
        },
      ],
      milestones: [
        'Build a custom Operator',
        'Score 85%+ on practice exams',
        'Pass the CKA exam',
      ]
    },
  ],
  resources: [
    { icon: '\u2635', name: 'Kubernetes Docs', desc: 'Official reference \u2014 the only resource allowed during the CKA exam.' },
    { icon: '\u25B6', name: 'KodeKloud / Mumshad', desc: 'Hands-on labs with built-in practice environments.' },
    { icon: '\u2699', name: 'killer.sh', desc: 'CKA exam simulator \u2014 2 free sessions included with exam purchase.' },
    { icon: '\u2328', name: 'kind / Minikube', desc: 'Local cluster tools for daily hands-on practice.' },
  ]
}

function renderOutcomes(outcomes) {
  return outcomes.map(o => `
    <div class="outcome-card">
      <div class="outcome-num">${o.num}</div>
      <div class="outcome-title">${o.title}</div>
      <div class="outcome-desc">${o.desc}</div>
    </div>
  `).join('')
}

function renderTimeline(items) {
  return items.map((t, i) => `
    <div class="tl-item">
      <div class="tl-dot">${i + 1}</div>
      <div class="tl-label">${t.weeks}</div>
      <div class="tl-name">${t.name}</div>
    </div>
  `).join('')
}

function renderWeeks(weeks) {
  return weeks.map(w => `
    <div class="week-card">
      <div class="week-label">${w.label}</div>
      <div class="week-title">${w.title}</div>
      <ul class="task-list">
        ${w.tasks.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>
  `).join('')
}

function renderPhases(phases) {
  return phases.map(p => `
    <div class="phase ${p.id}">
      <div class="phase-header">
        <div class="phase-badge">${p.badge}</div>
        <div class="phase-title-block">
          <div class="phase-title">${p.title}</div>
          <div class="phase-subtitle">${p.subtitle}</div>
        </div>
      </div>
      <div class="weeks">${renderWeeks(p.weeks)}</div>
      <div class="milestone-strip">
        ${p.milestones.map(m => `<div class="milestone">Milestone: ${m}</div>`).join('')}
      </div>
    </div>
  `).join('')
}

function renderResources(resources) {
  return resources.map(r => `
    <div class="resource-card">
      <div class="resource-icon">${r.icon}</div>
      <div>
        <div class="resource-name">${r.name}</div>
        <div class="resource-desc">${r.desc}</div>
      </div>
    </div>
  `).join('')
}

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="header">
      <div class="eyebrow">Learning Roadmap</div>
      <h1>K8s Mastery<span>90 Day Plan</span></h1>
      <div class="header-meta">
        <div class="meta-chip"><strong>Duration:</strong> 90 Days</div>
        <div class="meta-chip"><strong>Phases:</strong> 4</div>
        <div class="meta-chip"><strong>Level:</strong> Beginner to Advanced</div>
        <div class="meta-chip"><strong>Goal:</strong> CKA Ready</div>
      </div>
    </div>

    <div class="outcomes">${renderOutcomes(roadmapData.outcomes)}</div>

    <div class="timeline">${renderTimeline(roadmapData.timeline)}</div>

    ${renderPhases(roadmapData.phases)}

    <div class="divider"></div>

    <div class="resources-section">
      <div class="section-label">Essential Resources</div>
      <div class="resources-grid">${renderResources(roadmapData.resources)}</div>
    </div>

    <div class="callout">
      <div class="callout-title">Consistency Over Intensity</div>
      <div class="callout-text">
        Dedicate 1\u20132 focused hours daily. Hands-on practice beats passive reading every time.
        Build something real every week and break it on purpose to learn how to fix it.
      </div>
    </div>
  </div>
`

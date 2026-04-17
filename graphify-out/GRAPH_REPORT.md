# Graph Report - .  (2026-04-17)

## Corpus Check
- Corpus is ~11,554 words - fits in a single context window. You may not need a graph.

## Summary
- 290 nodes · 534 edges · 23 communities detected
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.78)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `Carousel` - 28 edges
2. `Dropdown` - 22 edges
3. `Modal` - 20 edges
4. `ScrollSpy` - 20 edges
5. `Tab` - 18 edges
6. `BaseComponent` - 14 edges
7. `Collapse` - 14 edges
8. `Toast` - 14 edges
9. `Offcanvas` - 13 edges
10. `ScrollBarHelper` - 11 edges

## Surprising Connections (you probably didn't know these)
- `IntersectionObserver ScrollSpy` --semantically_similar_to--> `switchTab Function`  [INFERRED] [semantically similar]
  docs/script.js → docs/dsa/problems/deadline_tabs.js
- `Graphify Configuration (CLAUDE.md)` --references--> `Graphify Graph Report`  [EXTRACTED]
  CLAUDE.md → graphify-out/GRAPH_REPORT.md
- `Gossip Dissemination` --semantically_similar_to--> `Heartbeat`  [INFERRED] [semantically similar]
  docs/systemDesign/05-gossip-membership-observability.md → docs/systemDesign/01-clocks-and-time.md
- `Generation Clock (Epoch Clock)` --references--> `Raft Consensus Algorithm`  [EXTRACTED]
  docs/systemDesign/01-clocks-and-time.md → docs/systemDesign/02-consensus-and-coordination.md
- `Replicated Log` --conceptually_related_to--> `High-Water Mark (HWM)`  [INFERRED]
  docs/systemDesign/03-logs-and-replication.md → docs/systemDesign/01-clocks-and-time.md

## Hyperedges (group relationships)
- **Clock, Consensus, and Log Replication Core Triad** — sd01_hlc, sd02_clock_bound_wait, sd03_replicated_log [INFERRED 0.80]
- **Partitioning, Routing, and Membership Cluster** — sd04_key_range_partitions, sd04_fixed_partitions, sd05_gossip_dissemination [INFERRED 0.75]
- **Leader-Quorum-ReplicatedLog Consensus Pattern** — sd02_leader_followers, sd02_quorum, sd03_replicated_log [INFERRED 0.85]

## Communities

### Community 0 - "Bootstrap Collapse"
Cohesion: 0.1
Nodes (3): Collapse, Modal, reflow()

### Community 1 - "Distributed Clocks & Time"
Cohesion: 0.09
Nodes (38): Generation Clock (Epoch Clock), Heartbeat, High-Water Mark (HWM), Hybrid Logical Clock (HLC), Lamport Clock, Lease (Time-bounded Lock), Low-Water Mark (LWM), Clock-Bound Wait (+30 more)

### Community 2 - "Bootstrap Core Utilities"
Cohesion: 0.11
Nodes (22): addHandler(), allowedAttribute(), bootstrapDelegationHandler(), bootstrapHandler(), defineJQueryPlugin(), execute(), executeAfterTransition(), findHandler() (+14 more)

### Community 3 - "Bootstrap Carousel"
Cohesion: 0.13
Nodes (2): Carousel, isRTL()

### Community 4 - "Bootstrap Alerts & Buttons"
Cohesion: 0.1
Nodes (3): Alert, Button, Popover

### Community 5 - "Bootstrap Base Component"
Cohesion: 0.15
Nodes (5): BaseComponent, getElement(), isElement(), isVisible(), toType()

### Community 6 - "Bootstrap Tab Navigation"
Cohesion: 0.24
Nodes (2): getElementFromSelector(), Tab

### Community 7 - "Bootstrap Dropdown"
Cohesion: 0.16
Nodes (2): Dropdown, isDisabled()

### Community 8 - "Bootstrap Toast & Dispose"
Cohesion: 0.15
Nodes (1): Toast

### Community 9 - "Bootstrap ScrollSpy"
Cohesion: 0.23
Nodes (1): ScrollSpy

### Community 10 - "Bootstrap Scrollbar Helper"
Cohesion: 0.35
Nodes (1): ScrollBarHelper

### Community 11 - "Bootstrap Modal & Offcanvas"
Cohesion: 0.31
Nodes (1): Offcanvas

### Community 12 - "Typed.js Animation"
Cohesion: 0.53
Nodes (4): i(), n(), s(), t()

### Community 13 - "Site UI Scripts"
Cohesion: 0.4
Nodes (5): Code Tabs UI Component, switchTab Function, Active Nav Link Highlighter, IntersectionObserver ScrollSpy, Nav Toggle Handler

### Community 14 - "Consensus Trade-offs (2PC vs Sagas)"
Cohesion: 1.0
Nodes (3): Two-Phase Commit (2PC), Rationale: Sagas preferred over 2PC in microservices, Sagas (Distributed Transaction Alternative)

### Community 15 - "Deadline Tab Component"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Graphify Config & Report"
Cohesion: 1.0
Nodes (2): Graphify Configuration (CLAUDE.md), Graphify Graph Report

### Community 17 - "AOS Scroll Script"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "AOS Animation Library"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Site README"
Cohesion: 1.0
Nodes (1): Site URL (naharihar.github.io)

### Community 20 - "System Design Mindmap"
Cohesion: 1.0
Nodes (1): System Design Mindmap

### Community 21 - "System Design Flashcards"
Cohesion: 1.0
Nodes (1): System Design Flashcards

### Community 22 - "Single-Socket Channel"
Cohesion: 1.0
Nodes (1): Single Socket Channel

## Knowledge Gaps
- **15 isolated node(s):** `Nav Toggle Handler`, `Code Tabs UI Component`, `Site URL (naharihar.github.io)`, `Graphify Configuration (CLAUDE.md)`, `Graphify Graph Report` (+10 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Deadline Tab Component`** (2 nodes): `deadline_tabs.js`, `switchTab()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Graphify Config & Report`** (2 nodes): `Graphify Configuration (CLAUDE.md)`, `Graphify Graph Report`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `AOS Scroll Script`** (1 nodes): `script.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `AOS Animation Library`** (1 nodes): `aos.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Site README`** (1 nodes): `Site URL (naharihar.github.io)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `System Design Mindmap`** (1 nodes): `System Design Mindmap`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `System Design Flashcards`** (1 nodes): `System Design Flashcards`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Single-Socket Channel`** (1 nodes): `Single Socket Channel`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Carousel` connect `Bootstrap Carousel` to `Bootstrap Toast & Dispose`, `Bootstrap Core Utilities`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Why does `ScrollSpy` connect `Bootstrap ScrollSpy` to `Bootstrap Core Utilities`, `Bootstrap Alerts & Buttons`, `Bootstrap Base Component`, `Bootstrap Dropdown`, `Bootstrap Toast & Dispose`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **Why does `Dropdown` connect `Bootstrap Dropdown` to `Bootstrap Collapse`, `Bootstrap Core Utilities`, `Bootstrap Carousel`, `Bootstrap Alerts & Buttons`, `Bootstrap Base Component`, `Bootstrap Toast & Dispose`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **What connects `Nav Toggle Handler`, `Code Tabs UI Component`, `Site URL (naharihar.github.io)` to the rest of the system?**
  _15 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Bootstrap Collapse` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Distributed Clocks & Time` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._
- **Should `Bootstrap Core Utilities` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
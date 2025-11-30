
# 01. Clocks & Time Semantics (Deep Dive, Generic)

This section covers logical and hybrid time models widely used across public systems including **Google Spanner**, **Cassandra**, **DynamoDB**, **MongoDB**, and **Kafka**.

## Lamport Clock
Lamport clocks provide logical, monotonic counters that preserve *happens-before* relationships.  
Used in: distributed chat apps, multi-node schedulers, CRDTs.

### Key Properties
- Deterministic ordering without physical clocks.
- Cannot detect concurrency.
- Requires tie-breakers (node IDs).

### Public Examples
- **Akka Distributed Actors**
- **Redis Streams logical ordering**
- **Cassandra lightweight transactions**

---

## Hybrid Logical Clock (HLC)
HLC combines physical time with Lamport counters.  
Used in: Google Spanner-like systems, CockroachDB, Yugabyte.

### Key Properties
- Encodes real time + causality.
- Avoids NTP dependency problems.
- Allows strictly monotonic timestamps.

### Public Examples
- **CockroachDB:** transaction timestamps.
- **Yugabyte:** global consistency in YSQL.

---

## Generation Clock (Epoch Clock)
Generation clocks represent epochs or terms that increase after topology changes.

Used in: Raft terms, Spanner leader epochs, Zookeeper sessions.

---

## High-Water Mark (HWM)
The highest *committed and visible* index or timestamp.

Used in:  
- Kafka committed offsets  
- Raft commit index  
- Aurora storage compaction  

---

## Low-Water Mark (LWM)
The earliest safe-to-retain offset.

Used in:  
- Kafka log retention  
- Kinesis stream trimming  

---

## Lease
A time-bounded lock.

Used in:  
- Zookeeper ephemeral nodes  
- etcd leases  
- Consul leader elections  

---

## Heartbeat
Periodic signals indicating node health.

Used in: Cassandra, Kubernetes node health, etcd, Consul.
